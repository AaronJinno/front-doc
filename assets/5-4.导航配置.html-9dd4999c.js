import{_ as t,r as e,o as p,c as o,a as n,b as s,d as i,w as l,e as r}from"./app-277eb25d.js";const c={},u={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),k=n("p",null,"这两个文档内容貌似基本重复了。",-1),v=r(`<h2 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> Navbar</h2><div class="hint-container info"><p class="hint-container-title">Navbar 配置文件</p><p>.vuepress目录下创建navbar目录，并创建navbar-zh.ts作为中文导航栏配置，navbar-en作为英文导航栏配置（如果文档只支持一种语言，那只创建一个导航文件即可）。然后在主题配置中导入导航栏配置文件进行配置。</p></div><h5 id="_1-navbar配置详情" tabindex="-1"><a class="header-anchor" href="#_1-navbar配置详情" aria-hidden="true">#</a> 1. navbar配置详情</h5><p>Navbar配置文件默认导出的值是一个空数组，可以手动添加数组元素（导航栏元素），这些数组的元素就是具体的导航栏导航。</p><p>其中的每个元素是 NavbarItem 对象、 NavbarGroup 对象、或者字符串：</p><ul><li>NavbarItem对象：设置一个导航， <ul><li>text 字段：导航的标题</li><li>link 字段：导航的URL，一般指向内部的md文件所在目录</li><li>icon ：可选，给导航栏添加一个图标，支持iconfont</li><li>activeMatch：可选，激活模式。</li></ul></li><li>字符串格式的导航 <ul><li>字符串应为目标页面文件的路径。它将会被转换为 NavbarItem 对象，将页面标题作为 text ，将页面路由路径作为 link 。</li></ul></li><li>NavbarGroup对象：可嵌套的导航，最大深度是2 <ul><li>text字段：导航的标题</li><li>icon: 可选，添加一个图标，支持iconfont</li><li>prefix：子导航数组的公共路由前缀</li><li>children字段：子导航，该字段同样是一个导航栏数组</li></ul></li></ul><h5 id="_2-配置示例" tabindex="-1"><a class="header-anchor" href="#_2-配置示例" aria-hidden="true">#</a> 2. 配置示例</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhNavbar <span class="token operator">=</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token comment">// 测试导航1：标准导航，无下拉的单导航</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;指南&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;arrow&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">link</span><span class="token operator">:</span><span class="token string">&quot;/guide/&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 测试导航2：二级导航，有下拉菜单</span>
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

  <span class="token comment">//测试导航3：三级导航，只支持二级导航，第三级通过分类显示</span>
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


  <span class="token comment">//测试导航4：单文件导航，text就是文件内配置的title。</span>
  <span class="token string">&quot;/使用指南&quot;</span>

<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-导航分类" tabindex="-1"><a class="header-anchor" href="#_3-导航分类" aria-hidden="true">#</a> 3. 导航分类</h4><ul><li>字符串导航：该导航仅导航到一个单独的Markdown文件路径，不能设置其他属性。</li><li>对象导航：一般导航到一个文档目录，可以设置其他属性</li><li>嵌套导航：对象导航的嵌套模式，可以设置子导航，也可以设置其他属性 <ul><li>两层嵌套：导航将显示为下拉菜单的形式，内层导航才是真正指向了文档目录</li><li>多层导航：最多支持3层嵌套，嵌套的 children 来在下拉列表中设置分组，并不会产生嵌套的下拉列表，只会产生分组。</li></ul></li></ul><h2 id="sidebar" tabindex="-1"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> Sidebar</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>.vuepress目录下创建sidebar目录，并创建sidebar-zh.ts作为中文侧边栏配置，sidebar-en作为英文侧边栏配置（如果文档只支持一种语言，那只创建一个侧边栏文件即可）。</p><p>然后在主题配置中导入侧边栏配置文件进行配置。</p></div><h4 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例" aria-hidden="true">#</a> 配置示例</h4><p>一般采用Hope主题的自动生成模式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> zhSidebar <span class="token operator">=</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//推荐：使用structure将指定导航下所有的文件加入侧边栏</span>
  <span class="token string-property property">&quot;/guide/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/second/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function b(m,y){const a=e("RouterLink");return p(),o("div",null,[n("div",u,[d,n("p",null,[s("可参考Hope主题的："),i(a,{to:"/vue/vuepress/3.Hope%E4%B8%BB%E9%A2%98/3-3.%E5%AF%BC%E8%88%AA%E6%A0%8F%E4%B8%8E%E4%BE%A7%E8%BE%B9%E6%A0%8F.html"},{default:l(()=>[s("导航栏与侧边栏")]),_:1})]),k]),v])}const h=t(c,[["render",b],["__file","5-4.导航配置.html.vue"]]);export{h as default};
