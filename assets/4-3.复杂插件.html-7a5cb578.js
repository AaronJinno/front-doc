import{_ as t,r as o,o as r,c as i,a as n,b as a,d as e,e as p}from"./app-277eb25d.js";const l={},c=n("h2",{id:"评论",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#评论","aria-hidden":"true"},"#"),a(" 评论")],-1),u={href:"https://plugin-comment2.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>该插件集成了多个评论引擎，可以按需选择。</p><p>不过所有的引擎都要借助第三方平台，配置比较复杂。</p><h4 id="_1-启用插件。" tabindex="-1"><a class="header-anchor" href="#_1-启用插件。" aria-hidden="true">#</a> 1. 启用插件。</h4><p>默认已经启用了，且默认是全局启用的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">comment</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">privider</span><span class="token operator">:</span> <span class="token string">&quot;Waline&quot;</span>        
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-privider" tabindex="-1"><a class="header-anchor" href="#_2-privider" aria-hidden="true">#</a> 2. privider</h4><p>有多个评论服务引擎<br> 目前可以从 Giscus、Waline（默认）、Twikoo 和 Artalk 中选择。</p><ul><li>Gisus：需要github登录，支持markdown【安全级别更高】</li><li>Waline：默认评论引擎，支持匿名评论，支持多媒体和markdown【推荐】</li><li>Twikoo：需要复杂的部署，基于腾讯云</li><li>Artalk：基于 golang 服务器的简洁自托管评论系统</li></ul><h4 id="_3-配置" tabindex="-1"><a class="header-anchor" href="#_3-配置" aria-hidden="true">#</a> 3. 配置</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>暂略，计划自己开发一块连接数据库和后天的评论插件。</p></div><h2 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h2>`,11),k={href:"https://plugin-pwa2.vuejs.press/zh/()",target:"_blank",rel:"noopener noreferrer"},h=p(`<p>如果使用该插件，推荐在config配置文件中设置：shouldPrefetch: false。<br> Vuepress官方也支持PWA，hope主题进行了加强。</p><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p>此插件会自动通过 workbox-build 注册 Service Worker。Service Worker(简称 SW) 主要用于获取并托管网站内容。</p><p>为了更好地控制 Service Worker 可以预缓存的内容，插件提供了很多设置。</p><h4 id="_2-启用" tabindex="-1"><a class="header-anchor" href="#_2-启用" aria-hidden="true">#</a> 2. 启用</h4><p>可以在主题选项中设置 plugins.pwa: true 来让主题自动生成必要配置并快速启用插件【不推荐】。</p><p>推荐按照下方说明对部分选项进行手动配置</p><h4 id="_3-缓存控制" tabindex="-1"><a class="header-anchor" href="#_3-缓存控制" aria-hidden="true">#</a> 3. 缓存控制</h4><p>基于可安装性的要求，插件提供了缓存控制的相关选项。</p><ul><li>默认缓存：默认情况下插件会预缓存所有的 JS、CSS 和 SVG 文件，但仅缓存主页和 404 页面的 HTML。同时插件还会缓存字体文件: <code>**/*.{woff,woff2,eot,ttf,otf}</code></li><li>图片缓存：可以在主题选项中设置 <code>plugins.pwa.cachePic: true</code> 来缓存站点图片</li><li>HTML缓存：当你网站体积不大，并且希望文档完全离线可用时，你可以在主题选项中设置<code>plugins.pwa.cacheHTML: true</code> 来缓存所有 HTML 页面。</li><li>大小控制：为了防止在预缓存列表中包含大文件，任何大于 2MB 的文件或大于 1MB 的图片都将被删除。可以在主题选项中通过 <code>plugins.pwa.maxSize</code> 选项自定义缓存的最大文件大小 (单位 KB)，或通过<code>plugins.pwa.maxPicSize</code> 来更改图片的大小限制 (单位: KB)。</li></ul><h4 id="_4-更新控制" tabindex="-1"><a class="header-anchor" href="#_4-更新控制" aria-hidden="true">#</a> 4. 更新控制</h4><p>在主题选项中提供 plugins.pwa.update 选项控制用户如何接收更新</p><ul><li>available：默认值，意味着当网站内容更新后，新的 SW 会在后台静默安装，并在安装结束后弹窗提示用户新内容就绪。用户可以自主选择是否立即刷新查看新内容。</li><li>disabled：文档很稳定，或不在乎用户是否获取最新文档 <ul><li>新的 SW 将在后台完全静默安装并在安装后等待，当旧版本 SW 控制的页面全部关闭后，用户下一次访问时，新 SW 将开始接管并提供用户新内容。此设置可以避免用户在访问途中被右下角的弹窗所打扰。</li></ul></li><li>force：加速用户在弱网或无网条件下的访问，同时希望用户时刻访问新内容，你可以将此选项设置为 &quot;force&quot; <ul><li>在检测到新 SW 后立即注销旧 SW 并刷新页面以确保用户浏览最新内容。但我们强烈推荐除非必要不适用此选项，因为这会导致新 SW 发布后，用户在进入网站后的几秒内会遇到预期之外的突然刷新，并且他们将必须通过互联网访问文档并完全重新安装最新的 SW.</li></ul></li></ul><h5 id="_4-1-更新提示弹窗" tabindex="-1"><a class="header-anchor" href="#_4-1-更新提示弹窗" aria-hidden="true">#</a> 4.1 更新提示弹窗</h5><p>当检测到新内容 (检测到新的 SW) 时， 更新提示弹窗将会在右下角显示，并允许用户刷新并应用。</p><p>如果对默认的弹窗不满意，你可以自行编写组件更换。你需要全局注册自己的弹窗组件，并将组件的名称传递给主题选项中的 plugins.pwa.hintComponent 选项。</p><h5 id="_4-2-更新就绪弹窗" tabindex="-1"><a class="header-anchor" href="#_4-2-更新就绪弹窗" aria-hidden="true">#</a> 4.2 更新就绪弹窗</h5><p>当新内容就绪 (新的 SW 安装成功并开始等待) 后，更新就绪弹窗将会在右下角显示，并允许用户刷新并应用。</p><p>如果你对默认的弹窗不满意，你可以自行编写组件更换。你需要全局注册自己的弹窗组件，并将组件的名称传递给主题选项中的 plugins.pwa.updateComponent 选项。</p><h4 id="_5-配置示例" tabindex="-1"><a class="header-anchor" href="#_5-配置示例" aria-hidden="true">#</a> 5. 配置示例</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">pwa</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">favicon</span><span class="token operator">:</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cacheHTML</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//缓存所有HTML页面</span>
    <span class="token literal-property property">cachePic</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//缓存站点图片</span>
    <span class="token literal-property property">appendBase</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxSize</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">//缓存的文件大小控制</span>
    <span class="token literal-property property">maxPicSize</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">//缓存的图片大小控制</span>
    <span class="token literal-property property">manifest</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span> <span class="token comment">//网站安装的清单文件，一般不用配置</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//更新控制：开发时设置为hint，维护时设置为available</span>
    <span class="token literal-property property">update</span><span class="token operator">:</span><span class="token string">&quot;hint&quot;</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-pwa相关介绍" tabindex="-1"><a class="header-anchor" href="#_6-pwa相关介绍" aria-hidden="true">#</a> 6. PWA相关介绍</h4><h5 id="_6-1-pwa介绍" tabindex="-1"><a class="header-anchor" href="#_6-1-pwa介绍" aria-hidden="true">#</a> 6.1 PWA介绍</h5><p>PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。<br> 它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。</p><h5 id="_6-2-service-worker" tabindex="-1"><a class="header-anchor" href="#_6-2-service-worker" aria-hidden="true">#</a> 6.2 Service Worker</h5><ul><li>Service Worker 会在注册过程中获取注册在其中的所有文件并缓存它们。</li><li>注册成功后，Service Worker 激活，并开始代理并控制你的全部请求。</li><li>每当你想要通过浏览器发起访问请求后，Service Worker 将会查看其是否存在与自身缓存列表中，若存在则直接返回缓存好的结果，否则调用自身的 fetch 方法进行获取。你可以通过自定义 fetch 方法，来完全控制网页内资源获取请求的结果，比如在离线时提供一个 fallback 的网页。</li><li>每次用户重新打开网站时，Service Worker 会向自身注册时的地址发出校验命令，如果检测到新版本的 Service Worker，则会更新自身，并开始缓存注册在新 Service Worker 中的资源列表。成功获取内容更新后，Service Worker 将会触发 update 事件。可以通过此事件提示用户，比如将在右下角显示一个弹出窗口，提示用户新内容可用并允许用户触发更新。</li></ul><h5 id="_6-3-可安装性" tabindex="-1"><a class="header-anchor" href="#_6-3-可安装性" aria-hidden="true">#</a> 6.3 可安装性</h5><p>想要让网站可以注册为 PWA，网站需要自行成功注册有效的 Service Worker，同时添加合法的 manifest 清单文件并在网站中声明它。各平台或浏览器对 Service Worker 缓存的大小有要求，当 Service Worker 缓存的文件体积过大后，该网站将会被标记为不可安装。</p><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2>`,29),v={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"相关信息",-1),b=n("p",null,"vuepress有三个官方搜索插件，不过都没有内置，需要进行安装并启用。",-1),g={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html",target:"_blank",rel:"noopener noreferrer"},_=n("ul",null,[n("li",null,"search-pro：本地搜索插件，会进行全文档扫描"),n("li",null,"search：一般无法直接使用"),n("li",null,"docsearch：官方用的就是这个，最精准，但是配置过于复杂，且依赖第三方服务")],-1),f=p(`<h4 id="_1-选择" tabindex="-1"><a class="header-anchor" href="#_1-选择" aria-hidden="true">#</a> 1. 选择</h4><p>docsearch虽然最精准，但需要发邮件申请资格，且配置复杂需要依赖第三方。</p><p>因此这里选择search-pro，进行初步的使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pnpm add <span class="token operator">-</span><span class="token constant">D</span> vuepress<span class="token operator">-</span>plugin<span class="token operator">-</span>search<span class="token operator">-</span>pro
<span class="token comment">//npm i -D vuepress-plugin-search-pro</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h4><p>从 vuepress-plugin-search-pro 导入 searchProPlugin 并将其应用至 config.{ts,js} 下的 plugins 选项.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .vuepress/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> searchProPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-search-pro&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token function">searchProPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">//配置搜索</span>
      <span class="token literal-property property">indexContent</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否索引正文，默认只索引title、tag和简要</span>
      <span class="token literal-property property">customFields</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//自定义项目的获取器</span>
        <span class="token comment">// 为分类和标签添加索引</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Category: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;分类：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">getter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tag: $content&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;/zh/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标签：$content&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="seo" tabindex="-1"><a class="header-anchor" href="#seo" aria-hidden="true">#</a> SEO</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>默认的即可，暂时不需要该插件</p></div>`,9);function y(x,W){const s=o("ExternalLinkIcon");return r(),i("div",null,[c,n("p",null,[a("通过内置 "),n("a",u,[a("vuepress-plugin-comment2"),e(s)]),a("，vuepress-theme-hope 实现了评论功能。")]),d,n("p",null,[a("通过内置 [vuepress-plugin-pwa2]"),n("a",k,[a("https://plugin-pwa2.vuejs.press/zh/()"),e(s)]),a(" 提供渐进式 Web 应用程序支持，该功能默认禁用。")]),h,n("div",v,[m,b,n("p",null,[n("a",g,[a("文档"),e(s)])]),_]),f])}const S=t(l,[["render",y],["__file","4-3.复杂插件.html.vue"]]);export{S as default};
