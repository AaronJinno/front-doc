import{_ as a,P as n,Q as s,a5 as t}from"./framework-3728cbf1.js";const e={},p=t(`<h2 id="i-img-图片标签" tabindex="-1"><a class="header-anchor" href="#i-img-图片标签" aria-hidden="true">#</a> Ⅰ. img：图片标签</h2><h4 id="_1-img标签" tabindex="-1"><a class="header-anchor" href="#_1-img标签" aria-hidden="true">#</a> 1. img标签</h4><p>在 HTML 中，图像由 <code>&lt;img&gt;</code> 标签定义。<br><code>&lt;img&gt;</code> 是空标签，意思是说，它只包含属性，并且没有闭合标签。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./img/a.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>美女<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>美女<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-img标签的属性" tabindex="-1"><a class="header-anchor" href="#_2-img标签的属性" aria-hidden="true">#</a> 2. img标签的属性</h4><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">src</td><td style="text-align:center;">url</td><td style="text-align:center;">图像的路径</td></tr><tr><td style="text-align:center;">alt</td><td style="text-align:center;">文本</td><td style="text-align:center;">图像无法显示时的替换文本</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;">文本</td><td style="text-align:center;">鼠标悬停时显示的内容</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">像素</td><td style="text-align:center;">设置图像的宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">像素</td><td style="text-align:center;">设置图像的高度</td></tr><tr><td style="text-align:center;">border</td><td style="text-align:center;">数字</td><td style="text-align:center;">设置图像边框的宽度</td></tr></tbody></table><h4 id="_3-src属性" tabindex="-1"><a class="header-anchor" href="#_3-src属性" aria-hidden="true">#</a> 3. src属性</h4><p>要在页面上显示图像，你需要使用源属性（src）。src 指 &quot;source&quot;。源属性指的是图像的 URL 地址。<br> URL 指存储图像的位置。既可以是相对路径，也可以是绝对路径。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./img/a.png<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-alt属性" tabindex="-1"><a class="header-anchor" href="#_4-alt属性" aria-hidden="true">#</a> 4. alt属性</h4><p>alt 属性用来为图像定义一串预备的可替换的文本，当图片无法正常加载时便会显示。<br> 替换文本属性的值是用户定义的。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>boat.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>美女 图片加载中<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-宽高属性" tabindex="-1"><a class="header-anchor" href="#_5-宽高属性" aria-hidden="true">#</a> 5. 宽高属性</h4><p>height（高度） 与 width（宽度）属性用于设置图像的高度与宽度，属性值默认单位为像素:可以不加px，不设置宽高属性的话，图片默认以真实宽高显示。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pulpit.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pulpit rock<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>304<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>228<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-border" tabindex="-1"><a class="header-anchor" href="#_6-border" aria-hidden="true">#</a> 6. border</h4><p>可为img标签设置一个border，与为div设置border类似。详见：CSS</p><h2 id="ii-图像的特殊用途" tabindex="-1"><a class="header-anchor" href="#ii-图像的特殊用途" aria-hidden="true">#</a> Ⅱ. 图像的特殊用途</h2><h4 id="_1-映射-map" tabindex="-1"><a class="header-anchor" href="#_1-映射-map" aria-hidden="true">#</a> 1. 映射 map</h4><p>带有可点击区域的图像映射。</p><p>如下：该段代码中的shape指的是点击区域的形状，coords指的应该是链接区域在图片中的坐标（像素为单位）。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maps.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>145<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>126<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Planets<span class="token punctuation">&quot;</span></span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#maps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0,0,82,126<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sun.htm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Sun<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>90,58,3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mercur.htm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Mercury<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>circle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>124,58,8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>venus.htm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Venus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-1-用法" tabindex="-1"><a class="header-anchor" href="#_1-1-用法" aria-hidden="true">#</a> 1.1 用法</h5><ul><li><code>&lt;map&gt;</code> 标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。</li><li><code>&lt;img&gt;</code> 中的 usemap 属性可引用 <code>&lt;map&gt;</code> 中的 id 或 name 属性（取决于浏览器），所以我们应同时向 <code>&lt;map&gt;</code> 添加 id 和 name 属性。</li><li>area 元素永远嵌套在 map 元素内部，area 元素可定义图像映射中的区域。</li></ul><h5 id="_1-2-关于坐标" tabindex="-1"><a class="header-anchor" href="#_1-2-关于坐标" aria-hidden="true">#</a> 1.2 关于坐标</h5><ul><li>矩形：(左上角顶点坐标为(x1,y1)，右下角顶点坐标为(x2,y2))</li><li>圆形：(圆心坐标为(X1,y1)，半径为r)</li><li>多边形：(各顶点坐标依次为(x1,y1)、(x2,y2)、(x3,y3) ......)</li></ul><h4 id="_2-图像链接" tabindex="-1"><a class="header-anchor" href="#_2-图像链接" aria-hidden="true">#</a> 2. 图像链接</h4><p>将图片标签放到a标签之间，此时图片变成可点击的链接。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.aicell.cc/html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smiley.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTML 教程<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[p];function c(o,u){return n(),s("div",null,l)}const r=a(e,[["render",c],["__file","1-7.img图片.html.vue"]]);export{r as default};
