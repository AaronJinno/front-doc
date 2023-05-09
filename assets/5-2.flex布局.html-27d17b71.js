import{_ as a,P as e,Q as n,a5 as s}from"./framework-3728cbf1.js";const i="/front-doc/img/basic/css/5-2-1.jpg",l="/front-doc/img/basic/css/5-2-2.jpg",t="/front-doc/img/basic/css/5-2-3.jpg",r="/front-doc/img/basic/css/5-2-4.jpg",c="/front-doc/img/basic/css/5-2-5.jpg",d="/front-doc/img/basic/css/5-2-6.jpg",o={},p=s(`<h2 id="flex布局介绍" tabindex="-1"><a class="header-anchor" href="#flex布局介绍" aria-hidden="true">#</a> flex布局介绍</h2><h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。flexbox由伸缩容器和伸缩项目组成，任何一个容器都可以指定为Flex布局。</p><ul><li>伸缩容器：设置了 Flex 布局的元素称为伸缩（flex）容器</li><li>伸缩项目：伸缩容器的所有子元素都将变成flex文档流，称为伸缩项目。</li></ul><p>注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。</p><h4 id="_2-定义伸缩容器" tabindex="-1"><a class="header-anchor" href="#_2-定义伸缩容器" aria-hidden="true">#</a> 2. 定义伸缩容器</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 前者是块状元素，后者是行内元素 */</span>
<span class="token property">display</span><span class="token punctuation">:</span>flex | inline-flex<span class="token punctuation">;</span> 

<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>  //块状元素
  <span class="token property">display</span><span class="token punctuation">:</span>inline-flex<span class="token punctuation">;</span>//行内元素
  <span class="token property">display</span><span class="token punctuation">:</span>-webkit-flex<span class="token punctuation">;</span>//safari浏览器
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-flex流" tabindex="-1"><a class="header-anchor" href="#_3-flex流" aria-hidden="true">#</a> 3. flex流</h4><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。</p><p>主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p><p>伸缩项目默认是沿着主轴（main axis）从主轴起点（main-start）到主轴终点（main-end）排列；占据的交叉空间叫做cross size。</p><figure><img src="`+i+'" alt="5-2-1" tabindex="0" loading="lazy"><figcaption>5-2-1</figcaption></figure><ul><li>主轴（main axis）：伸缩项目主要沿着这条轴进行布局</li><li>主轴起点/终点（main start/main end）：伸缩项目放置在伸缩容器内从主轴的起点位置向终点位置排列</li><li>交叉轴（cross axis）：垂直于主轴</li><li>交叉轴起点/终点（cross start/crossend）：伸缩行的配置从容器的交叉轴起点边开始到终点边结束。</li><li>主轴尺寸/侧轴尺寸（main size/cross size）：单个伸缩项目的宽度（占据的主轴空间main size）和高度（占据交叉轴的空间cross size）。</li></ul><h2 id="容器的属性" tabindex="-1"><a class="header-anchor" href="#容器的属性" aria-hidden="true">#</a> 容器的属性</h2><h4 id="_1-flex-direction-定义伸缩的方向" tabindex="-1"><a class="header-anchor" href="#_1-flex-direction-定义伸缩的方向" aria-hidden="true">#</a> 1. flex-direction：定义伸缩的方向</h4><figure><img src="'+l+`" alt="5-2-2" tabindex="0" loading="lazy"><figcaption>5-2-2</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>row：默认，主轴水平方向，起点在左端</li><li>row-reverse：主轴为水平方向，起点在右端</li><li>column：主轴为垂直方向，起点在上沿</li><li>column-reverse：主轴为垂直方向，起点在下沿</li></ul><h4 id="_2-flex-wrap-定义换行" tabindex="-1"><a class="header-anchor" href="#_2-flex-wrap-定义换行" aria-hidden="true">#</a> 2. flex-wrap：定义换行</h4><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p><figure><img src="`+t+`" alt="5-2-3" tabindex="0" loading="lazy"><figcaption>5-2-3</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>nowrap（默认）：不换行。</li><li>wrap：换行，第一行在上方。</li><li>wrap-reverse：换行，第一行在下方。</li></ul><h4 id="_3-flex-flow" tabindex="-1"><a class="header-anchor" href="#_3-flex-flow" aria-hidden="true">#</a> 3. flex-flow</h4><p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p><h4 id="_4-justify-content-主轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_4-justify-content-主轴对齐方式" aria-hidden="true">#</a> 4. justify-content：主轴对齐方式</h4><p>justify-content属性定义了项目在主轴上的对齐方式。</p><figure><img src="`+r+`" alt="5-2-4" tabindex="0" loading="lazy"><figcaption>5-2-4</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><h4 id="_5-align-items-交叉轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_5-align-items-交叉轴对齐方式" aria-hidden="true">#</a> 5. align-items：交叉轴对齐方式</h4><figure><img src="`+c+`" alt="5-2-5" tabindex="0" loading="lazy"><figcaption>5-2-5</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-items</span><span class="token punctuation">:</span> flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><h4 id="_6-align-content-轴线对齐" tabindex="-1"><a class="header-anchor" href="#_6-align-content-轴线对齐" aria-hidden="true">#</a> 6. align-content：轴线对齐</h4><p>align-content属性定义了多根轴线的对齐方式，类似于justify-content。如果项目只有一根轴线（即只有一行），该属性不起作用。</p><figure><img src="`+d+`" alt="5-2-6" tabindex="0" loading="lazy"><figcaption>5-2-6</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between 
               | space-around | stretch<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><h2 id="项目的属性" tabindex="-1"><a class="header-anchor" href="#项目的属性" aria-hidden="true">#</a> 项目的属性</h2><h2 id="flex属性" tabindex="-1"><a class="header-anchor" href="#flex属性" aria-hidden="true">#</a> flex属性</h2><h2 id="flex应用" tabindex="-1"><a class="header-anchor" href="#flex应用" aria-hidden="true">#</a> flex应用</h2>`,42),u=[p];function f(h,x){return e(),n("div",null,u)}const m=a(o,[["render",f],["__file","5-2.flex布局.html.vue"]]);export{m as default};
