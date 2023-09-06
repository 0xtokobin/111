<template><div><p>此处是对 vue 整体创建流程的总结，不再描述源码</p>
<h2 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h2>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/Vue/vue-process.png" alt="newVue流程图" tabindex="0" loading="lazy"><figcaption>newVue流程图</figcaption></figure>
<ol>
<li><code v-pre>new Vue</code>，随后初始化一系列实例</li>
<li>初始化依赖收集系统（三大收集器的顺序分别为 data、computed、watch）</li>
<li><code v-pre>$mount</code>挂载元素</li>
<li>执行 compile 模板编译</li>
<li>调用 render 函数构建虚拟 DOM</li>
<li>收集虚拟 DOM 中的依赖，设置监听，跟虚拟 DOM 匹配 patch，结合 defineProperty 响应式更新</li>
<li>渲染 DOM 树</li>
</ol>
<p>以下是简化流程图</p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/Vue/vue-simprocess.png" alt="newVue简化流程图" tabindex="0" loading="lazy"><figcaption>newVue简化流程图</figcaption></figure>
<h2 id="流程详解" tabindex="-1"><a class="header-anchor" href="#流程详解" aria-hidden="true">#</a> 流程详解</h2>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<p>在初始化过程中，我们重点关注<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/1-%E6%B7%B1%E5%85%A5%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.html">依赖收集系统</RouterLink></p>
<p>依赖收集系统是围绕响应式原理 defineProperty、依赖收集器 Dep、侦听器 Watcher 构成的一套订阅-发布系统</p>
<p>其初始化的主要流程为：</p>
<p>初始化 props、data、computed、watch</p>
<p>遍历上述配置项内部属性值，根据不同的数据类型、数据层次的深浅程度，逐层递进地绑定依赖收集器和响应式数据，对<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/3-computed%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html">computed</RouterLink>和<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/2-watch%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.html">watch</RouterLink>初始化侦听器 Watcher，同时在 Watcher 内部绑定与该属性值关联的 data 的依赖收集器</p>
<p>响应式数据 get 时，收集器负责 depend 收集依赖，主要是将当前活跃的侦听器 Watcher 实例收入其中</p>
<p>响应式数据 set 时，收集器负责 notify 通知更新，遍历其内部的侦听器 Watcher，强制 Watcher 更新依赖值，实现 computed 和 watch 的响应式变化</p>
<p>注意：computed 的数据变化表现为脏读，也就是惰性缓存；watch 的回调函数执行会推入到执行队列 queue 中，在 id 过滤之后推入到异步任务队列中顺序执行（默认宏任务队列、如果微任务队列空出则进入微任务队列）</p>
<h3 id="compile-模板编译" tabindex="-1"><a class="header-anchor" href="#compile-模板编译" aria-hidden="true">#</a> compile 模板编译</h3>
<p><RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/7-%E6%A8%A1%E6%9D%BF%E7%BC%96%E8%AF%91%E4%B8%8E%E6%8C%87%E4%BB%A4.html">模板编译</RouterLink>并不是存在于 Vue 的所有构建版本中，它只存在于完整版本，在只包含运行的时候版本中并不存在该阶段，即普通 cdn 引入式非文件组件式项目与 SSR 服务端渲染项目会采用，SPA 项目暂无作用（vue-loader 自动执行编译）</p>
<p>模板编译中有三个步骤：获取 DOM、编译转化 DOM、回填 DOM</p>
<p>获取 DOM 是将 html 中的 DOM 元素获取到 fragment 碎片中，此处实际获取到的结果就是<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/5-AST%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91.html">AST 抽象语法树</RouterLink></p>
<p>编译转化 DOM 对插值语法<code v-pre>{{}}</code>与<code v-pre>v-``@</code>等进行解析，将其实际匹配的值填入进去，并赋予响应式数据效果</p>
<p>回填 DOM 最后让编译好的 fragment 碎片上树</p>
<h3 id="render-渲染函数" tabindex="-1"><a class="header-anchor" href="#render-渲染函数" aria-hidden="true">#</a> render 渲染函数</h3>
<p>render 渲染函数中有两个步骤：<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/4-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E.html">模板引擎解析</RouterLink>、<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/6-%E8%99%9A%E6%8B%9FDOM%E5%92%8Cdiff%E7%AE%97%E6%B3%95.html">构建虚拟 DOM</RouterLink>。如果构建虚拟 DOM 时，新旧节点存在差异，还需要执行 diff 算法更新</p>
<p>在 SPA 项目中，<code v-pre>vue-loader</code>加载器（vue-cli 和 vite 自带）会将项目路径下每一个 vue 文件的 template 标签部分自动地转换为模板字符串。模板引擎解析会把组件文件中的模板字符串逐个解析，从元素标签名 tag、属性 attrs、内部文本 text、插值语法绑定的 data、子节点 children 等，对子节点的递推转化主要采用堆栈后进先出的特性，精确地绑定 children 上的属性，然后层层推回父节点，最后转换为<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/5-AST%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91.html">AST 抽象语法树</RouterLink></p>
<p>得到 AST 语法树之后，通过渲染函数 h 开始转化为虚拟 DOM，渲染时主要考虑的问题是函数重载，渲染函数的参数数量、类型有很多种情况</p>
<p>转化完成后的虚拟 DOM，如果是初次挂载，则通过 patch 将不同的属性（class、style、attr、v-指令等）整合起来，<code v-pre>createElement</code>生成真实 DOM；如果存在新旧 DOM 比较且都存在子节点，则需要引入 diff 最小量更新算法（双端比较），在新旧 DOM 的子节点 children 内递归式地循环比较新旧 children，并且新旧 children 的头部尾部都存在往中间不断缩进的指针，以 tag 和 key 值作为判断标准，标记出需要精细更新的节点进行替换，其余旧节点不变，以此实现广度优先下最优时间复杂度的更新算法</p>
<h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<p>生命周期实际上就是根据组件从创建、初始化、更新到销毁过程中，穿插在其中的可调用函数方法，如果 vm 实例中书写了有效的生命周期钩子，则到指定阶段时必定会调用</p>
<p>比如，在<code v-pre>new Vue</code>初始化时，执行 initState 开启依赖收集前，会调用 beforeCreate，执行完 initState（前后还会有 initInject 和 initProvide）之后，才是调用 created 函数</p>
<p>同理，在 data 更新的时间节点前后，也会插入 beforeUpdate 和 updated 函数，当然，watch 中的回调函数则是默认在异步队列中执行完毕后才会执行 updated</p>
</div></template>


