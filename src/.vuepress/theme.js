import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/navbar.ts";
import { zhSidebar } from "./sidebar/sidebar.ts";

export default hopeTheme({
  //1.基本配置
  hostname: "https://aicell.cc",
  author: {
    name: "Victor Da V",
    url: "https://aicell.cc/about",
  },

  //2.外观配置
  favicon: "/favicon.svg",
  darkmode: "toggle",
  print:true,
  // iconAssets: "iconfont",
  iconPrefix:"iconfont icon-",
  iconAssets:[
    // Front-doc
    "/front-doc/iconfont/frontend/iconfont.css",
    //common
    "/front-doc/iconfont/common/iconfont.css",
    //item
    "/front-doc/iconfont/item/iconfont.css",
    //emoji
    "/front-doc/iconfont/emoji/iconfont.css",

  ],

  //3.布局配置
  logo: "/logo.svg",
  repoDisplay: false,
  navbarIcon: true,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    // end: ["Outlook","Search"]
    end: ["Search"]
  },
  sidebarIcon: true,
  headerDepth: 1,
  pageInfo:[
    "Author","Date","Category","Tag","Word"
  ],
  lastUpdated: false,
  contributors: false,
  editLink: false,
  footer: "Victor Da V",
  displayFooter: true,
  copyright: "Copyright © Free To Copy",
  toc: true,

  //4.locale
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
    },
  },

  //5.功能配置
  encrypt: {
    config: {
      "/about/encrypt.html": ["1234"],
    },
  },
  blog:{
    avatar:"/avatar.jpg",
    name:"Victor Da V",
    description: "非专业前端开发者，AI从业者，流浪汉",
    intro: "/about",
    roundAvatar: true,
    timeline:"时光机",
    medias:{
      Github:"https://www.github.com/aaronjinno",
      // Gmail:"/about/gmail",
      // Wechat:"/about/wechat",
      // QQ:"/about/qq",
      BiliBili:"https://space.bilibili.com/47292194",
    }
  },


  //6.插件配置
  plugins: {
    prismjs:{
      light:"one-dark",
      dark:"one-dark",
    },
    blog: {
      excerptLength:0,
      // filter:(page)=>Boolean(page.filePathRelative) && !page.frontmatter.home && Boolean(page.frontmatter.article)
    },
    components:{
      components:[
        //配置激活的内置组件
      ]
    },
    copyCode: {},
    nprogress: true,
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      footnote: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      // cacheHTML: true, //缓存所有HTML页面
      cachePic: true, //缓存站点图片
      appendBase: true,
      maxSize:2000, //缓存的文件大小控制
      maxPicSize:3000, //缓存的图片大小控制
      //更新控制：开发时设置为hint，维护时设置为available
      update:"hint"
    },
  },
});
