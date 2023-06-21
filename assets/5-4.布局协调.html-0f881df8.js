import{_ as n,o as s,c as a,e}from"./app-351da1f5.js";const t="/front-doc/img/basic/css/5-4-1.jpg",p="/front-doc/img/basic/css/5-4-2.jpg",i="/front-doc/img/basic/css/5-4-3.jpg",c={},o=e(`<h2 id="i-居中对齐" tabindex="-1"><a class="header-anchor" href="#i-居中对齐" aria-hidden="true">#</a> Ⅰ. 居中对齐</h2><h4 id="_1-元素的居中对齐-margin-auto" tabindex="-1"><a class="header-anchor" href="#_1-元素的居中对齐-margin-auto" aria-hidden="true">#</a> 1. 元素的居中对齐：<code>margin: auto</code></h4><p>要水平居中对齐一个元素(如 <code>&lt;div&gt;</code>), 可以使用 <code>margin: auto</code>;。</p><p>设置到元素的宽度将防止它溢出到容器的边缘，如果没有设置 width 属性(或者设置 100%)，居中对齐将不起作用。</p><p>可以只设置左右的margin。<code>margin-left</code></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid green<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>50%
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-文本居中对齐-text-align-center-无法上下" tabindex="-1"><a class="header-anchor" href="#_2-文本居中对齐-text-align-center-无法上下" aria-hidden="true">#</a> 2. 文本居中对齐：<code>text-align: center</code>(无法上下)</h4><p>如果仅仅是为了文本在元素内居中对齐，可以使用 <code>text-align: center</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">selecter</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-图片居中对齐" tabindex="-1"><a class="header-anchor" href="#_3-图片居中对齐" aria-hidden="true">#</a> 3. 图片居中对齐</h4><p>要让图片居中对齐, 可以使用 <code>margin: auto</code> 并将它放到块元素中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">selecter</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span><span class="token comment">/* 不转无法居中。其他行内元素不用转 */</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-垂直对齐" tabindex="-1"><a class="header-anchor" href="#ii-垂直对齐" aria-hidden="true">#</a> Ⅱ. 垂直对齐</h2><h4 id="_1-vartical-align-文字垂直对齐" tabindex="-1"><a class="header-anchor" href="#_1-vartical-align-文字垂直对齐" aria-hidden="true">#</a> 1. vartical-align：文字垂直对齐</h4><figure><img src="`+t+`" alt="5-4-1" tabindex="0" loading="lazy"><figcaption>5-4-1</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vertical-align : baseline |top |middle |bottom 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vertical-align 不影响块级元素中的内容对齐，它只针对于 行内元素或者行内块元素，特别是行内块元素， 通常用来控制图片/表单与文字的对齐。</p><p>默认是基线对齐。</p><figure><img src="`+p+`" alt="5-4-2" tabindex="0" loading="lazy"><figcaption>5-4-2</figcaption></figure><h4 id="_2-去除图片底部的空白" tabindex="-1"><a class="header-anchor" href="#_2-去除图片底部的空白" aria-hidden="true">#</a> 2. 去除图片底部的空白</h4><p>图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐。这样会造成一个问题，就是图片底侧会有一个空白缝隙。</p><h5 id="_2-1-解决方法1-让图片不予基线对齐" tabindex="-1"><a class="header-anchor" href="#_2-1-解决方法1-让图片不予基线对齐" aria-hidden="true">#</a> 2.1 解决方法1：让图片不予基线对齐</h5><p>给img 添加vertical-align:middle | top属性， 让图片不要和基线对齐。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span><span class="token punctuation">{</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-解决方法2-把图片转换为块状" tabindex="-1"><a class="header-anchor" href="#_2-2-解决方法2-把图片转换为块状" aria-hidden="true">#</a> 2.2 解决方法2：把图片转换为块状</h5><p>给img 添加 display：block; 转换为块级元素就不会存在问题了。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-使用padding-垂直居中" tabindex="-1"><a class="header-anchor" href="#_3-使用padding-垂直居中" aria-hidden="true">#</a> 3. 使用padding：垂直居中</h4><p>顶部使用 padding:来实现垂直居中：设置了上下的padding和边框实现垂直居中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* center为某个文本标签 */</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 70px 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要水平和垂直都居中，可以使用 padding 和 <code>text-align: center</code></p><h4 id="_4-使用line-height-垂直居中" tabindex="-1"><a class="header-anchor" href="#_4-使用line-height-垂直居中" aria-hidden="true">#</a> 4. 使用line-height：垂直居中</h4><p>让行高和文本的高一样。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.center</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid green<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-1-文本在div内-或多行情况下-的对齐" tabindex="-1"><a class="header-anchor" href="#_4-1-文本在div内-或多行情况下-的对齐" aria-hidden="true">#</a> 4.1 文本在div内（或多行情况下）的对齐</h5><p>转成块状内联，并设置居中方式——类似于表格。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.center p</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-使用position和transform" tabindex="-1"><a class="header-anchor" href="#_5-使用position和transform" aria-hidden="true">#</a> 5. 使用position和transform</h5><p>可以使用 transform 属性来设置垂直居中:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* div标签 */</span>
<span class="token selector">.center</span> <span class="token punctuation">{</span> 
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>//相对定位
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid green<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
 
 <span class="token comment">/* div内的P标签 */</span>
<span class="token selector">.center p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>//相对父元素的绝对定位
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>//3D属性-平移
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iii-左右对齐" tabindex="-1"><a class="header-anchor" href="#iii-左右对齐" aria-hidden="true">#</a> Ⅲ. 左右对齐</h2><h4 id="_1-使用定位方式-左右对齐" tabindex="-1"><a class="header-anchor" href="#_1-使用定位方式-左右对齐" aria-hidden="true">#</a> 1. 使用定位方式-左右对齐</h4><p>我们可以使用 position: absolute; 属性来对齐元素:将一边的距离定为0。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid #73AD21<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绝对定位元素会被从正常流中删除，并且能够交叠元素。</p><p>当使用 position 来对齐元素时, 通常 <code>&lt;body&gt;</code> 元素会设置 margin 和 padding 。 这样可以避免在不同的浏览器中出现可见的差异。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用float方式-左右对齐" tabindex="-1"><a class="header-anchor" href="#_2-使用float方式-左右对齐" aria-hidden="true">#</a> 2. 使用float方式-左右对齐</h4><ul><li>我们也可以使用 float 属性来对齐元素:左右漂浮</li><li>对 <code>&lt;body&gt;</code> 元素的外边距和内边距进行预定义是一个好主意。这样可以避免在不同的浏览器中出现可见的差异</li><li>如果子元素的高度大于父元素，且子元素设置了浮动，那么子元素将溢出，我们可以在父元素上添加 <code>overflow: auto</code> 来解决子元素溢出的问题</li></ul><h2 id="iv-对齐范例" tabindex="-1"><a class="header-anchor" href="#iv-对齐范例" aria-hidden="true">#</a> Ⅳ. 对齐范例</h2><h4 id="_1-边界的应用" tabindex="-1"><a class="header-anchor" href="#_1-边界的应用" aria-hidden="true">#</a> 1. 边界的应用</h4><h5 id="_1-1-网页居中" tabindex="-1"><a class="header-anchor" href="#_1-1-网页居中" aria-hidden="true">#</a> 1.1 网页居中</h5><p>使用auto实现网页居中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#container</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>5px auto<span class="token punctuation">;</span> 
    <span class="token property">width</span><span class="token punctuation">:</span>910px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>363px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span>solid red 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div id=<span class="token string">&quot;container&quot;</span>&gt;&lt;h1&gt;模拟页面&lt;/h1&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-弹性页面设计" tabindex="-1"><a class="header-anchor" href="#_1-2-弹性页面设计" aria-hidden="true">#</a> 1.2 弹性页面设计</h5><p>边界设置成百分比，可以进行各类屏幕的适应，缺点是在不进行媒体查询的情况下，可能会导致布局混乱，应配合媒体查询使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#box</span> <span class="token punctuation">{</span><span class="token comment">/*定义文本框属性*/</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span><span class="token comment">/*边界为body宽度的2%*/</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2%<span class="token punctuation">;</span><span class="token comment">/*补白为body宽度的2%*/</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #CCCC33<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-3-调整栏目显示顺序" tabindex="-1"><a class="header-anchor" href="#_1-3-调整栏目显示顺序" aria-hidden="true">#</a> 1.3 调整栏目显示顺序</h5><p>利用float平行布局。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#wrap</span> <span class="token punctuation">{</span><span class="token property">width</span><span class="token punctuation">:</span> 997px<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span> 12px auto<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#box1, #box2</span> <span class="token punctuation">{</span><span class="token comment">/* 设置左右模块共同属性 */</span><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token comment">/* 向左浮动 */</span><span class="token punctuation">}</span>
<span class="token selector">#box1</span> <span class="token punctuation">{</span><span class="token comment">/* 定义左侧模块 */</span><span class="token property">width</span><span class="token punctuation">:</span> 408px<span class="token punctuation">;</span> <span class="token comment">/* 固定宽度 */</span><span class="token punctuation">}</span>
<span class="token selector">#box2</span> <span class="token punctuation">{</span><span class="token comment">/* 定义右侧模块*/</span><span class="token property">width</span><span class="token punctuation">:</span> 589px<span class="token punctuation">;</span> <span class="token comment">/* 固定宽度 */</span><span class="token punctuation">}</span>

&lt;body&gt;
&lt;div id=<span class="token string">&quot;wrap&quot;</span>&gt;
    &lt;div id=<span class="token string">&quot;top&quot;</span>&gt;&lt;h1&gt;标题栏&lt;/h1&gt;&lt;/div&gt;
    &lt;div id=<span class="token string">&quot;box1&quot;</span>&gt;&lt;h2&gt;左栏&lt;/h2&gt;&lt;/div&gt;
    &lt;div id=<span class="token string">&quot;box2&quot;</span>&gt;&lt;h2&gt;右栏&lt;/h2&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以同<code>&lt;li&gt;</code>之间的margin取赋值，来压缩<code>&lt;li&gt;</code>之间的空隙。</p><h4 id="_2-补白的应用" tabindex="-1"><a class="header-anchor" href="#_2-补白的应用" aria-hidden="true">#</a> 2. 补白的应用</h4><p>通过补白调整列表项目的显示大小。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span><span class="token comment">/*清除列表样式*/</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/*清除IE列表缩进*/</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/*清除非IE列表缩进*/</span>
    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*清除列表样式*/</span>
<span class="token punctuation">}</span>
<span class="token selector">#nav</span> <span class="token punctuation">{</span><span class="token comment">/*定义列表框宽和高*/</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#nav li</span> <span class="token punctuation">{</span><span class="token comment">/*定义列表项样式*/</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token comment">/*浮动列表项*/</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 9%<span class="token punctuation">;</span><span class="token comment">/*定义百分比宽度*/</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 5%<span class="token punctuation">;</span><span class="token comment">/*定义百分比补白*/</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 2px<span class="token punctuation">;</span> <span class="token comment">/*定义列表项间隔*/</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #def<span class="token punctuation">;</span> <span class="token comment">/*定义列表项背景色*/</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span> <span class="token comment">/*垂直居中*/</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span> <span class="token comment">/*平行居中*/</span>
<span class="token punctuation">}</span>
&lt;ul id=<span class="token string">&quot;nav&quot;</span>&gt;
    &lt;li&gt;美 丽 说&lt;/li&gt;
    &lt;li&gt;聚美优品&lt;/li&gt;
    &lt;li&gt;唯 品 会&lt;/li&gt;
    &lt;li&gt;蘑 菇 街&lt;/li&gt;
    &lt;li&gt;1 号 店&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-边框应用" tabindex="-1"><a class="header-anchor" href="#_3-边框应用" aria-hidden="true">#</a> 3. 边框应用</h4><ul><li>可以为边框显示不同的颜色，实现立体效果</li><li>可以为文字添加底部边框，生成下划线</li></ul><h4 id="_4-设计模板页" tabindex="-1"><a class="header-anchor" href="#_4-设计模板页" aria-hidden="true">#</a> 4. 设计模板页</h4><figure><img src="`+i+`" alt="5-4-3" tabindex="0" loading="lazy"><figcaption>5-4-3</figcaption></figure><p>主要利用float、padding、margin来实现，为了防止补白破坏布局，可以采用box-sizing属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #38382e<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #5d33cf<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 720px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #c8ca30<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#footer</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #cc4ad5<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid red<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;div class=<span class="token string">&quot;wrapper&quot;</span>&gt;
    &lt;div id=<span class="token string">&quot;header&quot;</span>&gt;页眉&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;sidebar&quot;</span>&gt;侧边栏&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;content&quot;</span>&gt;主内容&lt;/div&gt;
    &lt;div id=<span class="token string">&quot;footer&quot;</span>&gt;页脚&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,70),l=[o];function u(d,r){return s(),a("div",null,l)}const k=n(c,[["render",u],["__file","5-4.布局协调.html.vue"]]);export{k as default};
