import{_ as n,o as s,c as a,e as t}from"./app-f9b28035.js";const e={},p=t(`<h2 id="循环缩放" tabindex="-1"><a class="header-anchor" href="#循环缩放" aria-hidden="true">#</a> 循环缩放</h2><h4 id="_1-css-无限循环缩放" tabindex="-1"><a class="header-anchor" href="#_1-css-无限循环缩放" aria-hidden="true">#</a> 1. css 无限循环缩放</h4><p>根据选择器，指定缩放的容器。</p><p>应用场景：</p><ul><li>按钮动态循环缩放</li><li>H5元素简单动起来</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">//使用动画: class=image-button </span>
<span class="token selector">.image-button </span><span class="token punctuation">{</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> zoom<span class="token punctuation">;</span> <span class="token comment">// 动画名称</span>
	<span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span> <span class="token comment">// 播放方向，135正，246反</span>
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span> <span class="token comment">// 动画执行方式，匀速</span>
	<span class="token property">animation-delay</span><span class="token punctuation">:</span> 0s<span class="token punctuation">;</span> <span class="token comment">// 动画延迟时间</span>
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span> <span class="token comment">//  动画播放次数，无限</span>
	<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span> <span class="token comment">// 动画完成时间</span>
<span class="token punctuation">}</span>


<span class="token comment">//定义动画节点</span>
<span class="token atrule"><span class="token rule">@keyframes</span> likes</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%</span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.85<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">75%</span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","2-1.大小.html.vue"]]);export{r as default};
