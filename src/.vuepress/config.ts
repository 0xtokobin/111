import { defineUserConfig } from "vuepress";
import { searchProPlugin} from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  plugins: [searchProPlugin({ indexContent: true })],
  lang: "zh-CN",
  title: "前端-navigation",
  theme,
 

  // Enable it with pwa
  // shouldPrefetch: false,
});
