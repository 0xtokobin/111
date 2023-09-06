<template><div><p>继进阶技巧记录之后，再起一篇，专门记录逻辑复用的技巧与跨组件通信方法</p>
<h2 id="逻辑复用" tabindex="-1"><a class="header-anchor" href="#逻辑复用" aria-hidden="true">#</a> 逻辑复用</h2>
<p>复用的目标：组件状态逻辑</p>
<p>复用的内容：state 状态、操作 state 状态的方法</p>
<p>在 Hooks 推出之前，组件的状态逻辑复用经历了：mixins、HOC、render-props 等模式</p>
<p>注意：这几种方式不是 API，而是利用 React 自身特点的编码技巧，演化而成的固定写法模式</p>
<h3 id="已废弃的-mixins" tabindex="-1"><a class="header-anchor" href="#已废弃的-mixins" aria-hidden="true">#</a> 已废弃的 mixins</h3>
<p>React 的 mixins 跟 Vue2 的 mixins 配置项很类似，都是采用组件混合的方式进行的，但缺点也很明显：组合混乱、命名冲突、维护复杂。因此 React 现在已废弃 mixins</p>
<h3 id="hoc" tabindex="-1"><a class="header-anchor" href="#hoc" aria-hidden="true">#</a> HOC</h3>
<p>HOC 是通过装饰器模式，实现组件状态逻辑复用的，接收要包装的组件，返回增强后的组件。</p>
<p>高阶组件命名约定以 with 开头，如：withMouse、withRouter 等</p>
<p>原理：高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过 prop 将复用的状态传递给被包装组件</p>
<p>注意点：</p>
<ol>
<li>设置 displayName 方便在 devTools 中展示名称</li>
<li>注意传递 props，不传递 props 会导致增强组件丢失 props</li>
</ol>
<p>更多记录详见<RouterLink to="/react/9-%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7.html#%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6">高阶组件</RouterLink></p>
<h3 id="render-props模式" tabindex="-1"><a class="header-anchor" href="#render-props模式" aria-hidden="true">#</a> <code v-pre>render-props</code>模式</h3>
<p><code v-pre>render-props</code>将要复用的状态逻辑代码封装到一个组件中，通过一个值为函数的 prop 对外暴露数据，实现状态逻辑复用</p>
<p>不使用 prop 函数的情况下，在组件标签内部声明的 jsx 元素或者 jsx 函数，在组件的 render 函数中，默认从 children 属性中获取</p>
<h3 id="最新方案-hooks" tabindex="-1"><a class="header-anchor" href="#最新方案-hooks" aria-hidden="true">#</a> 最新方案：<code v-pre>Hooks</code></h3>
<p>详见<RouterLink to="/react/8-hook.html">Hook</RouterLink></p>
<h3 id="为什么要有hooks" tabindex="-1"><a class="header-anchor" href="#为什么要有hooks" aria-hidden="true">#</a> 为什么要有<code v-pre>Hooks</code></h3>
<p>我们先分析 Hooks 出现之前 React 存在的问题</p>
<ol>
<li>组件的状态逻辑复用</li>
</ol>
<p>已废弃的 mixins 的问题：数据来源不清晰、命名冲突</p>
<p>HOC、<code v-pre>render-props</code>的问题：重构组件结构，JSX 嵌套地狱</p>
<ol start="2">
<li>class 组件自身的问题</li>
</ol>
<p>this 指向存在学习门槛</p>
<p>关联代码需要被拆分到不同生命周期函数中</p>
<p>不利用代码压缩和优化，也不利于 TS 类型推导</p>
<h2 id="控制反转" tabindex="-1"><a class="header-anchor" href="#控制反转" aria-hidden="true">#</a> 控制反转</h2>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>

<CodeDemo id="code-demo-110" type="react" title="%E5%B5%8C%E5%A5%97%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6" code="eJx1kEFLxDAQhf/KI6cWF6tXbQtSELzq0XqIzbhbrUlJpyKU/neTpqm7LHsIzOTNvPcxk/gcxJ1ojB4YE8aBXlgyYUaBZ5IN39e61kGuDm2nLGknJSmKElOtAa+Zjq47s09qsc24p8iSqkXqLOB6Hq1G3pdPkN+bV571pdPno5hHyQey5yGM18aMmncYiCtfvbmhSJzchJxTnNXrAkziayBX7U8ZStesgOsmy/0O05I7e9Zt7H1kNhpGV13bfBVTgI1kybKBK9ymc/mgFJbfPAtbRy4W2X+3HS/+5VlE89zhSPTbG8tQ9CHHLl7LKWL+A1EblRk=">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Children</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Children rendered"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">I</span> am Children<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Father</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Father rendered"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">I</span> am Father tag<span class="token punctuation">,</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Add Count<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Children <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Father<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p>打开 F12 可以看到，父子组件初次渲染会各打印一次信息，随后每次 button 点击都会重新触发渲染，每点一次就各打印一次信息</p>
<p>这是因为父组件 state 更新触发重新渲染，连带子组件一起重新渲染，但是实际上子组件是一个静态 p 标签，并没有冲渲染的需要，那么这个组件更新就是没有必要的。如果子组件的渲染开销比较大，就可能引发严重的性能问题</p>
<p>我们的第一反应可能是给子组件增加<RouterLink to="/react/11-%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html#memo"><code v-pre>React.memo</code></RouterLink>转为 props 浅比较，但是秉承能不用就不用的原则，我们选择其他的办法：控制反转（Inversion of Control）</p>
<p>因为<code v-pre>&lt;br/&gt;</code>标签与子组件并不需要来自父组件的状态，所以对上面的代码进行改动，在父组件和子组件之间添加一个 IOC 组件：</p>

<CodeDemo id="code-demo-125" type="react" title="IOC" code="eJx9UcFOhDAQ/ZUXThA3olcFEkNislc9igekdRfFlpTBmDT9d1tKy65GD01m5s3Me2+qk7cpuUk6KSaCxjzxR2qJw6DEA287um1EIzxcH/uBKS4slGYoK+hGAA6TA78c5CFtkthjH+OKsybJ7ArYnGYlUIzVHu1H3FXkY2Vxc0Jz39KRq73sHI9GFzaac07CUydnQTtMnGoXPduBYCC9OqNNXQwUrP+sfGiTVYrnA7WHHfSy0jhVse1lJpICUtRD372X2nsPpOkygQtcZ6a6YwxLtcj9VNyigw2zKsmDFKfzt/3/brx2/HHhYHUzEA8aS86VQn6ax4/bqkX+c7Lw4CaZf41SERh/bechaLdIYr4BLzG+8w==">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Children</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Children rendered"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">I</span> am Children<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">FatherIoc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">I</span> am Father tag<span class="token punctuation">,</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Add Count<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Father</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Father rendered"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>FatherIoc<span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Children <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>FatherIoc<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Father<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><p>再打开 F12，无论点击多少次 button，控制台都只停留在页面第一次渲染时打印的信息，说明多次更新都没有触发父组件和子组件的重新渲染</p>
<h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h3>
<p>这个案例实际上通过巧妙的<code v-pre>render-props</code>隔离了依赖 state，将子组件挂在 children 上，IOC 组件的更新既不触发外层 Father 组件 rerender，也不触发插槽 Children 组件 rerender</p>
<p>一句话描述：因为 Children 来自于父组件，子组件的重新渲染并不会导致其也重新渲染</p>
<p>完整描述：</p>
<p>按照<RouterLink to="/react/6-%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E4%B8%8E%E6%9B%B4%E6%96%B0.html#%E7%BB%84%E4%BB%B6%E6%A0%91%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86"><code v-pre>组件树更新原理5项条件</code></RouterLink></p>
<ol>
<li>从 Father 组件开始，Father 满足前 4 个条件，但是其子组件 FatherIoc 存在更新，不满足第 5 个条件，所以进入复用逻辑但不会跳过子组件的对比，此时父节点的 props 也不进入更新，原值赋予给新的子节点</li>
<li>FatherIoc 子组件的 state 发生了变化，不进入复用逻辑，重新调用生成新 Fiber 节点</li>
<li>更新前后父节点的 props 完全相同，children 节点不会重新创建。<code v-pre>&lt;br/&gt;</code>和<code v-pre>&lt;Children&gt;</code>实际位于父组件树，并非 FatherIoc 的子组件，判断更新条件 5 个条件均满足，跳过对比直接复用</li>
</ol>
<p>而没有 IOC 组件的原始组件中更新是：</p>
<p>Father 的 state 发生变化，调用生成新的 Fiber 节点，子组件的 props 虽然是空对象，但是 JSX 转换 createElement 的时候，新的空对象与旧的空对象不等，继而重新创建，触发重新渲染</p>
</div></template>


