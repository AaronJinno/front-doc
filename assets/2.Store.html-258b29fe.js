import{_ as n,P as s,Q as a,a5 as t}from"./framework-3728cbf1.js";const e={},p=t(`<h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><ul><li>Store简单来说就是数据仓库的意思，全局共用的数据都放在Store里面。</li><li>Store是报错状态和业务逻辑的实体，并不与组件树绑定。</li><li>Store承载着全局状态，类似一个永远存在的组件，每个组件都可以对它进行读写</li></ul><h5 id="_1-1-store核心概念" tabindex="-1"><a class="header-anchor" href="#_1-1-store核心概念" aria-hidden="true">#</a> 1.1 Store核心概念</h5><p>Store有三个核心概念</p><ul><li>state：类似于组件中的data</li><li>getter：类似于组件中的computed</li><li>action：类似于组件中的methods</li></ul><h5 id="_1-2-store使用的时机" tabindex="-1"><a class="header-anchor" href="#_1-2-store使用的时机" aria-hidden="true">#</a> 1.2 Store使用的时机</h5><p>一个 Store 应该包含可以在整个应用中访问的数据。</p><ul><li>在许多地方使用的数据。例如显示在导航栏中的用户信息，</li><li>需要通过页面保存的数据，例如一个非常复杂的多步骤表单。</li><li>应该避免在 Store 中引入那些原本可以在组件中保存的本地数据，例如，一个元素在页面中的可见性。</li></ul><h4 id="_2-stroe目录" tabindex="-1"><a class="header-anchor" href="#_2-stroe目录" aria-hidden="true">#</a> 2. stroe目录</h4><p>在项目src目录下创建store文件夹，用来存放创建的各种store（不同类型的store放到不通的文件内）。</p><p>例如：创建user.js，用来存放与user相关的store。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src
└── stores
    ├── index.js          # (可选) 初始化 Pinia，不必导入 store
    ├── module1.js        # &#39;module1&#39; id
    ├── nested-module2.js # &#39;nested/module2&#39; id
    ├── nested-module3.js # &#39;nested/module3&#39; id
    └── nested.js         # &#39;nested&#39; id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-definestore-定义store" tabindex="-1"><a class="header-anchor" href="#_3-definestore-定义store" aria-hidden="true">#</a> 3. defineStore：定义Store</h4><p>Store 是用 defineStore() 定义的，可以定义任意数量的Store，一个store就是一个函数调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//file：src/store/test.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useTestStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token comment">//其他配置项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-1-参数与返回值" tabindex="-1"><a class="header-anchor" href="#_3-1-参数与返回值" aria-hidden="true">#</a> 3.1 参数与返回值</h5><ul><li>参数1：一个独一无二的名字，这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。</li><li>参数2：第二个参数可接受两类值：Setup 函数或 Option配置对象。</li><li>返回值：为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定</li></ul><h5 id="_3-2-语法风格" tabindex="-1"><a class="header-anchor" href="#_3-2-语法风格" aria-hidden="true">#</a> 3.2 语法风格</h5><p>对于defineStore的第二个参数，是用来配置store对象的，有两种配置方式，同时也是两种代码风格</p><ul><li>ption配置对象：与 Vue 的选项式 API 类似</li><li>Setup函数：与Vue组合式API的setup函数类似。</li></ul><h4 id="_4-option-store" tabindex="-1"><a class="header-anchor" href="#_4-option-store" aria-hidden="true">#</a> 4. Option Store</h4><p>与 Vue 的选项式 API 类似可以传入一个带有 state、actions 与 getters 属性的 Option 对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useTestStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> <span class="token comment">//state：定义数据，类似组件的data</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//getter：获取数据，有计算属性的功能，</span>
    <span class="token function-variable function">double</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>state<span class="token punctuation">.</span>count<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//actions：执行方法，类似组件的methods</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-setup-store" tabindex="-1"><a class="header-anchor" href="#_5-setup-store" aria-hidden="true">#</a> 5. Setup Store</h4><p>与 Vue 组合式 API 的 setup 函数 相似，可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useTestStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//这里就跟直接在&lt;script setup&gt;里写代码一样,直接使用组合式API</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ref：相当于state属性</span>
  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//function：定义的方法相当于actions属性</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>count<span class="token punctuation">.</span>value<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">//computed：相当于getters属性</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>count<span class="token punctuation">,</span>increment<span class="token punctuation">,</span>num<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-使用store" tabindex="-1"><a class="header-anchor" href="#_6-使用store" aria-hidden="true">#</a> 6. 使用Store</h4><p>一旦store被实例化，就可以直接访问store内的state、getter和actions中定义的任何属性。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//file:src/views/Test1.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{store.count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span> //访问store暴露的数据
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useTestStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../store/test&#39;</span> <span class="token comment">//引入定义的store</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useTestStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//实例化store</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印store对象</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-1-结构赋值" tabindex="-1"><a class="header-anchor" href="#_6-1-结构赋值" aria-hidden="true">#</a> 6.1 结构赋值</h5><p>不能直接对store对象解构赋值，如果这样做store就会失去响应性。</p><p>如果需要结构赋值，就使用storeToRefs()</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//file:src/views/Test1.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useTestStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../store/test&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span> <span class="token comment">//引入storeToRefs函数</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useTestStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> <span class="token punctuation">{</span>count<span class="token punctuation">,</span>num<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//对state和getter进行解构赋值</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>increment<span class="token punctuation">}</span> <span class="token operator">=</span> store<span class="token punctuation">;</span> <span class="token comment">//对于actions(function)，需要单独直接进行解构赋值</span>
<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用结构赋值后的函数</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","2.Store.html.vue"]]);export{r as default};
