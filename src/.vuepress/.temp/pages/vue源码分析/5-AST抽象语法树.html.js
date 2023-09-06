export const data = JSON.parse("{\"key\":\"v-5536c578\",\"path\":\"/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/5-AST%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91.html\",\"title\":\"AST抽象语法树\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"AST抽象语法树\",\"order\":5,\"tag\":[\"AST语法树\",\"Vue模板引擎\"],\"description\":\"前言 Vue 在编译时会将 Vue 文件中的 template 标签内容通过 模板语法 编译为 AST抽象语法树，再直接转译为 渲染函数(h函数) 语法树渲染过程 渲染函数是 AST 的产物，也是 VNode 的源头 在开始手写 AST 抽象语法树之前，建议先熟悉了解模板引擎 (./4-模板引擎.html)的指针思想与栈结构遍历 本章同样也简化了 AS...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/5-AST%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"前端-navigation\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"AST抽象语法树\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"前言 Vue 在编译时会将 Vue 文件中的 template 标签内容通过 模板语法 编译为 AST抽象语法树，再直接转译为 渲染函数(h函数) 语法树渲染过程 渲染函数是 AST 的产物，也是 VNode 的源头 在开始手写 AST 抽象语法树之前，建议先熟悉了解模板引擎 (./4-模板引擎.html)的指针思想与栈结构遍历 本章同样也简化了 AS...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"tokobin\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"AST语法树\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Vue模板引擎\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"AST抽象语法树\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"tokobin\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"AST 形成\",\"slug\":\"ast-形成\",\"link\":\"#ast-形成\",\"children\":[{\"level\":3,\"title\":\"识别 attrs\",\"slug\":\"识别-attrs\",\"link\":\"#识别-attrs\",\"children\":[]}]},{\"level\":2,\"title\":\"太长不看-总结\",\"slug\":\"太长不看-总结\",\"link\":\"#太长不看-总结\",\"children\":[]}],\"readingTime\":{\"minutes\":6.08,\"words\":1823},\"filePathRelative\":\"vue源码分析/5-AST抽象语法树.md\",\"autoDesc\":true,\"excerpt\":\"\"}")

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
