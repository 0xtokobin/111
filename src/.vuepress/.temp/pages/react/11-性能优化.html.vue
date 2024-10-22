<template><div><p>基于 Webpack 等构建工具打包带来的性能优化本章略过，主要讨论 React 内部的针对性优化</p>
<h2 id="虚拟滚动" tabindex="-1"><a class="header-anchor" href="#虚拟滚动" aria-hidden="true">#</a> 虚拟滚动</h2>
<h3 id="参考库" tabindex="-1"><a class="header-anchor" href="#参考库" aria-hidden="true">#</a> 参考库</h3>
<p>虚拟滚动参考<a href="https://github.com/bvaughn/react-window" target="_blank" rel="noopener noreferrer">react-window<ExternalLinkIcon/></a>和<a href="https://github.com/bvaughn/react-virtualized" target="_blank" rel="noopener noreferrer">react-virtualized<ExternalLinkIcon/></a>两个热门库</p>
<h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3>
<p>虚拟列表指的是「可视区域渲染」的列表。有三个概念需要了解：</p>
<ul>
<li><strong>滚动容器元素</strong>：一般情况下，滚动容器元素是 window 对象，也可以通过布局的方式，在某页面内指定一个或多个滚动容器元素，滚动也分横向和纵向滚动，滚动容器元素在滚动时每个列表项只是渲染一些纯文本。在这里我们只讨论元素纵向滚动</li>
<li><strong>可滚动区域</strong>：滚动容器元素的内部内容区域。假设有 100 条数据，每个列表项的高度是 50，那么可滚动的区域高度就是 100*50。可滚动区域当前具体高度值一般通过滚动容器元素的 scrollHeight 属性获取</li>
<li><strong>可视区域</strong>：滚动容器元素的视觉可见区域。如果容器元素是 window 对象，可视区域就是浏览器的视口大小（即视觉视口）；如果某个容器元素 div，其高度 300，右侧有纵向滚动条，那么视觉可见的区域就是可视区域</li>
</ul>
<p>虚拟滚动的实现是<strong>在处理用户滚动时，改变列表在可视区域的渲染部分，其具体步骤如下</strong></p>
<ul>
<li>计算当前可见区域起始数据的 startIndex</li>
<li>计算当前可见区域结束数据的 endIndex</li>
<li>计算当前可见区域的数据，并渲染到页面中</li>
<li>计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset，并设置到列表上</li>
<li>计算 endIndex 对应的数据相对于可滚动区域最底部的偏移位置 endOffset，并设置到列表上</li>
</ul>
<p><a href="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/ele-virtualized.png" target="_blank" rel="noopener noreferrer">虚拟滚动实现步骤<ExternalLinkIcon/></a></p>
<p>参考链接：<a href="https://blog.csdn.net/terrychinaz/article/details/112552673" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/terrychinaz/article/details/112552673<ExternalLinkIcon/></a></p>
<h2 id="rerender-优化" tabindex="-1"><a class="header-anchor" href="#rerender-优化" aria-hidden="true">#</a> rerender 优化</h2>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/should-component-update.png" alt="组件rerender" tabindex="0" loading="lazy"><figcaption>组件rerender</figcaption></figure>
<p>在这张组件树图例中，C6 触发的更新引起组件树重新渲染(rerender)，如果避开无需重渲染的组件：C2 及其子组件、C3 的子组件 C7、C8，最终执行最小量的重渲染组件就只会有 C1-C3-C6，从而提高渲染效率优化加载性能</p>
<h3 id="shouldcomponentupdate" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate" aria-hidden="true">#</a> <code v-pre>shouldComponentUpdate</code></h3>
<p>假设场景：组件只有当<code v-pre>props.color</code>或<code v-pre>state.count</code>的值改变才需要更新，可以使用 shouldComponentUpdate 来检查</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">CounterButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color <span class="token operator">!==</span> nextProps<span class="token punctuation">.</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">!==</span> nextState<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        Count: </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 color 和 count 的值没有改变，则组件不会触发 rerender</p>
<h3 id="purecomponent" tabindex="-1"><a class="header-anchor" href="#purecomponent" aria-hidden="true">#</a> <code v-pre>PureComponent</code></h3>
<p>仅对 props 和 state 中的所有字段作浅比较的情况，使用<code v-pre>React.PureComponent即可</code></p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">CounterButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        Count: </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="memo" tabindex="-1"><a class="header-anchor" href="#memo" aria-hidden="true">#</a> memo</h3>
<p>memo 是 React 面向函数式组件提供的浅比较 API，作用与<code v-pre>PureComponent</code>相同，包裹函数组件来阻止函数组件不必要的更新</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">CounterButton</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h3>
<p>详见<RouterLink to="/react/8-hook.html#%E6%83%B0%E6%80%A7%E5%8F%96%E5%80%BC-hook-usememo"><code v-pre>惰性取值Hook</code></RouterLink></p>
<h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h3>
<p>详见<RouterLink to="/react/8-hook.html#%E6%83%B0%E6%80%A7%E5%87%BD%E6%95%B0-hook-usecallback"><code v-pre>惰性函数Hook</code></RouterLink></p>
<h2 id="不可变数据操作" tabindex="-1"><a class="header-anchor" href="#不可变数据操作" aria-hidden="true">#</a> 不可变数据操作</h2>
<p>众所周知，React 遵守组件状态不可变的理念，通常在修改 state 的时候都需要使用 ES6 的解构，或者新对象赋值</p>
<p>immer.js 为我们提供了全新的无须使用解构即可触发 React 更新的写法</p>
<p>传统写法：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lin"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">todoList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"吃饭"</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addTodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> state<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">todoList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">.</span>todoList<span class="token punctuation">.</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"睡觉"</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>immer</code>：</p>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> produce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"immer"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lin"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">todoList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"吃饭"</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addTodoList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span>
      <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>todoList<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"睡觉"</span><span class="token punctuation">,</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>immer 实现原理</strong></p>
<p>immer 会通过原有的 state 基础状态生成一个可编辑的 draft 状态，开发者修改数据，修改完成后 immer 只会针对数据有变化的部分进行深拷贝，然后返回一个新状态，整个过程不影响初始状态</p>
<ol>
<li>draft 的实现</li>
</ol>
<p>draft 本质是初始状态的代理，核心是为了不让开发者直接触及到原始状态，而是在其代理上进行修改，再根据代理状态的变化来生成新状态</p>
<p>immer 中对于 draft 的实现在支持 Proxy 语法环境时使用 Proxy 实现，不支持 Proxy 语法环境时使用 defineProperty 实现</p>
<p>为避免内存泄露并保证安全性，immer 还使用<code v-pre>Proxy.revocable</code>创建了可撤销的代理对象，draft 函数执行完成后调用 revoke 方法销毁 draft 对象</p>
<ol start="2">
<li>
<p>按需深拷贝的实现</p>
</li>
<li>
<p>immer 中通过对代理状态的劫持来实现按需标记更改</p>
</li>
<li>
<p>当在 produce 的回调函数（recipe 函数）中修改 draft 数据时，就会通过 set 或 deleteProperty 中的 markChange 完成变化追踪，同时通过<code v-pre>state.copy_</code>来记录修改后的值，并通过<code v-pre>state.assigned_</code>记录修改的类型</p>
</li>
<li>
<p>数据修改完成后，通过<code v-pre>state.copy_</code>和<code v-pre>state.modified_</code>生成新的状态</p>
</li>
<li>
<p>上述核心思想就是通过递归遍历子属性，用之前的标记判断子属性部分的数据是否有被修改过，如果未被修改则直接使用原始状态中的引用，否则就用<code v-pre>state.copy_</code>记录的更新内容来重设子属性数据</p>
</li>
</ol>
<p>参考链接：<a href="http://lixianglong.cn/2022/02/25/application/fore-end/nodejs/immer.js%20%E5%85%A5%E9%97%A8/" target="_blank" rel="noopener noreferrer">http://lixianglong.cn/2022/02/25/application/fore-end/nodejs/immer.js 入门/<ExternalLinkIcon/></a></p>
</div></template>


