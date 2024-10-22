export const data = JSON.parse("{\"key\":\"v-b4aeaae0\",\"path\":\"/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/8-%E6%80%BB%E7%BB%93.html\",\"title\":\"总结\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"总结\",\"order\":8,\"tag\":[\"vue总结\",\"总体流程\"],\"description\":\"此处是对 vue 整体创建流程的总结，不再描述源码 流程图 newVue流程图 1. new Vue，随后初始化一系列实例 2. 初始化依赖收集系统（三大收集器的顺序分别为 data、computed、watch） 3. $mount挂载元素 4. 执行 compile 模板编译 5. 调用 render 函数构建虚拟 DOM 6. 收集虚拟 DOM ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/8-%E6%80%BB%E7%BB%93.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"前端-navigation\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"总结\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"此处是对 vue 整体创建流程的总结，不再描述源码 流程图 newVue流程图 1. new Vue，随后初始化一系列实例 2. 初始化依赖收集系统（三大收集器的顺序分别为 data、computed、watch） 3. $mount挂载元素 4. 执行 compile 模板编译 5. 调用 render 函数构建虚拟 DOM 6. 收集虚拟 DOM ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"tokobin\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vue总结\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"总体流程\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"总结\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"tokobin\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"流程图\",\"slug\":\"流程图\",\"link\":\"#流程图\",\"children\":[]},{\"level\":2,\"title\":\"流程详解\",\"slug\":\"流程详解\",\"link\":\"#流程详解\",\"children\":[{\"level\":3,\"title\":\"初始化\",\"slug\":\"初始化\",\"link\":\"#初始化\",\"children\":[]},{\"level\":3,\"title\":\"compile 模板编译\",\"slug\":\"compile-模板编译\",\"link\":\"#compile-模板编译\",\"children\":[]},{\"level\":3,\"title\":\"render 渲染函数\",\"slug\":\"render-渲染函数\",\"link\":\"#render-渲染函数\",\"children\":[]},{\"level\":3,\"title\":\"生命周期\",\"slug\":\"生命周期\",\"link\":\"#生命周期\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.52,\"words\":1355},\"filePathRelative\":\"vue源码分析/8-总结.md\",\"autoDesc\":true,\"excerpt\":\"\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
