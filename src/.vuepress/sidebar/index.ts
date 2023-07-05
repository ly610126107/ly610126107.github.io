import { sidebar } from "vuepress-theme-hope";
import { fontEnd } from "./font-end.js";
import { backEnd } from "./back-end.js";
import { linux } from "./linux.js";
import { codeOther } from "./code-other.js";
import { about } from "./about/about.js";

export const sidebarConfig = sidebar({
  "/": ["", "fontEnd/", "backEnd/", "linux/", "codeOther/"],
  '/fontEnd/': fontEnd,
  '/backEnd/': backEnd,
  '/linux/': linux,
  '/codeOther/': codeOther,
  '/about/': 'structure'
});
