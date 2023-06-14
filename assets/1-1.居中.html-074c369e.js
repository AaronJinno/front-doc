import{_ as n,o as s,c as a,e as t}from"./app-f9b28035.js";const p={},e=t(`<h2 id="子div居中" tabindex="-1"><a class="header-anchor" href="#子div居中" aria-hidden="true">#</a> 子div居中</h2><p>一般采用子绝父相的方式居中，包括水平居中和垂直居中。</p><p>具体情况：子div在父div中居中（都是块元素）。</p><h4 id="_1-使用margin" tabindex="-1"><a class="header-anchor" href="#_1-使用margin" aria-hidden="true">#</a> 1. 使用margin</h4><p>子绝父相（父div相对定位，子div绝对定位），同时使用margin-left和margin-top</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.parent </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span>
    <span class="token comment">//父div相对定位</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.son </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300rpx<span class="token punctuation">;</span>

    <span class="token comment">//子div绝对定位</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

    <span class="token comment">//垂直对齐</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">//距离顶部偏移50%</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> -150rpx<span class="token punctuation">;</span><span class="token comment">//再回退50%的height</span>

    <span class="token comment">//水平对齐</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">//距离左边偏移50%</span>
	<span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span> <span class="token comment">//再回退50%的height</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-使用transform" tabindex="-1"><a class="header-anchor" href="#_2-使用transform" aria-hidden="true">#</a> 2. 使用transform</h4><p><code>transform: translate()</code> 是用来移动元素的。</p><p>先通过top和left偏移到中间，然后移动子元素长款的一半到中间位置。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.parent </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token comment">//父div相对定位</span>
<span class="token punctuation">}</span>

<span class="token selector">.son </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300rpx<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token comment">//子div绝对定位</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">//上和左进行偏移</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>

    <span class="token comment">//元素移动自身一半的长宽，居中定位</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-利用margin-auto" tabindex="-1"><a class="header-anchor" href="#_3-利用margin-auto" aria-hidden="true">#</a> 3. 利用margin:auto</h4><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.parent </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 500rpx<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token comment">//父div相对定位</span>
<span class="token punctuation">}</span>

<span class="token selector">.son </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200rpx<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300rpx<span class="token punctuation">;</span>

	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token comment">//子div绝对定位</span>
    
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[e];function c(o,l){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","1-1.居中.html.vue"]]);export{r as default};
