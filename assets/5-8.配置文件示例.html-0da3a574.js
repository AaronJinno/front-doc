import{_ as n,o as s,c as a,e}from"./app-277eb25d.js";const t={},p=e(`<div class="hint-container danger"><p class="hint-container-title">说明</p><p>以下配置都是常用的，经典的配置，可以直接复制使用。</p><ul><li>配置项以Hope主题为基准。</li><li>每个配置项都有注释，可以根据实际情况进行修改。</li><li>被注释掉的配置，表示一般不用设置</li><li>这里采用的是单语言的配置，遇到多语言可根据规则自己添加</li></ul></div><h2 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="theme-ts" tabindex="-1"><a class="header-anchor" href="#theme-ts" aria-hidden="true">#</a> theme.ts</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="navbar-ts" tabindex="-1"><a class="header-anchor" href="#navbar-ts" aria-hidden="true">#</a> navbar.ts</h2><h2 id="sidebar-ts" tabindex="-1"><a class="header-anchor" href="#sidebar-ts" aria-hidden="true">#</a> sidebar.ts</h2><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> FrontMatter</h2><h2 id="client-js" tabindex="-1"><a class="header-anchor" href="#client-js" aria-hidden="true">#</a> client.js</h2><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h2>`,10),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","5-8.配置文件示例.html.vue"]]);export{u as default};
