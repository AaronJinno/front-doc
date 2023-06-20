import{_ as n,o as s,c as a,e as t}from"./app-2b89a278.js";const e={},p=t(`<h2 id="i-计算属性" tabindex="-1"><a class="header-anchor" href="#i-计算属性" aria-hidden="true">#</a> Ⅰ. 计算属性</h2><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p>模板内可以使用表达式，但是只建议使用简单的运算，不要使用复杂的逻辑运算，不然难以进行维护。</p><p>比如：<code>{{ message.split(&#39;&#39;).reverse().join(&#39;&#39;) }}</code>（message的反转字符串），这个表达式就很复杂。</p><p>对于复杂的逻辑，不要使用表达式，而要使用计算属性。</p><ul><li>计算属性也是Vue实例的一个属性，该属性一般是通过运算得到的属性。</li><li>计算属性也是响应式的：改变data中的数据后，计算属性的最终值也会发生改变。</li></ul><h4 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h4><ul><li>选项式：使用computed来声明计算属性，该选项的值是一个对象，对象里的每一个方法都是一个计算属性。</li><li>组合式：computed()方法接收一个函数作为参数，返回一个计算属性ref，计算属性 ref 也会在模板中自动解包</li></ul><h4 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h4><p>功能：将直播人数*10显示。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>直播人数{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//响应式数据</span>
<span class="token keyword">const</span> real_num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//计算属性：参数是一个函数，该函数其实是一个getter函数</span>
<span class="token comment">//注意这里不是在顶层使用ref，需要加value</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>real_num<span class="token punctuation">.</span>value<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
=================选项式API============
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">real_num</span><span class="token operator">:</span><span class="token number">100</span>        
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//num就是声明的计算属性</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>real_num<span class="token operator">*</span><span class="token number">10</span>    
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-计算属性与方法" tabindex="-1"><a class="header-anchor" href="#_4-计算属性与方法" aria-hidden="true">#</a> 4. 计算属性与方法</h4><p>上面例子，可以通过调用方法来达到同样的效果。</p><p>我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>  data<span class="token punctuation">.</span>real_name<span class="token operator">*</span><span class="token number">10</span>  
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-1-缓存" tabindex="-1"><a class="header-anchor" href="#_4-1-缓存" aria-hidden="true">#</a> 4.1 缓存</h5><p>计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。</p><p>也就是当响应式状态不改变，无论访问多少次计算属性，都会立即返回之前的计算结果，而不用重复执行函数。</p><p>同时：调用方法将总会再次执行函数。</p><h5 id="_4-2-缓存的意义" tabindex="-1"><a class="header-anchor" href="#_4-2-缓存的意义" aria-hidden="true">#</a> 4.2 缓存的意义</h5><p>节省资源，有些函数是十分耗时的，比如：遍历list，<br> 如果确定不需要缓存，那么也可以使用方法调用。</p><h4 id="_5-可写计算属性" tabindex="-1"><a class="header-anchor" href="#_5-可写计算属性" aria-hidden="true">#</a> 5. 可写计算属性</h4><p>计算属性默认是只读的（只有getter），如果强项修改会收到警告。<br> 如果一定要写，就需要为计算属性提供getter和setter方法。<br> 计算属性默认包含了一个getter，只是通常被简写省略了。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lastName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Doe&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// getter</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// setter</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：我们这里使用的是解构赋值语法</span>
    <span class="token comment">//setter方法会在设置或者修改计算属性时的值时调用：给fullName赋值 </span>
    <span class="token punctuation">[</span>firstName<span class="token punctuation">.</span>value<span class="token punctuation">,</span> lastName<span class="token punctuation">.</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-1-getter不应有副作用" tabindex="-1"><a class="header-anchor" href="#_5-1-getter不应有副作用" aria-hidden="true">#</a> 5.1 getter不应有副作用</h5><p>计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要。</p><p>比如：不要在 getter 中做异步请求或者更改 DOM，个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。</p><h5 id="_5-2-避免直接修改计算属性值" tabindex="-1"><a class="header-anchor" href="#_5-2-避免直接修改计算属性值" aria-hidden="true">#</a> 5.2 避免直接修改计算属性值</h5><p>从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。<br> 更改快照是没有意义的，因此计算属性的返回值应该被视为只读的。<br> 应该更新它所依赖的源状态以触发新的计算。</p><h2 id="ii-计算属性的参数" tabindex="-1"><a class="header-anchor" href="#ii-计算属性的参数" aria-hidden="true">#</a> Ⅱ. 计算属性的参数</h2><h4 id="_1-filter-过滤器" tabindex="-1"><a class="header-anchor" href="#_1-filter-过滤器" aria-hidden="true">#</a> 1. Filter 过滤器</h4><p>在Vue2中是有filter过滤器的，过滤器的主要作用是对数据进行格式化处理。</p><p>但在Vue3总，filter源码被删除了，因为过滤器能完成的功能，计算属性和方法都能完成，该功能虽然方便，但意义不大，为了精简源码就取消了filter。</p><h4 id="_2-取消filter后的问题" tabindex="-1"><a class="header-anchor" href="#_2-取消filter后的问题" aria-hidden="true">#</a> 2. 取消Filter后的问题</h4><p>经常会遇到循环渲染数据，如评论列表，使用filter可以直接将filter和渲染的值写一起，循环遍历一个值就过滤一个值。</p><p>而使用计算属性，只能获取评论列表（一个数组），dom中实际渲染的是数组中的元素，而非数组本身，因此这里使用计算属性就非常麻烦。</p><h4 id="_3-计算属性处理数组的解决方案" tabindex="-1"><a class="header-anchor" href="#_3-计算属性处理数组的解决方案" aria-hidden="true">#</a> 3. 计算属性处理数组的解决方案</h4><p>既然不能直接渲染数组，那就动态的渲染数组中的每一个元素，当Dom中遍历数组的时，每取出一个元素，就将该元素在计算属性中进行渲染。</p><p>做法：已参数的形式，使用计算属性取代数组元素，并将数组元素作为参数传递给计算属性，计算属性就可以针对具体的数组元素进行处理了。这样每遍历一次数组，计算属性就重新处理一次，且每次处理的参数都不同。</p><h4 id="_4-计算属性的参数" tabindex="-1"><a class="header-anchor" href="#_4-计算属性的参数" aria-hidden="true">#</a> 4. 计算属性的参数</h4><p>computed()方法接收一个函数作为参数，<mark>返回一个计算属性ref</mark>，计算属性 ref 也会在模板中自动解包</p><p>如果案例：对评论中所有的点赞数进行处理，使其扩大100倍。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in commendData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- 直接取数组中元素的 likedCount --&gt;</span>
            {{item.likedCount}}
            <span class="token comment">&lt;!-- 通过计算属性对要取得值进行处理：需要传参 --&gt;</span>
            {{likedCount(item.likedCount)}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 用户评论数据，通过API获取的，值为数组，这里省略了</span>
<span class="token comment">// 其中数组元素是对象格式，对象中有个likedCount（点赞数）</span>
<span class="token keyword">let</span> commendData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> likedCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//参数count就是使用计算属性时传递的参数</span>
    <span class="token comment">//返回值是一个函数，函数的返回值将作为ref被dom渲染。</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count <span class="token operator">*</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//箭头函数版</span>
<span class="token keyword">let</span> userCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> count <span class="token operator">*</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-应用场景" tabindex="-1"><a class="header-anchor" href="#_5-应用场景" aria-hidden="true">#</a> 5. 应用场景</h4><p>需要处理循环渲染的数据时，就需要带参数的计算属性，如：</p><ul><li>评论列表点赞数：进行格式化处理</li><li>文章列表中的发表时间：对时间戳进行格式化处理</li></ul><h2 id="补充-访问器属性" tabindex="-1"><a class="header-anchor" href="#补充-访问器属性" aria-hidden="true">#</a> 补充：访问器属性</h2><p>js是基于对象的语言，JS对象中一共有两种属性，一种数据属性，一种访问器属性。其实还有一个内部属性，这个是每个JS对象都有的。</p><h4 id="_1-数据属性" tabindex="-1"><a class="header-anchor" href="#_1-数据属性" aria-hidden="true">#</a> 1. 数据属性</h4><p>其实就是普通的属性，用于表示数据值的位置（该位置可以读取和写入值），数据属性可以被删除、重定义、for-in枚举、修改、且可以拥有一个值。</p><h4 id="_2-内部属性" tabindex="-1"><a class="header-anchor" href="#_2-内部属性" aria-hidden="true">#</a> 2. 内部属性</h4><p>比如数组的length属性，函数的prototype属性， DOM节点的innerHTML属性。</p><p>用户对它们进行赋值后， 再取值时，它不一定按我们的预期做事，此外还会做一些格外的事情。另外，我们也很难改变它们的行为。</p><p>比如说某一数组，它的长度为10, 当我们设置它为11时，它就会增加一个undefined元素，再设置为9时，就会从后面删掉两个元素。 函数的prototype如果被改变，相当于将其父类改变了，会new不同类型的实例。 DOM的innerHTML，我们赋值时是一个字符串，再取出时，这字符串可能会与原来的不一样， 并且在原元素上生成了不一样的子节点。</p><h4 id="_3-访问器属性" tabindex="-1"><a class="header-anchor" href="#_3-访问器属性" aria-hidden="true">#</a> 3. 访问器属性</h4><p>在写入访问器属性时，会调用setter函数并传入新值。</p><p>该属性允许用户在赋值和取值时都经过预先设定的函数，实现内部属性的那一种特殊效果。<br> MVVM框架都会通过访问器属性来监听数据变换，从而进行函数处理。</p><h4 id="_4-getter" tabindex="-1"><a class="header-anchor" href="#_4-getter" aria-hidden="true">#</a> 4. getter</h4><p>用来访问访问器属性的函数。</p><h4 id="_5-setter" tabindex="-1"><a class="header-anchor" href="#_5-setter" aria-hidden="true">#</a> 5. setter</h4><p>用来设置访问器属性的函数。</p>`,61),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","3-5.计算属性.html.vue"]]);export{r as default};
