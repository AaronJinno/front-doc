import{_ as n,o as s,c as a,e as t}from"./app-c07941ad.js";const p={},e=t(`<p>通过JavaScript实现的动画</p><ul><li>位置的变化：left、top</li><li>大小的变化：width、height</li><li>透明度的变化：opacity</li></ul><h2 id="i-位置变化" tabindex="-1"><a class="header-anchor" href="#i-位置变化" aria-hidden="true">#</a> Ⅰ. 位置变化</h2><p>【left、top】</p><p>如图点击立即分享，拉出了可分享的目标平台。<br> 鼠标移入的时候，向左走，鼠标离开的时候，向右走</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>立即分享<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
------------------------
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>
<span class="token selector">#main</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>1px solid #666<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>orange<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span><span class="token property">right</span><span class="token punctuation">:</span>-200px<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#main span</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>-20px<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
-----------------------
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
var oDiv = document.getElementById(&#39;main&#39;);
var timer = null;
//鼠标移入，开始从右向左移动
oDiv.onmouseover = function(){
    clearInterval(timer);
    timer = setInterval(function(){
        oDiv.style.left = oDiv.offsetLeft - 5 +&#39;px&#39;;
        if(oDiv.offsetLeft &lt;= document.body.clientWidth - oDiv.clientWidth){
           oDiv.style.left=document.body.clientWidth-oDiv.clientWidth+&#39;px&#39;;
        }
    }, 50);
}
//鼠标离开，从左向右移动
oDiv.onmouseout = function(){
    clearInterval(timer);
    timer = setInterval(function(){
        oDiv.style.left = oDiv.offsetLeft + 5 +&#39;px&#39;;
        if(oDiv.offsetLeft &gt;= document.body.clientWidth){
            oDiv.style.left =   document.body.clientWidth+&#39;px&#39;;
            //为了优化性能，可以在这里加个clearInterval。上一个判断同理
        }
    }, 50);
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-大小变化" tabindex="-1"><a class="header-anchor" href="#ii-大小变化" aria-hidden="true">#</a> Ⅱ. 大小变化</h2><p>【width、height】<br> 鼠标移入，让div变大到500px，鼠标离开，让div变小到100px</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>
<span class="token selector">#div1</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
-------
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
var oDiv = document.<span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
//鼠标移入，变大到500px
var timer = null<span class="token punctuation">;</span>
<span class="token selector">oDiv.onmouseover = function()</span><span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">timer = setInterval(function()</span><span class="token punctuation">{</span>
        <span class="token selector">if(odiv.offsetWidth&gt;=500)</span><span class="token punctuation">{</span>
             <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>//放在前面，解决bug.再次移入会先增加再判断
             return false<span class="token punctuation">;</span>//为了解决bug，再次移入会进行一次循环。
        <span class="token punctuation">}</span>   
        oDiv.style.width = oDiv.offsetWidth + 5 +<span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
        document.title  = oDiv.offsetWidth<span class="token punctuation">;</span>//在标题上显示宽度
        <span class="token selector">//if(oDiv.offsetWidth &gt;= 500)</span><span class="token punctuation">{</span> //当div宽度大于500的时候，清除定时器
        	//<span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>//清除定时器的判断是要放在定时器内部的。
       // <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 50<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">//鼠标离开，变小为100px
oDiv.onmouseout = function()</span><span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token selector">timer = setInterval(function()</span><span class="token punctuation">{</span>
        oDiv.style.width = oDiv.offsetWidth - 5 +<span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
        document.title  = oDiv.offsetWidth<span class="token punctuation">;</span>
        <span class="token selector">if(oDiv.offsetWidth &lt;= 100)</span><span class="token punctuation">{</span>
        	<span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 50<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iii-透明度变化" tabindex="-1"><a class="header-anchor" href="#iii-透明度变化" aria-hidden="true">#</a> Ⅲ. 透明度变化</h2><p>需求：默认div的透明度是0.2，鼠标移入变为1，完全显示出来， 鼠标离开，透明度变为0.2</p><h4 id="_1-精度问题" tabindex="-1"><a class="header-anchor" href="#_1-精度问题" aria-hidden="true">#</a> 1. 精度问题</h4><p>opacity的值是0-1之间的小数，然而在JavaScript中，小数参与运算的时候，就会出现精度的丢失</p><p>解决方法:可以先*100,取整,然后再除以100.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">*</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0.020000000000000004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-获得透明度的属性" tabindex="-1"><a class="header-anchor" href="#_2-获得透明度的属性" aria-hidden="true">#</a> 2. 获得透明度的属性</h4><p>按照我们以前的思路：先获得当前的值，每隔50毫秒再让当前的值加上一个值，再赋值给元素，现在的问题是如何实时获得当前opacity属性的值呢，由于JavaScript并没有提供方法获得opacity的值，所以我们需要获取所有CSS的值，再从中获取opacity的值</p><h4 id="_3-获取所有的css属性" tabindex="-1"><a class="header-anchor" href="#_3-获取所有的css属性" aria-hidden="true">#</a> 3. 获取所有的css属性</h4><p><code>getComputedStyle(对象，false)</code> 方法会获得所有的CSS的属性，是一个关联数组(对象),直接使用CSS属性名就可以获得值了。</p><h4 id="_4-完成透明度变化" tabindex="-1"><a class="header-anchor" href="#_4-完成透明度变化" aria-hidden="true">#</a> 4. 完成透明度变化</h4><p>注意：需要解决精度问题和获取opacity属性的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       
<span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
oDiv<span class="token punctuation">.</span><span class="token function-variable function">onmouseover</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//由于opacity透明度的值0-1之间，小数会出现精度的丢失</span>
        <span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token function">getStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span><span class="token string">&quot;opacity&quot;</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//parseInt取整。</span>
        now <span class="token operator">=</span> now <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>     
        <span class="token comment">//给opacity属性赋值的时候：30 / 100  ----&gt; 0.3</span>
        oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> now <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span><span class="token string">&#39;opacity&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span><span class="token string">&#39;opacity&#39;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//oDiv.style.opacity = 1;</span>
<span class="token punctuation">}</span>
oDiv<span class="token punctuation">.</span><span class="token function-variable function">onmouseout</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//先获得当前opacity属性的值</span>
        <span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token function">getStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span><span class="token string">&#39;opacity&#39;</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        now <span class="token operator">-=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> now <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token function">getStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span><span class="token string">&#39;opacity&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getStyle</span><span class="token punctuation">(</span>oDiv<span class="token punctuation">,</span><span class="token string">&#39;opacity&#39;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//获得元素css属性的值</span>
<span class="token comment">//参数1：获得哪个节点对象的css属性值</span>
<span class="token comment">//参数2：获得该节点对象的什么属性的值</span>
<span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>attr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>currentStyle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> element<span class="token punctuation">.</span>currentStyle<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","7-2.动画行为.html.vue"]]);export{r as default};
