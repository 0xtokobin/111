import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/前端知识仓库博客/GitHub推送/tokobin.github.io/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "D:/前端知识仓库博客/GitHub推送/tokobin.github.io/node_modules/@vueuse/core/index.mjs";
import Badge from "D:/前端知识仓库博客/GitHub推送/tokobin.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/前端知识仓库博客/GitHub推送/tokobin.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/前端知识仓库博客/GitHub推送/tokobin.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/前端知识仓库博客/GitHub推送/tokobin.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
