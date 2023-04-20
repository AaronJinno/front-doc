import{_ as n,P as s,Q as a,a5 as t}from"./framework-3728cbf1.js";const p="/front-doc/img/vue/vue/1-2-1.png",e={},i=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>Vue3之前 API只有一种风格，Vue3后，Vue出现了两种代码风格。</p></div><h4 id="_1-风格介绍" tabindex="-1"><a class="header-anchor" href="#_1-风格介绍" aria-hidden="true">#</a> 1. 风格介绍</h4><p>Vue 的组件可以按两种不同的风格书写：选项式 API 和组合式 API。</p><p>它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式 API 是在组合式 API 的基础上实现的。关于 Vue 的基础概念和知识在它们之间都是通用的。</p><ul><li>选项式：简单的项目，不采用构建工具，复杂度较低的场景中，推荐采用选项式。 <ul><li>Vue2.0默认就是该API风格</li></ul></li><li>组合式：用Vue构建完整的单页应用，推荐采用组合式API+单文件组件 <ul><li>Vue3.0新增，且<strong>推荐使用</strong></li></ul></li></ul><h4 id="_2-选项式-api-options-api" tabindex="-1"><a class="header-anchor" href="#_2-选项式-api-options-api" aria-hidden="true">#</a> 2. 选项式 API（Options API）</h4><p>用包含多个选项的对象来描述组件的逻辑。<br> 这些所定义的属性（选项）都会暴露在函数内部的this上，她会指向当前的组件实例。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// data() 返回的属性将会成为响应式的状态</span>
  <span class="token comment">// 并且暴露在 \`this\` 上</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// methods 是一些用来更改状态与触发更新的函数</span>
  <span class="token comment">// 它们可以在模板中作为事件监听器绑定</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 生命周期钩子会在组件生命周期的各个不同阶段被调用</span>
  <span class="token comment">// 例如这个函数就会在组件挂载完成后被调用</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The initial count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Count is: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-组合式-api-composition-api" tabindex="-1"><a class="header-anchor" href="#_3-组合式-api-composition-api" aria-hidden="true">#</a> 3. 组合式 API（Composition API）</h4><p>使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 <code>&lt;script setup&gt;</code>搭配使用。这个 setup attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。</p><p>下面是使用了组合式 API 与 <code>&lt;script setup&gt;</code> 改造后和上面完全一样的组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 响应式状态</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// 用来修改状态、触发更新的函数</span>
<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value<span class="token operator">++</span>
<span class="token punctuation">}</span>

<span class="token comment">// 生命周期钩子</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The initial count is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>increment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Count is: {{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-组合式api解读" tabindex="-1"><a class="header-anchor" href="#_4-组合式api解读" aria-hidden="true">#</a> 4. 组合式API解读</h4><p>组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。</p><p>主要涵盖了以下方面的 API：</p><ul><li>响应式API：如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。</li><li>生命周期钩子：如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。</li><li>依赖注入：如 provide() 和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。</li></ul><p>组合式 API 基本上都会配合 <code>&lt;script setup&gt;</code> 语法在单文件组件中使用。虽然这套 API 的风格是基于函数的组合，但组合式 API 并不是函数式编程。组合式 API 是以 Vue 中数据可变的、细粒度的响应性系统为基础的，而函数式编程通常强调数据不可变。</p><h4 id="_5-组合式api的优点" tabindex="-1"><a class="header-anchor" href="#_5-组合式api的优点" aria-hidden="true">#</a> 5. 组合式API的优点</h4><h5 id="_5-1-更好的逻辑复用" tabindex="-1"><a class="header-anchor" href="#_5-1-更好的逻辑复用" aria-hidden="true">#</a> 5.1 更好的逻辑复用</h5><p>通过组合函数来实现更加简洁高效的逻辑复用，解决了选项式API中Mixins的所有缺陷。</p><h5 id="_5-2-更灵活的代码组织" tabindex="-1"><a class="header-anchor" href="#_5-2-更灵活的代码组织" aria-hidden="true">#</a> 5.2 更灵活的代码组织</h5><p>选项式API虽然结构清晰，但是当逻辑点过多时，会变得非常臃肿，且不易阅读。因为每个选项的作用和位置是固定的，当逻辑点过多时，要读懂其中一个逻辑关注点，需要反复上下滚动，将多个选项中的代码拼在一起理解。 而组合式API，在书写时，可以将同一个逻辑关注点的代码写在一起，对于大项目方便维护查看。</p><p>如下图示每个颜色代表一个逻辑：</p><figure><img src="`+p+'" alt="1-2-1" tabindex="0" loading="lazy"><figcaption>1-2-1</figcaption></figure>',24),c=[i];function o(l,u){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","1-2.API风格.html.vue"]]);export{d as default};
