import{_ as a,P as n,Q as t,a5 as s}from"./framework-3728cbf1.js";const e={},p=s(`<div class="hint-container danger"><p class="hint-container-title">警告</p><p>没啥用，一般用JS处理，仅做了解。</p></div><h4 id="_1-number" tabindex="-1"><a class="header-anchor" href="#_1-number" aria-hidden="true">#</a> 1. number</h4><p>一种专门用来输人数字的文本框，并且在提交时进行检査，检查其中内容是否为数字，如果其中内容不为数字，则将文本框中的内容作为空白进行提交。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;input name=Mnumber1&quot; type=&quot;number&quot; value=&quot;25&quot; min=&quot;10&quot; max=&quot;100&quot; step=&quot;5&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>属性</strong><br> min 、max 与 step 属性，用来限制输入范围和步进值。同时该元素带有数值调整按钮，单击该数值调整按钮时，其中的数值按 step 属性值进行增减，当然也可以直接在其中输人数字。</p><h4 id="_2-range" tabindex="-1"><a class="header-anchor" href="#_2-range" aria-hidden="true">#</a> 2. range</h4><p>只允许输入一段范围内的数值的文本框，具有min属性与max属性，可以设定最小值与最大值（默认为 0 与 100），也具有step属性，可以指定每次拖动的步幅，有点类似于音量调节按钮。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>25<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-search" tabindex="-1"><a class="header-anchor" href="#_3-search" aria-hidden="true">#</a> 3. search</h4><p>一种专门用来输人搜索关键词的文本框， search 类型与 text 类型仅仅在外观上有区别。</p><h4 id="_4-tel" tabindex="-1"><a class="header-anchor" href="#_4-tel" aria-hidden="true">#</a> 4. tel</h4><p>tel 类型的 input 元素被设计为用来输人电话号码的专用文本框（移动端）。该元素没有特殊的校验规则，不强制输入数字。</p><h4 id="_5-color" tabindex="-1"><a class="header-anchor" href="#_5-color" aria-hidden="true">#</a> 5. color</h4><p>用于选取颜色，其提供了一个颜色选取器。<br> 默认的CSS不太好。</p><h4 id="_6-url" tabindex="-1"><a class="header-anchor" href="#_6-url" aria-hidden="true">#</a> 6. URL</h4><p>没啥用。</p><h4 id="_7-email" tabindex="-1"><a class="header-anchor" href="#_7-email" aria-hidden="true">#</a> 7. email</h4><p>没啥用。</p><h4 id="_8-时间标签" tabindex="-1"><a class="header-anchor" href="#_8-时间标签" aria-hidden="true">#</a> 8. 时间标签</h4><p>内置的事件标签样式不好看，一般不用，样式是可以修改的,但是比较麻烦。</p><ul><li>date：date 类型的 input 元素以日历的形式方便用户输人。</li><li>time：time 类型的 input 元素是一种专门用来输人时间的文本框，并且在提交时对输入时间的有效性进行检查。</li><li>datetime-local：datetime-local 类型的 input 元素是一种专门用来输人本地日期和时间的文本框，并且在提交时对输人的日期和时间进行有效性检查。</li><li>month类型：一种专门用来输人月份的文本框，并且在提交时对输人的月份的有效性进行检查。</li><li>week类型：一种专门用来输入周号的文本框，并且在提交时对输人的周号的有效性进行检查。</li><li>step属性：以上元素都具有一个step属性，用于在用户鼠标单击调整按钮或从日历中选择日期时对选择值的限定。</li><li>min与max属性：使用这些用于输入日期与时间的元素时，可以通过使用 min 属性与 max 属性来限定输入值的范围。</li><li>valueAsDate属性：用于设置或获取UTC日期和时间。</li></ul>`,21),l=[p];function i(u,o){return n(),t("div",null,l)}const r=a(e,[["render",i],["__file","4-4.input增强.html.vue"]]);export{r as default};
