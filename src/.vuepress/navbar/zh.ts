import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  
  //1.指南
  { 
    text: "指南", 
    icon: "zhinan", 
    link: "/guide/" 
  },
   
  //2.基础：H5+JS+ES+TS
  {
    text: "基础",
    icon: "sf",
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
    prefix: "/vue/",
    children:[
      {
        text: "Vue",
        icon: "Vue",
        link: "vue/"
      },
      {
        text: "Vue-Route",
        icon: "vue-right",
        link: "vueroute/",
      },
      {
        text: "Pinia",
        icon: "pinia",
        link: "pinia/"
      },
      {
        text: "Nuxt",
        icon: "nuxt",
        link: "nuxt/"
      },
      {
        text: "Vuepress",
        icon: "folder-vuepress",
        link: "vuepress"
      }
    ]
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
        text: "ucloud",
        icon: "Ucloud",
        link: "ucloud/"
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
    text: "组件",
    icon: "jimu",
    link: "/element/",
  },

  //7. awesome
  {
    text: "awesome",
    icon: "cool",
    link: "/awesome/"
  },

  //8. dev
  {
    text: "dev",
    icon: "kaifa1",
    link: "/dev/"
  },

  //9. 项目
  {
    text: "项目",
    icon: "xiangmu4",
    link: "/item/"
  }
]);
