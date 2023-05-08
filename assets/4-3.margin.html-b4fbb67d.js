import{_ as a,P as i,Q as n,a5 as e}from"./framework-3728cbf1.js";const r="/front-doc/img/basic/css/4-3-1.jpg",s="/front-doc/img/basic/css/4-3-2.jpg",t="/front-doc/img/basic/css/4-3-3.jpg",l={},p=e('<h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><p>margin(外边距)属性定义元素周围的空间。</p><p>margin 没有背景颜色，是完全透明的， 这段空白通常不能放置其他内容。</p><figure><img src="'+r+`" alt="4-3-1" tabindex="0" loading="lazy"><figcaption>4-3-1</figcaption></figure><h4 id="_2-属性" tabindex="-1"><a class="header-anchor" href="#_2-属性" aria-hidden="true">#</a> 2. 属性</h4><p>margin 可以单独改变元素的上，下，左，右边距，也可以一次改变所有的属性。</p><ul><li>margin-top:100px;</li><li>margin-bottom:100px;</li><li>margin-right:50px;</li><li>margin-left:50px;</li></ul><h4 id="_3-margin值的类型" tabindex="-1"><a class="header-anchor" href="#_3-margin值的类型" aria-hidden="true">#</a> 3. margin值的类型</h4><ul><li>auto：居中，设置浏览器边距。这样做的结果会依赖于浏览器</li><li>length：定义一个固定的margin（使用像素，pt，em等）</li><li>%：定义一个使用百分比的边距 百分比按照父元素的宽计算</li><li>负值：表示重叠的内容。</li></ul><h4 id="_4-margin分别定义各边距" tabindex="-1"><a class="header-anchor" href="#_4-margin分别定义各边距" aria-hidden="true">#</a> 4. margin分别定义各边距</h4><p>margin除了可以分别定义每边的值，也可以一口气定义各边的值</p><ul><li>margin:25px 50px 75px 100px：上、右、下、左</li><li>margin:25px 50px 75px：上、左右、下、</li><li>margin:25px 50px：上下、左右</li><li>margin:25px：四个边都是25px</li></ul><h4 id="_5-margin实现盒子居中" tabindex="-1"><a class="header-anchor" href="#_5-margin实现盒子居中" aria-hidden="true">#</a> 5. margin实现盒子居中</h4><p>必须是块级元素，盒子必须指定了宽度（width），给左右的外边距都设置为auto，就可使块级元素水平居中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 文字水平居中是 text-align: center */</span>
<span class="token selector">.header</span><span class="token punctuation">{</span> 
    <span class="token property">width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>20px auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-外边距合并" tabindex="-1"><a class="header-anchor" href="#_6-外边距合并" aria-hidden="true">#</a> 6. 外边距合并</h4><p>使用margin定义块元素的垂直外边距时，可能会出现外边距的合并。</p><h5 id="_6-1-相邻块元素垂直外边距的合并" tabindex="-1"><a class="header-anchor" href="#_6-1-相邻块元素垂直外边距的合并" aria-hidden="true">#</a> 6.1 相邻块元素垂直外边距的合并</h5><p>当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom，下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和，而是两者中的较大者。这种现象被称为相邻块元素垂直外边距的合并。</p><figure><img src="`+s+'" alt="4-3-2" tabindex="0" loading="lazy"><figcaption>4-3-2</figcaption></figure><p>没有什么解决方案，要尽量避免。</p><h5 id="_6-2-嵌套块元素垂直外边距的合并" tabindex="-1"><a class="header-anchor" href="#_6-2-嵌套块元素垂直外边距的合并" aria-hidden="true">#</a> 6.2 嵌套块元素垂直外边距的合并</h5><p>对于两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的上外边距发生合并，合并后的外边距为两者中的较大者，即使父元素的上外边距为0，也会发生合并。</p><figure><img src="'+t+'" alt="4-3-3" tabindex="0" loading="lazy"><figcaption>4-3-3</figcaption></figure><p>解决方案</p><ul><li>可以为父元素定义1像素的上边框或上内边距。</li><li>可以为父元素添加overflow:hidden</li></ul>',26),c=[p];function d(o,g){return i(),n("div",null,c)}const m=a(l,[["render",d],["__file","4-3.margin.html.vue"]]);export{m as default};
