import{_ as s,P as n,Q as a,a5 as e}from"./framework-3728cbf1.js";const i="/front-doc/img/basic/css/1-1-1.jpg",l={},c=e('<h4 id="_1-css介绍" tabindex="-1"><a class="header-anchor" href="#_1-css介绍" aria-hidden="true">#</a> 1. CSS介绍</h4><ul><li>CSS 指层叠样式表 (Cascading Style Sheets)</li><li>样式定义如何显示 HTML 元素</li><li>样式通常存储在样式表中</li><li>把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题</li><li>外部样式表可以极大提高工作效率</li><li>外部样式表通常存储在 CSS 文件中</li><li>多个样式定义可层叠</li></ul><h4 id="_2-css样式语法" tabindex="-1"><a class="header-anchor" href="#_2-css样式语法" aria-hidden="true">#</a> 2. CSS样式语法</h4><figure><img src="'+i+`" alt="1-1-1" tabindex="0" loading="lazy"><figcaption>1-1-1</figcaption></figure><ul><li>选择器通常是需要改变样式的 HTML 元素，花括号内是对该对象设置的具体样式。</li><li>每条声明由一个属性和一个值组成。</li><li>属性（property）是希望设置的样式属性（style attribute）。 <ul><li>每个属性有一个值。属性和值被冒号分开。</li></ul></li><li>CSS声明总是以分号(;)结束，声明组以大括号({})括起来:</li><li>属性和属性值之间用英文“:”连接。多个“键值对”之间用英文“;”进行区分。</li></ul><h4 id="_3-css注释" tabindex="-1"><a class="header-anchor" href="#_3-css注释" aria-hidden="true">#</a> 3. CSS注释</h4><p>CSS注释以 <code>/*</code> 开始, 以 <code>*/</code>结束。</p><h4 id="_4-书写规范" tabindex="-1"><a class="header-anchor" href="#_4-书写规范" aria-hidden="true">#</a> 4. 书写规范</h4><h5 id="_4-1-空格" tabindex="-1"><a class="header-anchor" href="#_4-1-空格" aria-hidden="true">#</a> 4.1 空格</h5><ul><li>【强制】 选择器 与 <code>{</code>之间必须包含空格。</li><li>【强制】 属性名 与之后的 <code>: </code>之间不允许包含空格，<code>: </code>与 属性值 之间必须包含空格。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.selector</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-选择器规范" tabindex="-1"><a class="header-anchor" href="#_4-2-选择器规范" aria-hidden="true">#</a> 4.2 选择器规范</h5><ul><li>【强制】 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。</li><li>【建议】 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.post,
.page,
.comment</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post, .page, .comment</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-3-属性规范" tabindex="-1"><a class="header-anchor" href="#_4-3-属性规范" aria-hidden="true">#</a> 4.3 属性规范</h5><ul><li>【强制】 属性定义必须另起一行</li><li>【强制】 属性定义后必须以分号结尾</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.selector</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[c];function d(o,r){return n(),a("div",null,t)}const u=s(l,[["render",d],["__file","1-1.基础语法.html.vue"]]);export{u as default};
