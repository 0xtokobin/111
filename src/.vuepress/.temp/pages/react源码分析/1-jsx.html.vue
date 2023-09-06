<template><div><h2 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h2>
<p>JSX 是一个 JS 的语法扩展，能更好地描述 UI 应该呈现出它应有交互的本质形式</p>
<p><code v-pre>astexplorer</code>可以把 JSX 代码转换成 AST 语法树</p>
<p><code v-pre>react/jsx-runtime</code>和<code v-pre>react/jsx-dev-runtime</code>中的函数只能由编译器转换使用。如果需要在代码中手动创建元素，可以使用<code v-pre>React.createElement</code></p>
<p>这里我们借助 babel 插件，简便地实现模板 JSX 代码转换</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> @babel/core @babel/plugin-transform-react-jsx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// oldjsx.js 在React17以前的老式babel转换写法</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/core"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sourceCode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
&lt;h1>
  hello&lt;span style={{ color: 'red' }}>world&lt;/span>
&lt;/h1>
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>sourceCode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/plugin-transform-react-jsx"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token string">"classic"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-console line-numbers-mode" data-ext="console"><pre v-pre class="language-console"><code>/*#__PURE__*/React.createElement(&quot;h1&quot;, null, &quot;hello&quot;, /*#__PURE__*/React.createElement(&quot;span&quot;, {
  style: {
    color: 'red'
  }
}, &quot;world&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// React18新jsx转换写法</span>
<span class="token keyword">const</span> babel <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@babel/core"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"react"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sourceCode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
&lt;h1>
  hello&lt;span style={{ color: 'red' }}>world&lt;/span>
&lt;/h1>
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> babel<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>sourceCode<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">"@babel/plugin-transform-react-jsx"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token string">"automatic"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// automatic</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-console line-numbers-mode" data-ext="console"><pre v-pre class="language-console"><code>import { jsx } from &quot;react/jsx-runtime&quot;;
import { jsxs } from &quot;react/jsx-runtime&quot;;
/*#__PURE__*/_jsxs(&quot;h1&quot;, {
    children: [&quot;hello&quot;, /*#__PURE__*/_jsx(&quot;span&quot;, {
        style: {
            color: 'red'
        },
        children: &quot;world&quot;
    })]
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转译过程" tabindex="-1"><a class="header-anchor" href="#转译过程" aria-hidden="true">#</a> 转译过程</h2>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/react-jsx.png" alt="ReactJSX 转译过程" tabindex="0" loading="lazy"><figcaption>ReactJSX 转译过程</figcaption></figure>
<p>React18 的 babel 转译 JSX 的实质为：</p>
<ol>
<li>执行 babel 转换，将 JSX 文件内函数的返回值转换为形似 <code v-pre>{&quot;h1&quot;, { children: []}}</code>的 AST 语法树</li>
<li>输出一个字符串，携带内容包括
<ol>
<li>import 导入 react/jsx-runtime 的转换方法<code v-pre>jsx</code>、<code v-pre>jsxs</code></li>
<li>传入 AST 语法树，调用转换方法<code v-pre>jsxs</code></li>
</ol>
</li>
<li>默认对上述的代码块字符串内容执行 eval，最终输出虚拟 DOM 对象</li>
</ol>
<ul>
<li>
<p>这里由于我们处在开发环境，所以代码块中<code v-pre>import { jsx } from &quot;react/jsx-runtime&quot;;</code>实际上会变成<code v-pre>import { jsxDEV } from &quot;react/jsx-dev-runtime&quot;;</code></p>
</li>
<li>
<p>在<code v-pre>src/react</code>文件夹下手写实现<code v-pre>jsx-dev-runtime</code>，实现 dev 环境下的 jsx 转换</p>
</li>
<li>
<p>代码块中导入路径<code v-pre>react/jsx-dev-runtime</code>通过在<code v-pre>vite.config.js</code>中覆写<code v-pre>resolve.alias</code>配置来实现路径劫持</p>
</li>
</ul>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/jsx-path.png" alt="JSX项目路径" tabindex="0" loading="lazy"><figcaption>JSX项目路径</figcaption></figure>
<p>vite.config.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">react</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/react"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">"react-dom"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/react-dom"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">"react-reconciler"</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/react-reconciler"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">scheduler</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/scheduler"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">shared</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/shared"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jsconfig.json</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"react/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/react/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"react-dom/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/react-dom/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"react-reconciler/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/react-reconciler/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"scheduler/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/scheduler/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"shared/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/shared/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules"</span><span class="token punctuation">,</span> <span class="token string">"dist"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h2>
<p>手动实现 JSX-VDOM 的源码</p>
<p><strong>注意：模板字符串 JSX 转换为 AST 语法树的步骤已经交由 babel 自动执行，children 元素嵌套编译，此处仅为 VDOM 的输出方法代码</strong></p>
<h3 id="jsx-dev-runtime-js" tabindex="-1"><a class="header-anchor" href="#jsx-dev-runtime-js" aria-hidden="true">#</a> jsx-dev-runtime.js</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> jsxDEV <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react/ReactJSXElement"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="reactjsxelement-js" tabindex="-1"><a class="header-anchor" href="#reactjsxelement-js" aria-hidden="true">#</a> ReactJSXElement.js</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 从react源码中获取工具方法和变量</span>
<span class="token keyword">import</span> hasOwnProperty <span class="token keyword">from</span> <span class="token string">"shared/hasOwnProperty.js"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">REACT_ELEMENT_TYPE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"shared/ReactSymbols"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">RESERVED_PROPS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">__self</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">__source</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">hasValidKey</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>key <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">hasValidRef</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> config<span class="token punctuation">.</span>ref <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ReactElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// React元素，也称为虚拟DOM</span>
    $$<span class="token keyword">typeof</span><span class="token operator">:</span> <span class="token constant">REACT_ELEMENT_TYPE</span><span class="token punctuation">,</span>
    type<span class="token punctuation">,</span> <span class="token comment">// h1 span</span>
    key<span class="token punctuation">,</span> <span class="token comment">// 唯一标识</span>
    ref<span class="token punctuation">,</span> <span class="token comment">// 获取真实DOM</span>
    props<span class="token punctuation">,</span> <span class="token comment">// 属性：children,style,id等</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">jsxDEV</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">debugger</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> propName<span class="token punctuation">;</span> <span class="token comment">// 属性名</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 属性对象</span>
  <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 可选key，区分父节点下不同子节点</span>
  <span class="token keyword">let</span> ref <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 引入，可通过ref获取真实DOM的需求</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasValidKey</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    key <span class="token operator">=</span> config<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasValidRef</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ref <span class="token operator">=</span> config<span class="token punctuation">.</span>ref<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>propName <span class="token keyword">in</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token constant">RESERVED_PROPS</span><span class="token punctuation">,</span> propName<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span> <span class="token operator">=</span> config<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">ReactElement</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> key<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出虚拟DOM</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-jsx" tabindex="-1"><a class="header-anchor" href="#main-jsx" aria-hidden="true">#</a> main.jsx</h3>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
    hello</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果" aria-hidden="true">#</a> 输出结果</h3>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/jsx-result.png" alt="JSX输出结果" tabindex="0" loading="lazy"><figcaption>JSX输出结果</figcaption></figure>
<h2 id="手写源码仓库" tabindex="-1"><a class="header-anchor" href="#手写源码仓库" aria-hidden="true">#</a> 手写源码仓库</h2>
<p><a href="https://github.com/mi-saka10032/mini-react/tree/master/packages/jsx" target="_blank" rel="noopener noreferrer">https://github.com/mi-saka10032/mini-react/tree/master/packages/jsx<ExternalLinkIcon/></a></p>
</div></template>


