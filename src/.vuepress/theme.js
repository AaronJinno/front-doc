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
  // iconPrefix:"icon",
  iconAssets:[
    //common
    "https://at.alicdn.com/t/c/font_4012534_pkkav615qoe.css?spm=a313x.7781069.1998910419.52&file=font_4012534_pkkav615qoe.css",
    //other
    "https://at.alicdn.com/t/c/font_4012543_ylrdf9cjue.css?spm=a313x.7781069.1998910419.89&file=font_4012543_ylrdf9cjue.css",
    // Front-doc
    "https://at.alicdn.com/t/c/font_4010197_f41axcgf9au.css?spm=a313x.7781069.1998910419.81&file=font_4010197_f41axcgf9au.css",
    //item
    "https://at.alicdn.com/t/c/font_4063604_i8ceqjaip8j.css?spm=a313x.7781069.1998910419.52&file=font_4063604_i8ceqjaip8j.css"
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
      tasklist: false,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true, //缓存所有HTML页面
      cachePic: true, //缓存站点图片
      appendBase: true,
      maxSize:2000,
      maxPicSize:3000,
    },
  },
});
