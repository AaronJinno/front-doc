import{_ as n,P as s,Q as a,a5 as t}from"./framework-3728cbf1.js";const e={},o=t(`<h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p>window对象是一切内置对象的父对象.js默认对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>widow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;widow对象的子对象&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//该元素被成功的添加进了数组对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window对象是默认对象，不加对象的方法都属于window.</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;http://google.com&quot;</span><span class="token punctuation">;</span><span class="token comment">//loaction也是window的子对象。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-window-confirm" tabindex="-1"><a class="header-anchor" href="#_2-window-confirm" aria-hidden="true">#</a> 2. window.confirm</h4><p>弹出确认框，如果点击确认返回true，点击取消返回false。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;您确认要删除吗&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-prompt" tabindex="-1"><a class="header-anchor" href="#_3-prompt" aria-hidden="true">#</a> 3. prompt</h4><p>弹出输入框，点击确认返回输入的内容，点击取消返回null。</p><ul><li>参数1:提示信息</li><li>参数2:默认值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var result = prompt(&#39;请输入捐款的金额&#39;,0); 
console.log(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","4-6.window对象.html.vue"]]);export{r as default};
