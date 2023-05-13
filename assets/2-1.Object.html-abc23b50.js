import{_ as t,P as p,Q as o,S as n,a3 as a,a4 as i,a6 as c,a5 as s,C as l}from"./framework-3728cbf1.js";const r={},u=s(`<h2 id="i-复合数据类型" tabindex="-1"><a class="header-anchor" href="#i-复合数据类型" aria-hidden="true">#</a> Ⅰ. 复合数据类型</h2><p>复合类型是由多个基本数据类型（也可以包括复合类型）组成的数据体。</p><h4 id="_1-复合类型的种类" tabindex="-1"><a class="header-anchor" href="#_1-复合类型的种类" aria-hidden="true">#</a> 1. 复合类型的种类</h4><p>js的复合类型大致有以下三种：</p><ul><li>Object:对象</li><li>Array：数组</li><li>Function:函数</li></ul><h4 id="_2-引用数据类型" tabindex="-1"><a class="header-anchor" href="#_2-引用数据类型" aria-hidden="true">#</a> 2. 引用数据类型</h4><p>数据类型分为基本数据类型和引用数据类型，复合数据类型都属于引用数据类型。</p><h5 id="_2-1-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-1-基本数据类型" aria-hidden="true">#</a> 2.1 基本数据类型</h5><p>包含：String、Number、Boolean、Null、Undefined</p><p>基本数据类型的值直接在栈内存中储存，值与值之间是独立存在的，修改一个变量，不会影响其他变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> a <span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//100,10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-引用数据类型" tabindex="-1"><a class="header-anchor" href="#_2-2-引用数据类型" aria-hidden="true">#</a> 2.2 引用数据类型</h4><p>复合类型的数据是保存在堆内存中的，每次创建数据时，就会在堆内存开辟一块空间储存数据，而变量储存的只是数据的内存地址（对象的引用），而非数据本身。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;jinno&quot;</span><span class="token punctuation">;</span>
obj2 <span class="token operator">=</span> obj<span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;aaron&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">,</span>obj2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//aaron，aaron ，一起变</span>
obj2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//obj1不受影响，只是两个object的连接断开了。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当比较两个引用数据类型时，比较的是内存地址。</p><h4 id="_3-万物皆对象" tabindex="-1"><a class="header-anchor" href="#_3-万物皆对象" aria-hidden="true">#</a> 3. 万物皆对象</h4><p>JS是基于对象的语言，JS中的一切都是对象。</p><p>不过习惯上把不将基本数据类型称之为对象，可以将对象作为所有数据类型的母集。</p><p>同样出于使用习惯，虽然复合类型也都是对象，但提到对象时一般特指的就是手动创建的对象（自定义对象），而不包含函数和数组。</p><div class="hint-container danger"><p class="hint-container-title">注意</p><p>本章节提到的对象，特指手动创建的对象。</p></div><h2 id="ii-对象介绍" tabindex="-1"><a class="header-anchor" href="#ii-对象介绍" aria-hidden="true">#</a> Ⅱ. 对象介绍</h2><p>对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。</p><p>对象本质就是一些属性和值的集合，对象内部也可以保存方法（函数），可以把对象当成一个保存一类数据的容器。</p><h4 id="_1-对象的分类" tabindex="-1"><a class="header-anchor" href="#_1-对象的分类" aria-hidden="true">#</a> 1. 对象的分类</h4><ul><li>内置对象：JS内置的对象（JS本身是基于对象的）</li><li>宿主对象：由JS运行环境提供的对象，如浏览器提供的对象，如BOM和DOM，console和document都是由浏览器提供的</li><li>自建对象：自定义的对象</li></ul><h4 id="_2-对象成员" tabindex="-1"><a class="header-anchor" href="#_2-对象成员" aria-hidden="true">#</a> 2. 对象成员</h4><p>对象的成员包含属性和方法：</p><ul><li>在对象中保存的值，叫做属性。</li><li>对象中保存的函数，叫方法。</li></ul><h4 id="_3-属性" tabindex="-1"><a class="header-anchor" href="#_3-属性" aria-hidden="true">#</a> 3. 属性</h4><p>JS对象的属性值，可以是任意的数据类型，甚至可以是另一个对象。而属性名只能是字符串，或代表字符串的变量。</p><h4 id="_4-方法" tabindex="-1"><a class="header-anchor" href="#_4-方法" aria-hidden="true">#</a> 4. 方法</h4>`,31),d={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"方法",-1),v=s(`<p>函数也可以成为对象的属性，如果一个函数作为一个对象的属性保存，那么我们称这个函数为这个对象的方法。调用这个函数就说调用这个对象的方法（method）函数与方法只是在名称上不同，没有其他区别。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;jinno&quot;</span>
    <span class="token function-variable function">sayName</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-null" tabindex="-1"><a class="header-anchor" href="#_5-null" aria-hidden="true">#</a> 5. null</h4><p>null，指的是一个空对象的指针，可以理解为空对象的占位符。</p><p>null也是一个对象，但是里面什么也没有，是空的，将变量指向null，可以把对象回收。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//这是一个对象不过里面是空的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>null与undefined的区别</strong></p><ul><li>undefined: 变量已经定义，但是未赋值</li><li>null: null已经定义并赋值了，值就是null</li></ul><h2 id="iii-创建对象" tabindex="-1"><a class="header-anchor" href="#iii-创建对象" aria-hidden="true">#</a> Ⅲ. 创建对象</h2><h4 id="_1-new-object" tabindex="-1"><a class="header-anchor" href="#_1-new-object" aria-hidden="true">#</a> 1. new Object()</h4><p>声明对象有多种方式new Object()是最简单的，用于了解对象，实际开发中，一般不使用该方式声明对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//声明的是一个空对象,需要向里面添加属性和方法.</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>构造函数: 使用new关键字调用的函数，是构造函数，构造函数是专门用来创建对象的函数。</li></ul><h4 id="_2-对象字面量" tabindex="-1"><a class="header-anchor" href="#_2-对象字面量" aria-hidden="true">#</a> 2. 对象字面量</h4><p>常用对象创建方式，比new Object方便很多（可以直接指定成员）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>变量 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">属性名</span><span class="token operator">:</span> 属性值<span class="token punctuation">,</span> <span class="token comment">//成员之间用逗号隔开，最后一个可以不加</span>
    <span class="token literal-property property">方法名</span><span class="token operator">:</span> 方法值
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>成员名: 可以加引号，也可以不加，建议不加。 <ul><li>如果要使用一些特殊的名字，则必须加。</li></ul></li><li>成员值：值可以是任何数据类型，也可以进行字面量嵌套。</li><li>键值对: 成员名和成员值是一组一组的键值对结构， <ul><li>名和值之间使用冒号连接，多个键值对用逗号隔开，最后一个键值对不要写逗号。写了会报错（浏览器会自动去掉，但也不是100%）。</li></ul></li></ul><p><strong>示例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Game <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;jinno&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fuck</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;fuck you&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>Game<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//object</span>
<span class="token function">alert</span><span class="token punctuation">(</span>Game<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
Game<span class="token punctuation">.</span>fuck<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function h(m,b){const e=l("RouterLink");return p(),o("div",null,[u,n("div",d,[k,n("p",null,[a("这里仅做了解，详见下章"),i(e,{to:"/basic/js/2.%E5%A4%8D%E5%90%88%E7%B1%BB%E5%9E%8B/2-2.%E5%87%BD%E6%95%B0.html"},{default:c(()=>[a("方法")]),_:1})])]),v])}const _=t(r,[["render",h],["__file","2-1.Object.html.vue"]]);export{_ as default};