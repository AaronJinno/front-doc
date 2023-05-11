import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  
  //0.指南
  { 
    text: "指南", 
    icon: "zhinan", 
    link: "/guide/" 
  },
   
  //1.基础：H5+JS+ES+TS
  {
    text: "基础",
    icon: "xinshouzhinan",
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

  //2.工程化
  {
    text: "工程化",
    icon: "jianyanpifenxianggongchengbaoyan",
    prefix: "/engineering/",
    children:[
      {
        text: "Nodejs-Npm",
        icon:"nodejs",
        link: "nodejs/"
      },
      {
        text: "Vite",
        icon: "vuetifyjs",
        link: "vite/"
      },
      {
        text: "Axios",
        icon: "http",
        link: "axios/"
      },
      {
        text: "Mock",
        icon: "mock-icon",
        link: "mock/"
      },
      {
        text: "Sass",
        icon: "sass",
        link: "sass/"
      },
      {
        text: "过时工具",
        icon: "jinggao",
        link: "old/"
      }

    ]

  },

  //3.Vue
  {
    text: "Vue",
    icon: "Vue",
    prefix: "/vue/",
    children:[
      {
        text: "Vue.js",
        icon: "Vue",
        link: "vuejs/"
      },
      {
        text: "Vue-Route",
        icon: "route",
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

  //4.Applet
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
        text: "微信",
        icon: "weixin",
        link: "wechat/"
      },
      {
        text: "字节跳动",
        icon: "douyin1",
        link:"bytedance/"
      }
    ]
  },


  //5. 小组件
  {
    text: "小组件",
    icon: "zujianhua",
    prefix: "/element/",
    children:[
      {
        text: "基础",
        icon: "jimu",
        link: "basic/"
      },
      {
        text: "布局",
        icon: "buju",
        link: "layout/"
      },   
      {
        text: "表单",
        icon: "biaodanpeizhi",
        link: "form/"
      },
      {
        text: "数据卡片显示",
        icon: "picture__easy",
        link: "datacard/"
      },  
      {
        text: "全局组件",
        icon: "icon_rockets_sel",
        link: "global/"
      },
      {
        text: "通知反馈",
        icon: "yijianfankui",
        link: "feedback/"
      },
      {
        text: "其他组件",
        icon: "jichuzujian",
        link: "other/"
      },
    ]
  },

  //7. awesome
  {
    text: "awesome",
    icon: "cool",
    prefix: "/awesome/",
    children: [
      {
        text: "ui框架",
        icon: "UIshejiwang",
        link: "ui/"
      }
    ]
  },

  //8. 项目
  {
    text: "项目",
    icon: "xiangmuguanli",
    prefix: "/item/",
    children:[
      {
        text: "网易云音乐",
        icon: "fenqishangcheng",
        link: "music-wy/"
      }
    ]
  },

  //9. other
  {
    text: "其他",
    icon: "qita",
    prefix:"/other/",
    children:[
      
    ]
  }
]);
