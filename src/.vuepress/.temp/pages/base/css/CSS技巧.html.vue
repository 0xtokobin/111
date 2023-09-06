<template><div><h2 id="精灵图" tabindex="-1"><a class="header-anchor" href="#精灵图" aria-hidden="true">#</a> 精灵图</h2>
<p>精灵技术主要针对于背景图片使用，就是把多个小背景图片整合到一张大图片中。</p>
<p>这个大图片也称为 <code v-pre>sprites</code> 精灵图或者雪碧图。</p>
<p>移动背景图片位置，此时可以使用 <code v-pre>background-position</code>。</p>
<p>移动的距离就是这个目标图片的 x 和 y 坐标，注意网页中的坐标有所不同。</p>
<p>因为一般情况下都是往上往左移动，所以数值是负值。</p>
<p>使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。</p>
<p><strong>缺点</strong></p>
<ol>
<li>
<p>图片文件比较大</p>
</li>
<li>
<p>图片本身放大和缩小会失真</p>
</li>
<li>
<p>一旦图片制作完毕想要更换非常复杂</p>
</li>
</ol>
<p><strong>总结</strong></p>
<ol>
<li>
<p>精灵图主要针对于小的背景图片使用。</p>
</li>
<li>
<p>主要借助于背景位置来实现 <code v-pre>background-position</code>。</p>
</li>
<li>
<p>一般情况下精灵图都是负值。（x 轴右边走是正值，左边走是负值，y 轴同理）</p>
</li>
</ol>
<h2 id="字体图标iconfont-重要" tabindex="-1"><a class="header-anchor" href="#字体图标iconfont-重要" aria-hidden="true">#</a> 字体图标<code v-pre>iconfont</code>（重要）</h2>
<p>提供了一种方便高效的图标使用方式，展示的是图标，本质属于字体</p>
<p>优点：轻量级 轻、灵活性 强、兼容性 高</p>
<p>三种引用方式：</p>
<p>​ 1. <code v-pre>unicode</code> 引用（原始）</p>
<p>​ 2. <code v-pre>font-class</code> 引用（<code v-pre>unicode</code> 引用的升级）</p>
<p>​ 3. <code v-pre>symbol</code> 引用（未来主流）但目前暂时不接触</p>
<p>以阿里巴巴矢量图库引用为例展示三种引用方式（以下内容取自阿里巴巴矢量库使用帮助）：</p>
<h3 id="unicode-引用" tabindex="-1"><a class="header-anchor" href="#unicode-引用" aria-hidden="true">#</a> <code v-pre>unicode</code> 引用</h3>
<p><code v-pre>unicode</code> 是字体在网页端最原始的应用方式，特点是：</p>
<ul>
<li>
<p>兼容性最好，支持 ie6+，及所有现代浏览器。</p>
</li>
<li>
<p>支持按字体的方式去动态调整图标大小，颜色等等。</p>
</li>
<li>
<p>但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。</p>
</li>
</ul>
<p><strong>注意</strong>：新版 <code v-pre>iconfont</code> 支持多色图标，这些多色图标在 <code v-pre>unicode</code> 模式下将不能使用，如果有需求建议使用 <code v-pre>symbol</code> 的引用方式</p>
<p>第一步：拷贝项目下面生成的 <code v-pre>font-face</code></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"iconfont"</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"iconfont.eot"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"iconfont.eot?#iefix"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"embedded-opentype"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"iconfont.woff"</span><span class="token punctuation">)</span></span>
      <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"iconfont.ttf"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"truetype"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"iconfont.svg#iconfont"</span><span class="token punctuation">)</span></span>
      <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"svg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：定义使用 <code v-pre>iconfont</code> 的样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.iconfont</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"iconfont"</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-stroke-width</span><span class="token punctuation">:</span> 0.2px<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：挑选相应图标并获取字体编码，应用于页面</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>&lt;i class=<span class="token string">"iconfont"</span>>&amp;#x33<span class="token punctuation">;</span>&lt;/i>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="font-class-引用" tabindex="-1"><a class="header-anchor" href="#font-class-引用" aria-hidden="true">#</a> <code v-pre>font-class</code> 引用</h3>
<p><code v-pre>font-class</code> 是 <code v-pre>unicode</code> 使用方式的一种变种，主要是解决 <code v-pre>unicode</code> 书写不直观，语意不明确的问题。</p>
<p>与 <code v-pre>unicode</code> 使用方式相比，具有如下特点：</p>
<ul>
<li>
<p>兼容性良好，支持 ie8+，及所有现代浏览器。</p>
</li>
<li>
<p>相比于 <code v-pre>unicode</code> 语意明确，书写更直观。可以很容易分辨这个 <code v-pre>icon</code> 是什么。</p>
</li>
<li>
<p>因为使用 <code v-pre>class</code> 来定义图标，所以当要替换图标时，只需要修改 <code v-pre>class</code> 里面的 <code v-pre>unicode</code> 引用。</p>
</li>
<li>
<p>不过因为本质上还是使用的字体，所以多色图标还是不支持的。</p>
</li>
</ul>
<p>第一步：拷贝项目下面生成的 <code v-pre>fontclass</code> 代码</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：挑选相应图标并获取类名，应用于页面：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>&lt;i class=<span class="token string">"iconfont icon-xxx"</span>>&lt;/i>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="symbol-引用" tabindex="-1"><a class="header-anchor" href="#symbol-引用" aria-hidden="true">#</a> <code v-pre>symbol</code> 引用</h3>
<p>这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇文章 这种用法其实是做了一个 <code v-pre>svg</code> 的集合，与上面两种相比具有如下特点：</p>
<ul>
<li>
<p>支持多色图标了，不再受单色限制。</p>
</li>
<li>
<p>通过一些技巧，支持像字体那样，通过 <code v-pre>font-size</code>, <code v-pre>color</code> 来调整样式。</p>
</li>
<li>
<p>兼容性较差，支持 ie9+,及现代浏览器。</p>
</li>
<li>
<p>浏览器渲染 <code v-pre>svg</code> 的性能一般，还不如 <code v-pre>png</code>。</p>
</li>
</ul>
<p>第一步：拷贝项目下面生成的 <code v-pre>symbol</code> 代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：加入通用 css 代码（引入一次就行）：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">&lt;style type="text/css">
    .icon</span> <span class="token punctuation">{</span>
       <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
       <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
       <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
       <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：挑选相应图标并获取类名，应用于页面：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#icon-xxx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-三角" tabindex="-1"><a class="header-anchor" href="#css-三角" aria-hidden="true">#</a> CSS 三角</h2>
<h3 id="等腰三角" tabindex="-1"><a class="header-anchor" href="#等腰三角" aria-hidden="true">#</a> 等腰三角</h3>

<CodeDemo id="code-demo-208" type="normal" title="%E7%AD%89%E8%85%B0%E4%B8%89%E8%A7%92" code="eJxVjjEOwjAMRa9iZSbQhaWUniRLaVxikTpRbAGi6t1Jh0ow/vfe8BcTdI6mNZ2nJ4xxELk643FOzvTdqcLesTmYUaRGx03A4hjgRV5DC81lGwHpHnRfkRjtP5oSqxX64A5uqXgsLZyb/AZJkTxoGVjyUJD1J7ERJ7VjiqnWmfhR3VovrV/vtD3Z">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h3 id="直角三角" tabindex="-1"><a class="header-anchor" href="#直角三角" aria-hidden="true">#</a> 直角三角</h3>

<CodeDemo id="code-demo-215" type="normal" title="%E7%9B%B4%E8%A7%92%E4%B8%89%E8%A7%92" code="eJyrVsooyc1RslKyScksU0jOSSwuto1RKinKNI5RsrPRBwraxeTZZBQp6INoNDUmRKgxJUKNGZIaJR2l5OJioIP0QI5QqI7JU1Aoz0wpybBSMLAGcTJSM9MzSmC8pPyilNQi3eT8nPwiK4WSosS84oLEotS8EoWi1BRrBX2tJzu6nuzofrlozovOTQpPty972r8ZwtHSR9IPswEITQ0KKsAEsvnFJZU5qVYKxfk5mSlA8dqYPJDzTEh0HtBJyE6ktfNM6e48uONQzcfuPDO6Ry7RzlOqBQASPCkV">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tri3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tri4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tri5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tri6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.tri3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent red<span class="token punctuation">;</span> <span class="token comment">/*上下颜色 左右颜色*/</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 0 50px 50px<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.tri4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red transparent<span class="token punctuation">;</span> <span class="token comment">/*上下颜色 左右颜色*/</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 0 50px 50px<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.tri5</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red transparent<span class="token punctuation">;</span> <span class="token comment">/*上下颜色 左右颜色*/</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 50px 50px 0<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.tri6</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent red<span class="token punctuation">;</span> <span class="token comment">/*上下颜色 左右颜色*/</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 50px 50px 0<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><h2 id="行内-块-垂直属性-vertical-align" tabindex="-1"><a class="header-anchor" href="#行内-块-垂直属性-vertical-align" aria-hidden="true">#</a> 行内(块)垂直属性 vertical-align</h2>
<p>经常用于设置图片或者表单（行内块元素）和文字垂直对齐</p>
<p>官方解释：用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline | top | middle | bottom<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">baseline</td>
<td style="text-align:left">默认。元素放置在父元素的基线上。</td>
</tr>
<tr>
<td style="text-align:left">sub</td>
<td style="text-align:left">垂直对齐文本的下标。</td>
</tr>
<tr>
<td style="text-align:left">super</td>
<td style="text-align:left">垂直对齐文本的上标</td>
</tr>
<tr>
<td style="text-align:left">top</td>
<td style="text-align:left">把元素的顶端与行中最高元素的顶端对齐</td>
</tr>
<tr>
<td style="text-align:left">text-top</td>
<td style="text-align:left">把元素的顶端与父元素字体的顶端对齐</td>
</tr>
<tr>
<td style="text-align:left">middle</td>
<td style="text-align:left">把此元素放置在父元素的中部。</td>
</tr>
<tr>
<td style="text-align:left">bottom</td>
<td style="text-align:left">使元素及其后代元素的底部与整行的底部对齐。</td>
</tr>
<tr>
<td style="text-align:left">text-bottom</td>
<td style="text-align:left">把元素的底端与父元素字体的底端对齐。</td>
</tr>
<tr>
<td style="text-align:left">length</td>
<td style="text-align:left">将元素升高或降低指定的高度，可以是负数。</td>
</tr>
<tr>
<td style="text-align:left">% 使用</td>
<td style="text-align:left"><code v-pre>line-height</code> 属性的百分比值来排列此元素。允许使用负值。</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">规定应该从父元素继承 <code v-pre>vertical-align</code> 属性的值。</td>
</tr>
</tbody>
</table>
<p>图片、表单默认属于行内块元素，默认的 <code v-pre>vertical-align</code> 是 <code v-pre>baseline</code> 基线对齐</p>
<p>此时可以给图片、表单这些行内块元素的 <code v-pre>vertical-align</code> 属性设置为 <code v-pre>middle</code> 就可以让文字和图片垂直居中对齐了。</p>
<ul>
<li>图片底部默认留白缝隙解决方法</li>
</ul>
<p>图片底侧会有一个空白缝隙，原因是行内块元素和文字的基线对齐</p>
<p>解决方法有两种：</p>
<p>​1. 给图片添加 <code v-pre>vertical-align:middle | top | bottom</code> 等（提倡使用）</p>
<ol>
<li>把图片转换为块级元素 <code v-pre>display: block;</code></li>
</ol>
<h2 id="溢出文字省略号显示" tabindex="-1"><a class="header-anchor" href="#溢出文字省略号显示" aria-hidden="true">#</a> 溢出文字省略号显示</h2>
<h3 id="单行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#单行文本溢出显示省略号" aria-hidden="true">#</a> 单行文本溢出显示省略号</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>（文字长度超出限定宽度，则隐藏超出的内容）
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>（设置文字在一行显示，不能换行）
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>（规定当文本溢出时，显示省略符号来代表被修剪的文本）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#多行文本溢出显示省略号" aria-hidden="true">#</a> 多行文本溢出显示省略号</h3>
<p>多行文本溢出显示省略号，有较大兼容性问题，适合于 webkit 浏览器或移动端（移动端大部分是 webkit 内核）</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>（用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性）
<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>（和 1 结合使用，将对象作为弹性伸缩盒子模型显示 ）
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>（和 1 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 ）
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>（文本溢出限定的宽度就隐藏内容）
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>（多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素绝对居中方式" tabindex="-1"><a class="header-anchor" href="#元素绝对居中方式" aria-hidden="true">#</a> 元素绝对居中方式</h2>

<CodeDemo id="code-demo-377" type="normal" title="1.%E5%AE%9A%E5%AE%BD%E9%AB%98-%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%2B%E8%B4%9F%20margin%20%E5%80%BC" code="eJxlkE9PwjAchr/KLzVeiHND42Wgn2SX/amssVuXrgMSQsJFDwZiYowHjZGL113ggIaPQ6ee/Ap2HYQBp6Zv37zPkw5QKCKKbNQOSBd86qbppYM81jd63E0SzB105cQAB8+ulzKaCWxELu+QWNXapuqo8uZEJ8hPUzV9WpuDQbnWI4EIbTi3rKTfKoMQk04o6onHeIC5Dc2kD4pEAjiyLEs/JSwlgrDYBo6pK0gXq3joxE6sSXtmO8SzA+I28Vz/psNZFgeGzyhT7AgHJIs8mpUAALMB8nb2+5TL1+n3fAoNc9dmA9Zliq/V+oV1rG+CJdtL5WVUDaOpBdR4LTZV/2f+LkfLYvpZTHJtLx/HlXTx9iHvZjJ/+VuO5cOzaq0WX6vFSE7uW5XTekpT1wD9Q2j4D6mMuiE=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-absolute-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-absolute-margin</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> mediumblue<span class="token punctuation">;</span>
  <span class="token comment">/* 关键因素 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span> <span class="token comment">/*margin-left/top负值根据width和height来决定，取值为一半;*/</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<CodeDemo id="code-demo-381" type="normal" title="2.%E5%AE%9A%E5%AE%BD%E9%AB%98-%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%2Bmargin%20auto" code="eJxtj01OwzAQha8yMruKEAO7UDhJNnZsEgvbY/mnjVR1yQ3YsekJ2MCVKsQtcGJFtCore948v+95R4ZoNGnIWqgNdJqF8NgSjmO19cw56Vvy1FqAizXjAXWKsjLM98pWLEXM3nWdjfnFcpJr0oWQ829OMmE3RW6ViEMD95S68WESBqn6IZ4qHL2QvoFbN0LGKQFXlNJ55TCoqNA24KVmUW1klvetnTn/lTuD3l1A/xTOupfeY7Ki6lBjxhspVDJcp4kBUK/g+Pr58/ZxfD98fx1gVZ8XWuizWcvnnF46R3TL1RdqGTjGiGaZSucck0uXP5H9Lz8Pkjg=">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-absolute-margin-auto<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-absolute-margin-auto</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> mediumblue<span class="token punctuation">;</span>
  <span class="token comment">/* 关键因素 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<CodeDemo id="code-demo-385" type="normal" title="3.%E4%B8%8D%E5%AE%9A%E5%AE%BD%E9%AB%98-%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%2Btransform" code="eJxlkN1KAkEYhm9lmAhK3NyITlbrSvZkf0Z3adxZZkZdEc+KoE7MAkMJPOiPJAkKCq2upnHXo26hb1cEw5OZ72/e552vhT1ZpdjAJdevI4daQhyY2GaR1uBWGBJu4kMzQGitbdmC0ZokmuRWIMqMV2Ey7h/Pul04Ved73hvPesOfj0nycglBcn6nbvulAuiA4PLGeewIAfidFSRqpcSG70rPQHu6HkbFtOARv+LJ1YrNuEu4gXbDCIEb30Ubuq5nrZAJX/osMBAn1JJ+nUC5bQYZZ937AmlbzlGFs1rgag6jDJSbhFLWyBQLOaROXudXYzUYxm9DlCv85yxFs2FKyuB0X9/MMsnClWTJNBYhuCNbGnTzKD23i0BSnYso34wfpurs8fezjxZR8n4T30/TjZ4+JZNRPOiq544af81H17ByeJtagj/i9h/727+3">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-absolute-transform<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>的撒的吾问无为谓无若多<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-absolute-transform</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token comment">/* 关键因素 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/*向x,y移动： 移动距离为自身盒子宽高的50%*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<CodeDemo id="code-demo-389" type="normal" title="4.%E4%B8%8D%E5%AE%9A%E5%AE%BD%E9%AB%98-table-cell" code="eJxljrFOwzAQhl/FMiuBILZQeJIsjn1KTr3alm2aVFUlVkYkpMKOYCwLSIjXaavyFjiJCoFOtv67+75/zqswIZ7xkcIpkyS8v8x5YZqkdsJacGzwT4IoCBIJRDm/yjVjB1d/Njavd9vl+271tlst1x/P29ubzdPL+vPh6/5xdBovI2L/8mMuvY89TobueeuoUYUqY+dpapuLNqgAyyoMk8I4BS5jZ7Zh3hAqdpSmaTeyxmNAozPmgETAKcR4ketcD02D3r1UobckZhn7HXS4KbiAUlAiCMsInaBS1CIZC9CEfSxBB3C9qfP85xdCjktnrrVKpCETu8/izNSlA9Ad7qcBakINSUFGjnsiX3wDHWSjkQ==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-wrapper box-wrapper-table-cell<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-table-cell<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>少时诵诗书所大付错<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box-wrapper-table-cell</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-table-cell</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<CodeDemo id="code-demo-393" type="normal" title="5.%E4%B8%8D%E5%AE%9A%E5%AE%BD%E9%AB%98-flex" code="eJxljk0OgjAQha/SzFp0X39O0k0pBaulJW1RCGFjPAVrj+DGeB7lGraokUjyMjN5M/neNLB1uQQMq0QcEJPU2jWBWFfR0dCi4AaN5iiVvCKwIQqhyf1nF1rfnfvTzet5v3o9Lt1Uq4UHeNK3wwyYtf6R+X8gakJeImwhaY1RsJbB2ZXWibSOmFaOK4cR85WbYUelyFQkHM/tyG+JGug/akzZPjO6VInHSG0wcjqnTr+PoX0BI+Fy+g==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-wrapper box-wrapper-flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>flex的点点滴滴多多多多多多多<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.box-wrapper-flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box-flex</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo></div></template>


