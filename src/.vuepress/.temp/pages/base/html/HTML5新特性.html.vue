<template><div><h2 id="新增-input-特性" tabindex="-1"><a class="header-anchor" href="#新增-input-特性" aria-hidden="true">#</a> 新增 input 特性</h2>
<p>autocomplete:规定是否使用输入字段的自动完成功能。主要作用为自动填充，提交之后后退表单属性保留。</p>
<p>autofocus:规定输入字段在页面加载时是否获得焦点。</p>
<p>multiple:允许多选。如果使用该属性，则允许一个以上的值。</p>
<p>pattern:规定输入字段的值的正则表达式。</p>
<p>placeholder:规定帮助用户填写输入字段的提示。</p>
<p>readonly:指示字段的值初始化后无法被修改。</p>
<p>required:指示输入字段的值是必需的。</p>
<p>step:规定输入字的合法数字间隔。</p>
<p>list:引用包含输入字段的预定义选项的 datalist。与 datalist 标签配合使用组成下拉框。</p>
<p>list 示例代码：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>browsers<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>browser<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>browsers<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Internet Explorer<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Firefox<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Chrome<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Opera<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Safari<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<div>
  <input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Internet Explorer" />
    <option value="Firefox" />
    <option value="Chrome" />
    <option value="Opera" />
    <option value="Safari" />
  </datalist>
</div>
<p>formaction:</p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/HTML/formaction" alt="formaction" tabindex="0" loading="lazy"><figcaption>formaction</figcaption></figure>
<p><strong>新 type 属性</strong>:</p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/HTML/新input特性" alt="新增input特性" tabindex="0" loading="lazy"><figcaption>新增input特性</figcaption></figure>
<form action-="">
  text<input type= "text" autofocus="autofocus"><br>
  email<input type=" email"><!-- IOS --><br>
  url<input type="url" disabled="disabled"> <br>
  TEL <input type="tel"><br>
  search<input type="search"><br>
  number<input type="number"><br>
  范围<input type="range"><br>
  颜色<input type="color"><br>
  月<input type="month" required="required"><br>
  周<input type="week"><br>
  日期<input type="date"><br>
  时间<input type="time"><br>
  日期时间<input type="datetime"><br>
  当地日期时间<input type="datetime-local"><br>
  <input type="submit">
</form>
<br>
<h2 id="新增结构化标签" tabindex="-1"><a class="header-anchor" href="#新增结构化标签" aria-hidden="true">#</a> 新增结构化标签</h2>
<p>新结构标签，实质上为语义标签，便于盒子模型的理解，提高网页的 SEO（中文名：搜索引擎优化，有利于提高网站访问量）</p>
<p><code v-pre>&lt;header&gt;</code>：头部</p>
<p><code v-pre>&lt;nav&gt;</code>：导航栏</p>
<p><code v-pre>&lt;article&gt;</code>：带标题、主体内容的一大段文章</p>
<p><code v-pre>&lt;aside&gt;</code>：侧边栏</p>
<p><code v-pre>&lt;section&gt;</code>：章节栏</p>
<p><code v-pre>&lt;section&gt;</code>：章节栏</p>
<p><code v-pre>&lt;hgroup&gt;</code>：分组。使用 <code v-pre>&lt;hgroup&gt;</code> 标签对网页或区段（section）的标题进行组合</p>
<p><code v-pre>&lt;footer&gt;</code>：尾部</p>
<p><code v-pre>&lt;figure&gt;&lt;/figure&gt;</code>：用作文档中插图的图像</p>
<p><code v-pre>&lt;hr&gt;</code>：生成灰色水平分割线，自动居中对齐。宽度高度可重新设置</p>
<p><code v-pre>&lt;pre&gt;</code>：被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体</p>
<p><code v-pre>&lt;fieldset&gt;</code>：与<code v-pre>&lt;legend&gt;</code>标签配合使用。<code v-pre>&lt;fieldset&gt;</code>标签内包含<code v-pre>&lt;legend&gt;</code>标签和其他标签，<code v-pre>&lt;legend&gt;</code>内文本作为标题，其他标签作为正文，生成一个包含特殊边界的框</p>
<p>示例代码:</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>legend标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>&lt;正文文本/p><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p>
<fieldset>
  <legend>legend标题</legend>
  <p>正文文本</p>
</fieldset>
<h2 id="视频标签-video" tabindex="-1"><a class="header-anchor" href="#视频标签-video" aria-hidden="true">#</a> 视频标签 video</h2>
<p>语法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>文件地址<span class="token punctuation">"</span></span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>controls<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">autoplay</td>
<td style="text-align:left">autoplay</td>
<td style="text-align:left">如果出现该属性，则视频在就绪后马上播放。</td>
</tr>
<tr>
<td style="text-align:left">controls</td>
<td style="text-align:left">controls</td>
<td style="text-align:left">如果出现该属性，则向用户显示控件，比如播放按钮。</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">pixels</td>
<td style="text-align:left">设置视频播放器的高度。</td>
</tr>
<tr>
<td style="text-align:left">loop</td>
<td style="text-align:left">loop</td>
<td style="text-align:left">如果出现该属性，则当媒介文件完成播放后再次开始播放。</td>
</tr>
<tr>
<td style="text-align:left">muted</td>
<td style="text-align:left">muted</td>
<td style="text-align:left">规定视频的音频输出应该被静音。</td>
</tr>
<tr>
<td style="text-align:left">poster</td>
<td style="text-align:left">URL</td>
<td style="text-align:left">规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像。</td>
</tr>
<tr>
<td style="text-align:left">preload</td>
<td style="text-align:left">preload</td>
<td style="text-align:left">如果出现该属性，则视频在页面加载时进行加载，并预备播放。<br>如果使用 &quot;autoplay&quot;，则忽略该属性。</td>
</tr>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">url</td>
<td style="text-align:left">要播放的视频的 URL。</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">pixels</td>
<td style="text-align:left">设置视频播放器的宽度。</td>
</tr>
</tbody>
</table>
<h2 id="音频标签-audio" tabindex="-1"><a class="header-anchor" href="#音频标签-audio" aria-hidden="true">#</a> 音频标签 audio</h2>
</div></template>


