import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  
  //1.指南
  { 
    text: "指南", 
    icon: "daohang", 
    link: "/guide/" 
  },
   
  //2.基础：H5+JS+ES+TS
  {
    text: "basic",
    icon: "basic",
    prefix: "/basic/",
    children:[
      {
        text: "HTML",
        icon:"html",
        link:"html/",
      },
      {
        text: "CSS",
        icon:"css",
        link:"css/",
      },
      {
        text: "JavaScript",
        icon:"Javascript-icon-02",
        link:"js/",
      },
      {
        text: "ES6",
        icon:"tubiaozhizuomoban",
        link:"es/",
      },
      {
        text: "TypeScript",
        icon:"typescript",
        link:"ts/",
      },
    ]
  },

  //3.工具
  {
    text: "工具",
    icon: "gongjuxiang",
    link: "/tool/"
  },

  //4.Vue
  {
    text: "Vue",
    icon: "Vue",
    link: "/vue/"
  },

  //5.Applet
  {
    text: "小程序",
    icon: "xiaochengxu",
    prefix: "/applet/",
    children:[
      {
        text: "uniapp",
        icon: "uniapp",
        link: "uniapp/"
      },
      {
        text: "字节跳动",
        icon: "douyin1",
        link:"bytedance/"
      }
    ]
  },

  //6. 组件
  {
    text: "组件库",
    icon: "zujian",
    link: "/element/",
  },

  //7. awesome
  {
    text: "awesome",
    icon: "mofabang",
    link: "/awesome/"
  },

  //8. dev
  {
    text: "dev",
    icon: "-daimashengcheng",
    link: "/dev/"
  },

  //9. 项目
  {
    text: "item",
    icon: "xiangmu",
    link: "/item/"
  }
]);
