import{_ as i,P as r,Q as d,S as a,a3 as n,a4 as s,a5 as t,C as o}from"./framework-3728cbf1.js";const l="/front-doc/img/vue/vuepress/2-3-1.jpg",c={},p=a("h2",{id:"介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),u=a("p",null,"VuePress 会使用 markdown-it 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 语法扩展",-1),h={href:"https://markdown-it.docschina.org/",target:"_blank",rel:"noopener noreferrer"},m=a("h4",{id:"_1-概述",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-概述","aria-hidden":"true"},"#"),n(" 1. 概述")],-1),k=a("p",null,"此处的扩展语法指的是：VuePress 内置支持的 Markdown 语法扩展。可以通过 markdown 和 extendsMarkdown 来配置这些内置扩展、加载更多 markdown-it 插件、实现新的扩展等",-1),v=a("p",null,"如果采用了hope主题，hope主题的markdown插件也是基于markdown-it的，且增加非常多的扩展和样式调整，功能更强大。",-1),b=a("h4",{id:"_2-markdown-it语法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-markdown-it语法","aria-hidden":"true"},"#"),n(" 2.markdown-it语法")],-1),_={href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>这些语法和通用的markdown语法基本一样。</p><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2><h4 id="_1-标题锚点" tabindex="-1"><a class="header-anchor" href="#_1-标题锚点" aria-hidden="true">#</a> 1. 标题锚点</h4><p>为文档内的标题创建一个锚地，该标题将成为可链接状态。默认就是开启的</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">####</span> 通过#设置标题的同时设置了锚点</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-链接" tabindex="-1"><a class="header-anchor" href="#_2-链接" aria-hidden="true">#</a> 2. 链接</h4><p>链接扩展是由内置插件支持，不需要做额外的配置。</p><ul><li>内部链接：使用绝对或相对路径链接到内部的md文件</li><li>外部链接：链接http协议的URL</li></ul><h5 id="_2-1-内部链接" tabindex="-1"><a class="header-anchor" href="#_2-1-内部链接" aria-hidden="true">#</a> 2.1 内部链接</h5><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 内部链接：相对路径 --&gt;</span>
<span class="token url">[<span class="token content">首页</span>](<span class="token url">../README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考</span>](<span class="token url">../reference/config.md</span>)</span>  
<span class="token url">[<span class="token content">快速上手</span>](<span class="token url">./getting-started.md</span>)</span> 

<span class="token comment">&lt;!-- 内部链接：绝对路径 --&gt;</span>
<span class="token url">[<span class="token content">指南</span>](<span class="token url">/zh/guide/README.md</span>)</span>  
<span class="token url">[<span class="token content">配置参考 &gt; markdown.links</span>](<span class="token url">/zh/reference/config.md#links</span>)</span> 

<span class="token comment">&lt;!-- 外部链接：URL --&gt;</span>
<span class="token url">[<span class="token content">GitHub</span>](<span class="token url">https://github.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于指向内部 Markdown 文件的链接，尽可能使用相对路径而不是绝对路径。</p><h5 id="_2-2-解析" tabindex="-1"><a class="header-anchor" href="#_2-2-解析" aria-hidden="true">#</a> 2.2 解析</h5><ul><li>内部链接会被转换为 ：<code>&lt;RouterLink&gt; </code>以便进行 SPA 导航。</li><li>指向 .md 文件的内部链接会被转换为目标页面的 路由路径，并且支持绝对路径和相对路径。</li><li>外部链接会被添加 <code>target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;</code> 属性。</li></ul><h5 id="_2-3-额外功能" tabindex="-1"><a class="header-anchor" href="#_2-3-额外功能" aria-hidden="true">#</a> 2.3 额外功能</h5><p>可以通过链接后面加 <code>{}</code> 添加额外功能</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 指定target方式，内部链接默认是self --&gt;</span>
<span class="token url">[<span class="token content">原型图</span>](<span class="token url">/axure/前台/index.html</span>)</span>{target=&quot;_blank&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-目录" tabindex="-1"><a class="header-anchor" href="#_3-目录" aria-hidden="true">#</a> 3. 目录</h4><p>将文件和标题锚点生成目录（包括侧边目录和内置目录）</p><h5 id="_3-1-标题" tabindex="-1"><a class="header-anchor" href="#_3-1-标题" aria-hidden="true">#</a> 3.1 标题</h5><p>标题锚点将会生成目录。</p><p>注意：md文件内，title（文件名）本身就代表了一级标题，在没有设置title时，一级标题就代表了title。</p><p>推荐设置title，内部标题从二级标题开始。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> aicell
<span class="token key atrule">description</span><span class="token punctuation">:</span> ai文档</span>
<span class="token punctuation">---</span></span>
<span class="token title important"><span class="token punctuation">#</span> Hello vuepress //不用生成标题</span>
<span class="token title important"><span class="token punctuation">##</span> part one </span>
<span class="token title important"><span class="token punctuation">##</span> part two</span>
<span class="token title important"><span class="token punctuation">###</span> import</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：文件在侧边栏形成了目录，title就是目录名，二级标题就是目录的子目录</p><h4 id="_3-2-内置目录" tabindex="-1"><a class="header-anchor" href="#_3-2-内置目录" aria-hidden="true">#</a> 3.2 内置目录</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>[[toc]] //[[toc]]用于生成文档内部的目录
<span class="token title important"><span class="token punctuation">#</span> Hello vuepress</span>
<span class="token title important"><span class="token punctuation">##</span> part one </span>
<span class="token title important"><span class="token punctuation">##</span> part two</span>
<span class="token title important"><span class="token punctuation">###</span> import</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在vuepress中，目录本身也是可以访问的，内容如下：显示当前目录包含的md文档链接</p>`,27),f={href:"http://localhost:8080/front-doc/vue/vuepress/2.Markdown-Plus/",target:"_blank",rel:"noopener noreferrer"},w=t('<figure><img src="'+l+'" alt="2-3-1" tabindex="0" loading="lazy"><figcaption>2-3-1</figcaption></figure><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h2><p>可以在 Markdown 内容中输入 <code>:EMOJICODE:</code> 来添加 Emoji 表情。</p><p>Emoji 扩展由 markdown-it-emoji 支持。</p><h4 id="_1-emojicode" tabindex="-1"><a class="header-anchor" href="#_1-emojicode" aria-hidden="true">#</a> 1. emojicode</h4>',5),x={href:"https://github.com/ikatyang/emoji-cheat-sheet",target:"_blank",rel:"noopener noreferrer"},j=t(`<h4 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>别忘了:alarm_clock: 10月1日放假
:baby:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>别忘了⏰ 10月1日放假 👶</p><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2><p>可以在 Markdown 内容中使用相对路径来引用静态资源</p><h4 id="_1-public目录" tabindex="-1"><a class="header-anchor" href="#_1-public目录" aria-hidden="true">#</a> 1. public目录</h4><p>可以把静态资源统一放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。 放在该目录中的静态资源可以直接引用，<code>/</code> 就代表了<code>public</code>目录</p><ul><li>使用绝对路径要引用编译后的，也就是直接使用<code>/</code> 代表<code>public</code>目录</li><li>示例：<code>[一张图片](/img/1.png)</code></li></ul><h4 id="_2-base-helper" tabindex="-1"><a class="header-anchor" href="#_2-base-helper" aria-hidden="true">#</a> 2. Base Helper</h4><p>如果网站部署在非根路径下，例如 <code>https://foo.github.io/bar/</code> ，那么应该把 base 设置为 &#39;/bar/&#39;。此时 Public 文件会被部署在 <code>https://foo.github.io/bar/images/hero.png</code> 这样的链接下。</p>`,10);function E(M,y){const e=o("ExternalLinkIcon");return r(),d("div",null,[p,u,a("p",null,[a("a",h,[n("markdown-it中文文档"),s(e)])]),m,k,v,b,a("p",null,[a("a",_,[n("markdown-it基本语法"),s(e)])]),g,a("ul",null,[a("li",null,[n("这是个目录："),a("a",f,[n("http://localhost:8080/front-doc/vue/vuepress/2.Markdown-Plus/"),s(e)])])]),w,a("p",null,[n("内置的emojicode大概有几百个。 "),a("a",x,[n("详见"),s(e)])]),j])}const q=i(c,[["render",E],["__file","2-3.框架内置扩展语法.html.vue"]]);export{q as default};
