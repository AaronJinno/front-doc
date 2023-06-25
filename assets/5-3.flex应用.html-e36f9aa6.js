import{_ as n,o as s,c as a,e as t}from"./app-68218236.js";const p="/front-doc/img/basic/css/5-2-11.jpg",e="/front-doc/img/basic/css/5-2-12.jpg",l="/front-doc/img/basic/css/5-2-13.jpg",c="/front-doc/img/basic/css/5-2-14.jpg",i="/front-doc/img/basic/css/5-2-15.jpg",o="/front-doc/img/basic/css/5-2-16.jpg",u="/front-doc/img/basic/css/5-2-17.jpg",d="/front-doc/img/basic/css/5-2-18.jpg",r="/front-doc/img/basic/css/5-2-19.jpg",k="/front-doc/img/basic/css/5-2-20.jpg",v="/front-doc/img/basic/css/5-2-21.jpg",m="/front-doc/img/basic/css/5-2-22.jpg",g="/front-doc/img/basic/css/5-2-23.jpg",b={},f=t('<h2 id="i-骰子布局" tabindex="-1"><a class="header-anchor" href="#i-骰子布局" aria-hidden="true">#</a> Ⅰ. 骰子布局</h2><p>并非真实的骰子，而是如下可以放置九个点的骰子。</p><figure><img src="'+p+`" alt="5-2-11" style="width:10em;" tabindex="0" loading="lazy"><figcaption>5-2-11</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>div元素（代表骰子的一个面）是Flex容器</li><li>span元素（代表点）是Flex项目。有多个项目，就添加多个span</li></ul><h4 id="_1-单项目骰子" tabindex="-1"><a class="header-anchor" href="#_1-单项目骰子" aria-hidden="true">#</a> 1. 单项目骰子</h4><p>Flex布局默认是首行左对齐，可以修改对齐方式。</p><figure><img src="`+e+`" alt="5-2-12" tabindex="0" loading="lazy"><figcaption>5-2-12</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 主轴对齐方式 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>//主轴剧中
  <span class="token property">justify-content</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span>//主轴右对齐
<span class="token punctuation">}</span>

<span class="token comment">/* 交叉轴对齐方式 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>//交叉轴剧中  
  <span class="token property">align-item</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span>//交叉轴剧右
<span class="token punctuation">}</span>

<span class="token comment">/* 主轴和交叉轴可以一起制定，来让一个点在9个位置移动 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span> //来个双重居中，点再正中间
  <span class="token property">align-item</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-双项目骰子" tabindex="-1"><a class="header-anchor" href="#_2-双项目骰子" aria-hidden="true">#</a> 2. 双项目骰子</h4><figure><img src="`+l+`" alt="5-2-13" tabindex="0" loading="lazy"><figcaption>5-2-13</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 1.两端对齐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
 <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
 <span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>   
<span class="token punctuation">}</span>

<span class="token comment">/* 2.竖着两端对齐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token comment">/* 3.竖着居中对齐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token comment">/* 4.竖着右对齐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
 <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
 <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>
 <span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>
 <span class="token property">align-items</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span>   
<span class="token punctuation">}</span>

<span class="token comment">/* 5.斜紧邻对齐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(2)</span><span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span>center  
<span class="token punctuation">}</span>

<span class="token comment">/* 6.斜分散对齐 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(2)</span><span class="token punctuation">{</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-三项目骰子" tabindex="-1"><a class="header-anchor" href="#_3-三项目骰子" aria-hidden="true">#</a> 3. 三项目骰子</h4><figure><img src="`+c+`" alt="5-2-14" style="width:5em;" tabindex="0" loading="lazy"><figcaption>5-2-14</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 单独控制某个项目进行排列即可，如斜着一字排开 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(2)</span><span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
<span class="token selector">.item:nth-child(3)</span><span class="token punctuation">{</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-四项目骰子" tabindex="-1"><a class="header-anchor" href="#_4-四项目骰子" aria-hidden="true">#</a> 4. 四项目骰子</h4><figure><img src="`+i+`" alt="5-2-15" tabindex="0" loading="lazy"><figcaption>5-2-15</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 1.换行 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span>//换行，因为第一行满了，所有下面的布局对第一行没有效果
  <span class="token property">justify-content</span><span class="token punctuation">:</span>flex-end<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

<span class="token comment">/* 2.未铺满就换行，需要进行flex嵌套 */</span>
<span class="token selector">&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;column&quot;&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;column&quot;&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span> //换行
  <span class="token property">align-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>//多轴对齐方式
<span class="token punctuation">}</span>

<span class="token selector">.column</span> <span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> //单个项目主轴空间撑到100%，强制换行
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>//项目内部也进行flex布局
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>//元素内部的布局方式
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-六项目骰子" tabindex="-1"><a class="header-anchor" href="#_5-六项目骰子" aria-hidden="true">#</a> 5. 六项目骰子</h4><figure><img src="`+o+`" alt="5-2-16" tabindex="0" loading="lazy"><figcaption>5-2-16</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 1.两行分开 */</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span>wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span>space-between<span class="token punctuation">;</span>  
  //2.竖着分块，加个flex-direction即可
  <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 2.未铺满的多行，需要进行嵌套flex布局 */</span>
<span class="token selector">&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
    &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;row&quot;&gt;
     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
     &lt;span class=&quot;item&quot;&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.row</span><span class="token punctuation">{</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.row:nth-child(2)</span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.row:nth-child(3)</span><span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-九项目骰子" tabindex="-1"><a class="header-anchor" href="#_6-九项目骰子" aria-hidden="true">#</a> 6. 九项目骰子</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-网格布局" tabindex="-1"><a class="header-anchor" href="#ii-网格布局" aria-hidden="true">#</a> Ⅱ. 网格布局</h2><div class="hint-container danger"><p class="hint-container-title">注意</p><p>以下只是简单的介绍，实际使用中grid布局非常常见。</p><p>以后再补充。</p></div><h5 id="_1-基本网格布局" tabindex="-1"><a class="header-anchor" href="#_1-基本网格布局" aria-hidden="true">#</a> 1. 基本网格布局</h5><figure><img src="`+u+`" alt="5-2-17" tabindex="0" loading="lazy"><figcaption>5-2-17</figcaption></figure><p>在容器里面平均分配空间。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.Grid</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grid-cell</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>//可省略<span class="token punctuation">(</span>==flex-grow，默认就是1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-百分比布局" tabindex="-1"><a class="header-anchor" href="#_2-百分比布局" aria-hidden="true">#</a> 2. 百分比布局</h4><p>某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。</p><figure><img src="`+d+`" alt="5-2-18" tabindex="0" loading="lazy"><figcaption>5-2-18</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid-cell u-1of4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Grid-cell u-1of3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.Grid</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.Grid-cell</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.Grid-cell.u-full</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 100%<span class="token punctuation">;</span> //占满
<span class="token punctuation">}</span>
<span class="token selector">.Grid-cell.u-1of2</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 50%<span class="token punctuation">;</span> // 1/2
<span class="token punctuation">}</span>
<span class="token selector">.Grid-cell.u-1of3</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 33.3333%<span class="token punctuation">;</span> // 1/3
<span class="token punctuation">}</span>
<span class="token selector">.Grid-cell.u-1of4</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 25%<span class="token punctuation">;</span>// 1/4
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iii-圣杯布局" tabindex="-1"><a class="header-anchor" href="#iii-圣杯布局" aria-hidden="true">#</a> Ⅲ. 圣杯布局</h2><p>最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。</p><figure><img src="`+r+`" alt="5-2-19" tabindex="0" loading="lazy"><figcaption>5-2-19</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HolyGrail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HolyGrail-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HolyGrail-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HolyGrail-nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HolyGrail-ads<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.HolyGrail</span><span class="token punctuation">{</span>
    <span class="token property">dissplay</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span>100vh//占满视口高度，全屏
    <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>//竖着布局
<span class="token punctuation">}</span>
<span class="token selector">header,footer</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>//header和footer宽度都是100%
<span class="token punctuation">}</span>
<span class="token selector">.HolyGrail-body</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>//进行嵌套flex布局
    <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">main</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav,aside</span><span class="token punctuation">{</span>
   <span class="token property">flex</span><span class="token punctuation">:</span>0 0 12em<span class="token punctuation">;</span>//两个侧边栏设置固定宽度 
<span class="token punctuation">}</span>
<span class="token selector">nav</span><span class="token punctuation">{</span>
    <span class="token property">order</span><span class="token punctuation">:</span>-1<span class="token punctuation">;</span>//导航栏放到最前面
<span class="token punctuation">}</span>

<span class="token comment">/* 小屏幕视口适配：躯干自动变成垂直叠加 */</span>
<span class="token atrule"><span class="token rule">@media</span><span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">.HolyGrail-body</span><span class="token punctuation">{</span>
        <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>//换成竖着排列
        <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">nav,ads,content</span><span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>//<span class="token punctuation">(</span>==1<span class="token punctuation">,</span>1<span class="token punctuation">,</span>auto==高度相同<span class="token punctuation">,</span>宽度占满<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iv-输入框布局" tabindex="-1"><a class="header-anchor" href="#iv-输入框布局" aria-hidden="true">#</a> Ⅳ. 输入框布局</h2><p>在输入框的前方添加提示，后方添加按钮。</p><figure><img src="`+k+`" alt="5-2-20" tabindex="0" loading="lazy"><figcaption>5-2-20</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>InputAddOn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>InputAddOn-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>提示内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> /* 提示 */
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>InputAddOn-field<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> /* 输入框 */
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>InputAddOn-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span> * 按钮 */
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.div</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.InputAddOn-field</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 按钮占据自己本身大小，输入框占据剩下的大小 */</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-悬挂式布局" tabindex="-1"><a class="header-anchor" href="#v-悬挂式布局" aria-hidden="true">#</a> Ⅴ. 悬挂式布局</h2><p>主栏的左侧或右侧，需要添加一个图片栏。</p><figure><img src="`+v+`" alt="5-2-21" tabindex="0" loading="lazy"><figcaption>5-2-21</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Media<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Media-figure<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> /* 图片栏 */
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Media-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span> /* 主栏 */
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.Media</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span>flex-start<span class="token punctuation">;</span><span class="token comment">/* 左对齐 */</span>
<span class="token punctuation">}</span>
<span class="token selector">img</span><span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span>lem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span><span class="token comment">/* 图片占据自身宽度，其他的都由主栏内容占据 */</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vi-固定的底栏" tabindex="-1"><a class="header-anchor" href="#vi-固定的底栏" aria-hidden="true">#</a> Ⅵ. 固定的底栏</h2><p>有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。</p><figure><img src="`+m+`" alt="5-2-22" tabindex="0" loading="lazy"><figcaption>5-2-22</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Site<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Site-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.site</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">min-height</span><span class="token punctuation">:</span>100vh<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span>column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.site-content</span><span class="token punctuation">{</span>
    <span class="token property">flex</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vii-流式布局" tabindex="-1"><a class="header-anchor" href="#vii-流式布局" aria-hidden="true">#</a> Ⅶ. 流式布局</h2><p>每行的项目数固定，根据项目数量，会自动分行。</p><figure><img src="`+g+`" alt="5-2-23" tabindex="0" loading="lazy"><figcaption>5-2-23</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span>
  <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 25%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),y=[f];function h(x,q){return s(),a("div",null,y)}const w=n(b,[["render",h],["__file","5-3.flex应用.html.vue"]]);export{w as default};
