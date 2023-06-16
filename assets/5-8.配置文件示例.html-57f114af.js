import{_ as n,o as s,c as a,e}from"./app-fb2cd4f5.js";const t={},p=e(`<div class="hint-container danger"><p class="hint-container-title">说明</p><p>以下配置都是常用的，经典的配置，可以直接复制使用。</p><ul><li>配置项以Hope主题为基准。</li><li>每个配置项都有注释，可以根据实际情况进行修改。</li><li>被注释掉的配置，表示一般不用设置</li><li>这里采用的是单语言的配置，遇到多语言可根据规则自己添加</li></ul></div><h2 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//############ 1. 站点配置 ################</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/doc/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//基本路径：默认是&quot;/&quot; 如果文档没有在根目录下就必须指定</span>
    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span> <span class="token comment">//站点语言，默认是en-US</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;本站点的标题&quot;</span><span class="token punctuation">,</span> <span class="token comment">//待修改站点信息</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;本站点的描述信息&quot;</span><span class="token punctuation">,</span> <span class="token comment">//待修改站点信息</span>
    <span class="token literal-property property">debug</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用 Debug 模式，默认false</span>
    <span class="token literal-property property">shouldPreload</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否设置预加载，默认是true，这里采用默认</span>
    <span class="token literal-property property">shouldPrefetch</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否全局懒加载，小站点可以设置，页面多浪费CDN。</span>

    <span class="token comment">//temp: &quot;docs/.vuepress/.temp&quot;, //指定临时文件目录</span>
    <span class="token comment">//dest:&quot;dest&quot;, //打包后的输出目录,[可选]默认是dest</span>
    <span class="token comment">//public: &quot;docs/.vuepress/public&quot;, //指定 Public 文件目录,[可选]</span>
    <span class="token comment">//permalinkPattern: &quot;:year/:month/:day/:slug.html&quot;, //自动永久链接的patter</span>

    <span class="token comment">//############ 2. 多语言locales配置 ################</span>
    <span class="token comment">//暂略，暂时只使用一种语言</span>


    <span class="token comment">//############ 3. 引入主题配置文件  ################</span>
    theme<span class="token punctuation">,</span> <span class="token comment">//引入主题配置文件</span>


    <span class="token comment">//############ 4. dev与build配置  ################</span>
    <span class="token comment">//host: &quot;https://aicell.cc&quot;, //指定开发服务器的主机名，iP或url</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span> <span class="token comment">//指定开发服务器的端口号，默认是8080，冲突时会自动改</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否在开发服务器启动后打开浏览器，默认是false</span>


    <span class="token comment">//############ 5. plugins插件配置  ################</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token comment">//搜索插件</span>
        <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
        <span class="token literal-property property">indexContent</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否索引正文，默认只索引title、tag和简要</span>
        <span class="token literal-property property">customFields</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//自定义项目的获取器</span>
            <span class="token comment">// 为分类和标签添加索引</span>
            <span class="token punctuation">{</span>
            <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span>  <span class="token string">&quot;分类：$content&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
            <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
            <span class="token literal-property property">formatter</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标签：$content&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="theme-ts" tabindex="-1"><a class="header-anchor" href="#theme-ts" aria-hidden="true">#</a> theme.ts</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zhNavbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./navbar/navbar.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> zhSidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./sidebar/sidebar.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//############# 1.基础信息配置 ################</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;https://cybercell.cc/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//网站部署的域名</span>
  <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//作者信息：将会在很多地方被引用</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Victor Da V&quot;</span><span class="token punctuation">,</span> <span class="token comment">//作者名</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;https://cybercell.cc/about&quot;</span><span class="token punctuation">,</span> <span class="token comment">//这个链接在很多地方会加到作者名上</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


  <span class="token comment">//############# 2.外观配置 ################</span>
  <span class="token literal-property property">favicon</span><span class="token operator">:</span> <span class="token string">&quot;/favicon.svg&quot;</span><span class="token punctuation">,</span> <span class="token comment">//标签栏的站点图标</span>
  <span class="token literal-property property">darkmode</span><span class="token operator">:</span> <span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span> <span class="token comment">//深色模式切换方式，使用toggle就好</span>
  <span class="token literal-property property">print</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否在文档右边显示打印按钮</span>
  <span class="token comment">// iconAssets: &quot;iconfont&quot;,  //设置icon资源，字符串形式</span>
  <span class="token literal-property property">iconAssets</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// 设置icon资源，数组形式，可包含多个资源链接</span>
    <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">//一般采用阿里云的iconfont项目链接</span>
    <span class="token string">&quot;https://at.alicdn.com/t/c/font_4059879_im0k048s4ff.css&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//主题色选择器</span>
  <span class="token literal-property property">fullscreen</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否显示全屏按钮</span>
  <span class="token literal-property property">backToTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否显示返回顶部按钮</span>
  <span class="token literal-property property">pure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否开启纯净模式</span>



  <span class="token comment">//############# 3. Navbar 导航栏配置 ################</span>
  <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;/logo.svg&quot;</span><span class="token punctuation">,</span> <span class="token comment">//导航栏网站图标</span>
  <span class="token literal-property property">logoDark</span><span class="token operator">:</span> <span class="token string">&quot;/darklogo.svg&quot;</span><span class="token punctuation">,</span> <span class="token comment">//暗黑导航栏图标,默认和logo一样</span>
  <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/AaronJinno&quot;</span><span class="token punctuation">,</span> <span class="token comment">//仓库配置</span>
  <span class="token literal-property property">repoDisplay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否显示git仓库</span>
  <span class="token comment">//docsDir: &quot;demo/theme-docs/src&quot;, //文档的根目录</span>
  <span class="token literal-property property">navbarIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//导航栏图标是否显示的全局控制</span>
  <span class="token literal-property property">navbarAutoHide</span><span class="token operator">:</span> <span class="token string">&quot;mobile&quot;</span><span class="token punctuation">,</span> <span class="token comment">//向下滚动时隐藏导航栏[always | mobile | none]</span>
  <span class="token comment">//hideSiteNameOnMobile: true, //是否在移动视图下隐藏站点名称</span>
  <span class="token literal-property property">navbarLayout</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//导航栏显示的元素和布局</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Brand&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//左边：网站导航栏logo，start是现在在最左边</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Links&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//中间：网站的导航</span>
    <span class="token comment">//右端：语言切换、外观弹窗、代码仓库、搜索</span>
    <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Language&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Outlook&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Repo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Search&quot;</span><span class="token punctuation">]</span> 
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


  <span class="token comment">//############# 4. Sidebar 侧边栏配置 ################ </span>
  <span class="token literal-property property">sidebarIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//侧边栏图标全局控制</span>
  <span class="token comment">//sidebarSorter:[] //文档排序依据</span>
  <span class="token literal-property property">headerDepth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">//侧边栏标题深度，设置层1，只会显示h2子标题,2就显示h2和h3</span>


  <span class="token comment">//############# 4. 文档内容配置 ################ </span>

  <span class="token comment">//4.1 //页面文档显示的元信息</span>
  <span class="token comment">//titleIcon: true, //是否在页面标题旁显示图标</span>
  <span class="token literal-property property">pageInfo</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;Author&quot;</span><span class="token punctuation">,</span> <span class="token comment">//作者</span>
    <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span> <span class="token comment">//写作日期</span>
    <span class="token string">&quot;Category&quot;</span><span class="token punctuation">,</span> <span class="token comment">//分类</span>
    <span class="token string">&quot;Tag&quot;</span><span class="token punctuation">,</span> <span class="token comment">//标签</span>
    <span class="token string">&quot;Word&quot;</span><span class="token punctuation">,</span> <span class="token comment">//字数</span>
    <span class="token comment">//&quot;PageView&quot; //页面浏览量,需要评论插件配合</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">//4.2 辅助链接、导航</span>
  <span class="token comment">//breadcrumb: true, //是否开启全局路径面包屑导航</span>
  <span class="token comment">//breadcrumbIcon: true, //是否在路径面包屑导航显示图标</span>
  <span class="token comment">//prevLink: true, //是否在页面底部显示上一篇链接</span>
  <span class="token comment">//nextLink: true, //是否在页面底部显示下一篇链接</span>
  <span class="token comment">//toc: true,//是否在桌面模式下右侧展示标题列表</span>

  <span class="token comment">//4.3 mete</span>
  <span class="token comment">//lastUpdated: false, //是否在底部显示页面最后更新时间,需要Git配合</span>
  <span class="token comment">//contributors: false, //是否显示页面贡献者,需要Git配合</span>
  <span class="token comment">//editLink: false, //是否展示编辑此页链接</span>
  <span class="token comment">//docsRepo: &quot;repo&quot;, //文档仓库</span>
  <span class="token comment">//docsBranch: &quot;main&quot;, //文档所在分支</span>
  <span class="token comment">//docsDir: &quot;&quot;, //文档在仓库中的目录</span>

  <span class="token comment">//4.4 页脚</span>
  <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token string">&quot;Victor Da V&quot;</span><span class="token punctuation">,</span><span class="token comment">//页脚信息（首页可设置独立的页脚-备案信息）</span>
  <span class="token literal-property property">displayFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否默认显示页脚</span>
  <span class="token literal-property property">copyright</span><span class="token operator">:</span> <span class="token string">&quot;Copyright © Free To Copy&quot;</span><span class="token punctuation">,</span><span class="token comment">//页脚的版权信息</span>
  

  <span class="token comment">//############# 5. locales多语言 ################ </span>
  <span class="token comment">//当前配置是单语言，不进行过多配置，仅以导航栏和侧边栏为例</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">navbar</span><span class="token operator">:</span> zhNavbar<span class="token punctuation">,</span>
      <span class="token literal-property property">sidebar</span><span class="token operator">:</span> zhSidebar<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


  <span class="token comment">//############### 6. 功能配置 ##################</span>

  <span class="token comment">//6.1 加密配置</span>
  <span class="token literal-property property">encrypt</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//配置需要加密的页面或目录</span>
      <span class="token comment">// 开启全局密码后，这里就不生效了。</span>
      <span class="token string-property property">&quot;/aiface/console/&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;ai@2023&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">global</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否开启全局加密,默认是false </span>
    <span class="token literal-property property">admin</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;ai1901&quot;</span><span class="token punctuation">]</span> <span class="token comment">//全局加密的密码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">//6.2 博客配置：博客模式下使用，需要开启博客插件</span>
  <span class="token literal-property property">blog</span><span class="token operator">:</span><span class="token punctuation">{</span> 
    <span class="token literal-property property">avatar</span><span class="token operator">:</span><span class="token string">&quot;/avatar.jpg&quot;</span><span class="token punctuation">,</span> <span class="token comment">//博主头像</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;Victor Da V&quot;</span><span class="token punctuation">,</span> <span class="token comment">//博主名字,默认是author中的配置</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;未来世界的流浪者，AI学习者&quot;</span><span class="token punctuation">,</span><span class="token comment">//博客的口号、座右铭或介绍语</span>
    <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span> <span class="token comment">//博主的个人介绍地址</span>
    <span class="token literal-property property">roundAvatar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否剪裁头像为圆形形状</span>
    <span class="token literal-property property">timeline</span><span class="token operator">:</span><span class="token string">&quot;时光机&quot;</span><span class="token punctuation">,</span> <span class="token comment">//时间轴的顶部文字</span>
    <span class="token literal-property property">sidebarDisplay</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token comment">//在侧边栏展示博主信息[always | mobile | none]</span>
    <span class="token comment">//articlePerPage: 20,//4.3.8 每页的文章数量</span>

    <span class="token literal-property property">medias</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//博主的媒体链接配置，非常多，基本常用的媒体都有了，这里列出最常用的</span>
      <span class="token literal-property property">Github</span><span class="token operator">:</span><span class="token string">&quot;https://www.github.com/aaronjinno&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Gmail</span><span class="token operator">:</span><span class="token string">&quot;/about/gmail&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">Wechat</span><span class="token operator">:</span><span class="token string">&quot;/about/wechat&quot;</span><span class="token punctuation">,</span>
      <span class="token constant">QQ</span><span class="token operator">:</span><span class="token string">&quot;/about/qq&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">BiliBili</span><span class="token operator">:</span><span class="token string">&quot;https://space.bilibili.com/47292194&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


  <span class="token comment">//#################### 7. 插件配置 #######################</span>
  <span class="token comment">//PS: 这里都是Hope主题内置的插件，自己下载的插件需要在cofig.js中配置</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">//7.1 代码块主题色</span>
    <span class="token literal-property property">prismjs</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">light</span><span class="token operator">:</span><span class="token string">&quot;one-dark&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dark</span><span class="token operator">:</span><span class="token string">&quot;one-dark&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.2 博客配置</span>
    <span class="token literal-property property">blog</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//可以直接设置为true，采用默认配置</span>
      <span class="token literal-property property">excerpt</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否生成摘要</span>
      <span class="token literal-property property">excerptLength</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token comment">//自动生成的摘要的长度，0表示不生成</span>
      <span class="token comment">//fileter：过滤器。规定满足那些条件的文档才属于文章，显示在文章列表</span>
      <span class="token function-variable function">filter</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">Boolean</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>filePathRelative<span class="token punctuation">)</span>
      <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>home <span class="token comment">//条件2：非主页</span>
      <span class="token operator">&amp;&amp;</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>article<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//条件3：需要包含article配置</span>
      <span class="token comment">//article:&quot;/article/&quot;, //博客文章列表路由路径</span>
      <span class="token comment">//category: &quot;/category/&quot;, //分类地图路由路径</span>
      <span class="token comment">//tag: &quot;/tag/&quot;, //标签地图路由路径</span>
      <span class="token comment">//star: &quot;/star/&quot;, //收藏文章列表路由路径</span>
      <span class="token comment">//timeline: &quot;/timeline/&quot;, //时间线列表路由路径</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.3  copyCode 代码复制按钮</span>
    <span class="token literal-property property">copyCode</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//设置为true或者空对象即可,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">//显示多久 &quot;已复制&quot;,单位ms</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.4 copyright 版权信息</span>
    <span class="token literal-property property">copyright</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//默认不开启版权限制，随便复制</span>
      <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">triggerWords</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">//触发附加版权的最小字数</span>
      <span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">&quot;Victor da V&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">license</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.5 Markdown增强配置，</span>
    <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//设置插件中哪些功能开启, true开启，false关闭</span>
      <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//容器内的内容对齐</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//属性支持</span>
      <span class="token literal-property property">card</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//卡片</span>
      <span class="token literal-property property">chart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//chart图表</span>
      <span class="token literal-property property">codetabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//代码块分组</span>
      <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//容器支持</span>
      <span class="token literal-property property">demo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用代码案例支持</span>
      <span class="token literal-property property">echarts</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">figure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//图片figure</span>
      <span class="token literal-property property">flowchart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用流程图支持</span>
      <span class="token literal-property property">footnote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用脚注格式支持</span>
      <span class="token literal-property property">gfm</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否支持完整的 GFM 语法</span>
      <span class="token literal-property property">imgLazyload</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//图片懒加载</span>
      <span class="token literal-property property">imgMark</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用图片标注支持</span>
      <span class="token literal-property property">imgSize</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//设置图片尺寸</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//导入其他md文件的内容</span>
      <span class="token literal-property property">katex</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//通过 KaTeX 启用tex语法支持(公式)</span>
      <span class="token literal-property property">mark</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//为文字设置黄色背景的mark</span>
      <span class="token literal-property property">mermaid</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用 Mermaid 支持</span>
      <span class="token literal-property property">playground</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//交互演示选项</span>
        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">presentation</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//幻灯片支持</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;highlight&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;notes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stylize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">//对行内语法进行样式化以创建代码片段</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> tag <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span>
              <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;tip&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">sub</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//下角标</span>
      <span class="token literal-property property">sup</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//上角标</span>
      <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//选项卡</span>
      <span class="token literal-property property">tasklist</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否启用任务列表格式支持</span>
      <span class="token literal-property property">vPre</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用 v-pre 容器</span>
      <span class="token literal-property property">vuePlayground</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否启用 Vue 交互演示支持</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.6 缓存和更新时机配置</span>
    <span class="token literal-property property">pwa</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">favicon</span><span class="token operator">:</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">//cacheHTML: true, //缓存所有HTML页面</span>
      <span class="token literal-property property">cachePic</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//缓存站点图片</span>
      <span class="token literal-property property">appendBase</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxSize</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">,</span><span class="token comment">//缓存的文件大小控制</span>
      <span class="token literal-property property">maxPicSize</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">,</span><span class="token comment">//缓存的图片大小控制</span>
      <span class="token comment">//更新控制：开发时设置为hint，维护时设置为available</span>
      <span class="token literal-property property">update</span><span class="token operator">:</span><span class="token string">&quot;hint&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.7 components 内置组件启用</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">//添加激活的内置组件</span>
        <span class="token string">&quot;ArtPlayer&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;AudioPlayer&quot;</span><span class="token punctuation">,</span>   
        <span class="token string">&quot;CodePen&quot;</span>
        <span class="token comment">//... 用到那个加那个，有十几个。</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//7.8 其他插件配置</span>
    <span class="token literal-property property">nprogress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//页面切换进度条</span>

    <span class="token comment">// comment: { //评论配置：配置很复杂，不需要就别配置</span>
    <span class="token comment">//   provider: &quot;Twikoo&quot;, //选择引擎</span>
    <span class="token comment">// },</span>
    <span class="token comment">//photoSwipe:false,// photoSwipe图片浏览功能</span>
    <span class="token comment">//seo:false, //SEO, 默认不需要配置</span>
    <span class="token comment">//sitemap:false, //默认不需要任何配置</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="navbar-ts" tabindex="-1"><a class="header-anchor" href="#navbar-ts" aria-hidden="true">#</a> navbar.ts</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhNavbar <span class="token operator">=</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token comment">// 无下拉的单导航</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;指南&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;arrow&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;/guide/&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">//有下拉的导航</span>
  <span class="token punctuation">{</span> 
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;二级导航&quot;</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;ability&quot;</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">prefix</span> <span class="token operator">:</span><span class="token string">&quot;/second/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&quot;控制台&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;yibiaopan&quot;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;console/&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&quot;项目文档&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;wendang&quot;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;itemdoc/&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">//三级导航，只支持二级导航，第三级通过分类显示</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;三级导航&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;context&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&quot;/second/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> 
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;分类一&quot;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;ability&quot;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">prefix</span> <span class="token operator">:</span><span class="token string">&quot;/second/&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&quot;属于分类一&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;yibiaopan&quot;</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;console/&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> 
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;分类二&quot;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;ability&quot;</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">prefix</span> <span class="token operator">:</span><span class="token string">&quot;/second/&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">&quot;属于分类二&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;yibiaopan&quot;</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;console/&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>


  <span class="token comment">//字符串导航与字符串单文件导航，text就是文件内配置的title。</span>
  <span class="token string">&quot;/guide/&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;/使用指南&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sidebar-ts" tabindex="-1"><a class="header-anchor" href="#sidebar-ts" aria-hidden="true">#</a> sidebar.ts</h2><p>侧边栏推荐仅采用structure自动生成的侧边栏。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhSidebar <span class="token operator">=</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//推荐：使用structure将指定导航下所有的文件加入侧边栏</span>
  <span class="token string-property property">&quot;/guide/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">//可以给次级目录单独设置自动侧边栏</span>
  <span class="token string-property property">&quot;/second/s1/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>


  <span class="token comment">//数组格式：自定义侧边栏导航的目录</span>
  <span class="token string-property property">&quot;/third&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;/0001.md&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;/guide/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">//对象格式：自定义侧边栏标题和子侧边栏</span>
  <span class="token comment">//暂略，这个太麻烦了，用途不大。</span>

  <span class="token comment">// 注意：单文件无论如何配置都不会显示侧边栏</span>
  <span class="token string-property property">&quot;/使用指南&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> FrontMatter</h2><p>很多选项都是用来覆盖配置页的全局配置的，因此不设置的话就采用配置文件里的配置。</p><h4 id="_1-文档首页" tabindex="-1"><a class="header-anchor" href="#_1-文档首页" aria-hidden="true">#</a> 1. 文档首页</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> <span class="token string">&quot;/logo.png&quot;</span> <span class="token comment"># 首页图片的 URL，非背景图</span>
<span class="token key atrule">heroAlt</span><span class="token punctuation">:</span> <span class="token string">&quot;hi&quot;</span> <span class="token comment"># 首页图片的 alt 属性。</span>
<span class="token key atrule">heroHeight</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># 首页图片 &lt;img&gt; 标签的 height 属性 类型是number </span>
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> <span class="token string">&quot;站点标题&quot;</span>
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> <span class="token string">&quot;站点副标题&quot;</span>
<span class="token key atrule">actions</span><span class="token punctuation">:</span> <span class="token comment"># 配置首页按钮</span>
    <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 进入文档
      <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&quot;/zh/guide&quot;</span> <span class="token comment"># 按钮导航的url</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
    <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 站点介绍
      <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&quot;/zh/info&quot;</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;info&quot;</span>
<span class="token key atrule">features</span><span class="token punctuation">:</span> <span class="token comment"># 配置首页特性列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 内容全面
      <span class="token key atrule">details</span><span class="token punctuation">:</span> 涵盖所有AI相关的文档
    <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 新鲜快递
      <span class="token key atrule">details</span><span class="token punctuation">:</span> 最新技术和新闻一网打尽
<span class="token punctuation">---</span>
这里是首页下方的模块，可以添加一些炫酷的组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-博客首页" tabindex="-1"><a class="header-anchor" href="#_2-博客首页" aria-hidden="true">#</a> 2. 博客首页</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 指定为首页</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> BlogHome <span class="token comment"># 指定为博客首页的layout</span>
<span class="token key atrule">hero</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># </span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;站点标签栏title&quot;</span>
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> <span class="token string">&quot;站点标题&quot;</span>
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> <span class="token string">&quot;站点副标题&quot;</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> <span class="token string">&quot;/logo.png&quot;</span> <span class="token comment"># 站点logo图片</span>
<span class="token key atrule">heroImageDark</span><span class="token punctuation">:</span> <span class="token string">&quot;/logodark.png&quot;</span> <span class="token comment"># 设置夜间logo</span>
<span class="token key atrule">bgImage</span><span class="token punctuation">:</span> <span class="token string">&quot;/bg/bg2.png&quot;</span> <span class="token comment"># 首页背景图</span>
<span class="token key atrule">heroFullScreen</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 背景图是否全屏</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-普通文档" tabindex="-1"><a class="header-anchor" href="#_3-普通文档" aria-hidden="true">#</a> 3. 普通文档</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;页面的标题&quot;</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token string">&quot;2020-02-02&quot;</span> <span class="token comment"># 页面的日期</span>

<span class="token key atrule">category</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 所属分类
    <span class="token punctuation">-</span> 可以多个
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 添加标签
    <span class="token punctuation">-</span> 可以多个

<span class="token comment">##### 根据情况自选 ######</span>
<span class="token key atrule">navbar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否在当前页面展示导航栏</span>
<span class="token key atrule">pageClass</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>page<span class="token punctuation">-</span>class <span class="token comment"># 为当前页面添加额外的类名</span>
<span class="token key atrule">permalink</span><span class="token punctuation">:</span> <span class="token number">01102</span> <span class="token comment"># 为页面制定一个自定义的永久链接</span>
<span class="token key atrule">index</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否将当前页加入侧边栏</span>
<span class="token key atrule">sidebarDepth</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token comment"># 配置本页面的侧边栏深度</span>

<span class="token comment">##### 下面是基本不用的 #####</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;页面描述信息&quot;</span>
<span class="token key atrule">head</span><span class="token punctuation">:</span>  <span class="token comment">#添加header标签</span>
    <span class="token punctuation">-</span> <span class="token punctuation">[</span>meta<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> foo<span class="token punctuation">,</span><span class="token key atrule">content</span><span class="token punctuation">:</span> yaml数组语法<span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token punctuation">[</span>meta<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token key atrule">name</span><span class="token punctuation">:</span> bar<span class="token punctuation">,</span><span class="token key atrule">content</span><span class="token punctuation">:</span> bar的值<span class="token punctuation">}</span><span class="token punctuation">]</span> 
<span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN <span class="token comment">#单独指定该页面的语言</span>
<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否在本页面中启用 编辑此页 链接（git仓库）</span>
<span class="token key atrule">lastUpdated</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否在本页面中启用最近更新时间戳</span>
<span class="token key atrule">contributors</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否在本页面中启用 贡献者列表</span>
<span class="token key atrule">layout</span><span class="token punctuation">:</span> CustomLayout <span class="token comment">#页面的布局，选择一个自定义布局覆盖默认的</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-目录里的readme-md" tabindex="-1"><a class="header-anchor" href="#_4-目录里的readme-md" aria-hidden="true">#</a> 4. 目录里的<code>README.md</code></h4><p>用来控制目录名字的。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;该目录显示的名字&quot;</span>
<span class="token key atrule">index</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 隐藏该文档</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-js" tabindex="-1"><a class="header-anchor" href="#client-js" aria-hidden="true">#</a> client.js</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span>
<span class="token comment">//导入自定义组件</span>
<span class="token keyword">import</span> LinkCard <span class="token keyword">from</span> <span class="token string">&quot;./components/LinkCard.vue&quot;</span>
<span class="token comment">//导入UI框架</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/theme-chalk/index.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">enhance</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 全局加载组件自定义组件components</span>
        app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;LinkCard&quot;</span><span class="token punctuation">,</span> LinkCard<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//加载UI框架</span>
        app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h2><p>共有三个scss文件用于配置全局样式。</p><p>大部分样式都以给了默认值，直接采用即可，以下列出的是可能会修改的样式。</p><h4 id="_1-index-scss" tabindex="-1"><a class="header-anchor" href="#_1-index-scss" aria-hidden="true">#</a> 1. index.scss</h4><p>该文件用于添加自定义样式。F12查看网页，基本所有的class里的类，都可以在这里重新指定样式</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// place your custom styles here</span>
<span class="token comment">//======================================</span>
<span class="token comment">//===========添加自定义样式==============</span>
<span class="token comment">//======================================</span>

<span class="token comment">//1.定义title的样式</span>
<span class="token selector">h2</span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #560745<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h3</span><span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>1.4rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h4</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>1.2rem<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h5</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span>1rem<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span>600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//2.当使用博客模式，只想显示大图，可以隐藏大图下方的区域</span>

<span class="token comment">//隐藏主页下面的个人信息部分</span>
<span class="token selector">.blog-page-wrapper</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//隐藏大图的下滑按钮</span>
<span class="token selector">.blog-hero.fullscreen .slide-down-button</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-config-scss" tabindex="-1"><a class="header-anchor" href="#_2-config-scss" aria-hidden="true">#</a> 2. config.scss</h4><p>该文件里的内容基本不用改变。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//======================================</span>
<span class="token comment">//===========用于纯变量配置==============</span>
<span class="token comment">//======================================</span>

<span class="token comment">//1.颜色相关 &gt;以下都是默认值</span>
...
<span class="token comment">//2.响应式布局断点 &gt;以下都是默认值</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-palette-scss" tabindex="-1"><a class="header-anchor" href="#_3-palette-scss" aria-hidden="true">#</a> 3. palette.scss</h4><p>该文件是对网页进行整体的布局，可以根据需求进行修改。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//3.布局设置</span>
<span class="token comment">//3.1 导航栏</span>
<span class="token property"><span class="token variable">$navbar-height</span></span><span class="token punctuation">:</span> 3.75rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//导航栏高度</span>
<span class="token property"><span class="token variable">$navbar-horizontal-padding</span></span><span class="token punctuation">:</span> 1.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//导航栏水平填充</span>
<span class="token property"><span class="token variable">$navbar-vertical-padding</span></span><span class="token punctuation">:</span> 0.7rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//导航栏垂直填充</span>
<span class="token property"><span class="token variable">$navbar-mobile-height</span></span><span class="token punctuation">:</span> 3.25rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//移动设备上的导航栏高度</span>
<span class="token property"><span class="token variable">$navbar-mobile-horizontal-padding</span></span><span class="token punctuation">:</span> 1rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//移动设备上的导航栏水平填充</span>
<span class="token property"><span class="token variable">$navbar-mobile-vertical-padding</span></span><span class="token punctuation">:</span> 0.5rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//移动设备上的导航栏垂直填充</span>

<span class="token comment">//3.2 侧边栏：默认的侧边栏很快，可以改成16rem</span>
<span class="token property"><span class="token variable">$sidebar-width</span></span><span class="token punctuation">:</span> 16rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">// 侧边栏宽度</span>
<span class="token property"><span class="token variable">$sidebar-mobile-width</span></span><span class="token punctuation">:</span> 16rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//移动设备侧边栏宽度</span>

<span class="token comment">//3.3 内容：侧边栏改小后，可以扩大内容区域宽度</span>
<span class="token property"><span class="token variable">$content-width</span></span><span class="token punctuation">:</span> 780px <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//主要内容的宽度</span>
<span class="token property"><span class="token variable">$home-page-width</span></span><span class="token punctuation">:</span> 1160px <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//主页内容的宽度</span>

<span class="token comment">//3.4 字体：采用默认的即可</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),o=[p];function l(c,i){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","5-8.配置文件示例.html.vue"]]);export{u as default};
