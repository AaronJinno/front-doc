import{_ as n,P as s,Q as a,a5 as e}from"./framework-3728cbf1.js";const t={},i=e(`<h2 id="i-transition" tabindex="-1"><a class="header-anchor" href="#i-transition" aria-hidden="true">#</a> Ⅰ. transition</h2><p>过渡样式是动画的基础，让改变不发生在一瞬间，而是有个过渡，这便是动画。</p><ul><li>一个元素，有两套样式，transition放到其中一个样式中，过渡就是根据某个特定的触发条件，从样式1，变到样式2</li><li>transition是一种样式过渡模块，过渡可以与变形同时使用，使变形产生可控的过渡</li><li>transition是一个复合属性，简写包括4个参数，每个参数对应一个子属性</li><li>不只是变形，任何属性都可以应用过渡样式，比如把一个div的背景色由红色过渡到绿色</li></ul><h4 id="_1-过渡的内容" tabindex="-1"><a class="header-anchor" href="#_1-过渡的内容" aria-hidden="true">#</a> 1. 过渡的内容</h4><p>元素由样式1（包含transition）过渡到样式2.</p><ul><li>样式1有，样式2没有的属性：不做改变</li><li>样式1没有，样式2有的属性：过渡内容为组件添加该样式</li><li>样式1和2都有的属性：过度内容为由属性1变成属性2</li><li>样式2添加了变换：过渡内容就是执行变换</li></ul><p>以上仅假设需要变换的属性是all，可以手动指定要变化的属性。</p><h4 id="_2-transition-简写属性" tabindex="-1"><a class="header-anchor" href="#_2-transition-简写属性" aria-hidden="true">#</a> 2. transition：简写属性</h4><p>transition属性可以同时定义多个过渡，用逗号隔开。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> property duration timing-function delay<span class="token punctuation">,</span> ...<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>参数1：执行过渡的css属性</li><li>参数2：持续的过渡时间</li><li>参数3：速度曲线：linear 匀速，ease 由快到慢</li><li>参数4：过渡执行的延迟时间，单位都是s秒</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span><span class="token punctuation">{</span>
    <span class="token comment">/* all表示所有属性 */</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 2s ease 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* hover是触发条件 */</span>
<span class="token selector">img:hover</span><span class="token punctuation">{</span>
    <span class="token comment">/* 过渡与变形同时使用 */</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>100deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-单独指定四个值" tabindex="-1"><a class="header-anchor" href="#_3-单独指定四个值" aria-hidden="true">#</a> 3. 单独指定四个值</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>暂略，采用简写属性即可。</p></div><h2 id="ii-触发时机" tabindex="-1"><a class="header-anchor" href="#ii-触发时机" aria-hidden="true">#</a> Ⅱ. 触发时机</h2><p>css过渡样式（包括css动画）一般通过鼠标事件或状态来触发。</p><h4 id="_1-伪类" tabindex="-1"><a class="header-anchor" href="#_1-伪类" aria-hidden="true">#</a> 1. 伪类</h4><h5 id="_1-1-hover" tabindex="-1"><a class="header-anchor" href="#_1-1-hover" aria-hidden="true">#</a> 1.1 <code>:hover</code></h5><p>最常用的过渡触发方式，通过鼠标在目标元素上悬停，来触发过渡。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span> 
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> all 2s ease 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div:hover</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注</strong></p><p>transition在div中和div:hover中的区别【其他的触发方式也类似】</p><ul><li>在div中：鼠标放上去触发transition改变css，鼠标离开时，还会再次触发transition，属性变了回去【写在这里效果更好】</li><li>在div:hover中：鼠标方上去触发transition改变css，鼠标离开时，不会再触发transition了，而是立即变回了属性</li></ul><h5 id="_1-2-active" tabindex="-1"><a class="header-anchor" href="#_1-2-active" aria-hidden="true">#</a> 1.2 <code>:active</code></h5><p>通过用户单击某个元素并在按住鼠标按键时，来触发过渡。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.exm</span><span class="token punctuation">{</span> 
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> width 2s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.exm:active</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意：单击后要按着鼠标按键不动，而不是只点击一下</li><li>当鼠标松开时，过渡样式（动画）会立即失效（不管有没有执行完），如果transition放在了非active样式中，还会反向执行动画，直到恢复原样。</li></ul><h5 id="_1-3-focus" tabindex="-1"><a class="header-anchor" href="#_1-3-focus" aria-hidden="true">#</a> 1.3 <code>:focus</code></h5><p>该伪类会在元素获取焦点时（鼠标、键盘、自动），来触发过渡。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> width 2s ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input:focus</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-4-checked" tabindex="-1"><a class="header-anchor" href="#_1-4-checked" aria-hidden="true">#</a> 1.4 <code>:checked</code></h5><p>该伪类在元素处于checked状态时，触发过渡。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input[type=&quot;checkbox&quot;]</span><span class="token punctuation">{</span>
    <span class="token property">transiton</span><span class="token punctuation">:</span> width 2s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=&quot;checkbox&quot;]:checked</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-媒体查询" tabindex="-1"><a class="header-anchor" href="#_2-媒体查询" aria-hidden="true">#</a> 2. 媒体查询</h4><p>当触发媒体查询时，同时触发过渡。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.example</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token property">transition</span><span class="token punctuation">:</span>width 2s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>800px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">.example</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-js事件" tabindex="-1"><a class="header-anchor" href="#_3-js事件" aria-hidden="true">#</a> 3. JS事件</h4><p>原理：定义两个类，当触发JS事件时，通过改变元素的类来触发过渡样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span>  <span class="token punctuation">{</span> 
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> 
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> 
    <span class="token property">transition</span><span class="token punctuation">:</span> width 2s ease<span class="token punctuation">,</span> height 2s ease<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
<span class="token selector">.style-change</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> 
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">$(function()</span> <span class="token punctuation">{</span> 
    <span class="token selector">$(&quot;#button&quot;).click(function()</span> <span class="token punctuation">{</span> 
        $<span class="token punctuation">(</span><span class="token string">&quot;.box&quot;</span><span class="token punctuation">)</span>.<span class="token function">toggleClass</span><span class="token punctuation">(</span><span class="token string">&quot;style-change&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),p=[i];function c(l,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","6-3.过度样式.html.vue"]]);export{d as default};
