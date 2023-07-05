import { navbar } from "vuepress-theme-hope";

export const navbarConfig = navbar([
  "/",
  {
    text: '代码笔记',
    icon: 'code',
    children: [
      {
        text: '前端笔记',
        children: ['/fontEnd/']
      },
      {
        text: '后端笔记',
        children: ['/backEnd/']
      },
      {
        text: '运维笔记',
        children: ['/linux/']
      },
      {
        text: '其他',
        children: ['/codeOther/']
      },
    ]
  },
]);
