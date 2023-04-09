import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  
  //1.指南
  { 
    text: "指南", 
    icon: "update", 
    link: "/guide/" 
  },
   
  //2.基础：H5+JS+ES+TS
  {
    text: "basic",
    icon: "javascript",
    link: "/basic/"
  },

  //3.工具
  {
    text: "工具",
    icon: "tool",
    link: "/tool/"
  },

  //4.Vue
  {
    text: "Vue",
    icon: "vue",
    link: "/vue/"
  },

  //5.Applet
  {
    text: "小程序",
    icon: "leaf",
    link: "/applet/"
  },

  //6. 组件
  {
    text: "组件",
    icon: "view",
    link: "/element/",
  },

  //7. awesome
  {
    text: "awesome",
    icon: "linter",
    link: "/awesome/"
  },

  //8. dev
  {
    text: "dev",
    icon: "shell",
    link: "/dev/"
  },

  //9. 项目
  {
    text: "item",
    icon: "check",
    link: "/item/"
  }
]);
