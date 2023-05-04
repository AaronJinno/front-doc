import{_ as n,P as a,Q as s,a5 as e}from"./framework-3728cbf1.js";const t="/front-doc/img/vue/vue/7-2-1.jpg",i={},l=e('<h2 id="i-vue的声明周期" tabindex="-1"><a class="header-anchor" href="#i-vue的声明周期" aria-hidden="true">#</a> Ⅰ. Vue的声明周期</h2><p>Vue从声明到销毁的全过程如下：</p><figure><img src="'+t+`" alt="7-2-1" tabindex="0" loading="lazy"><figcaption>7-2-1</figcaption></figure><h2 id="ii-钩子列表" tabindex="-1"><a class="header-anchor" href="#ii-钩子列表" aria-hidden="true">#</a> Ⅱ. 钩子列表</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>组合式API和选项式API的钩子名是不一样的。</p></div><h4 id="_1-创建" tabindex="-1"><a class="header-anchor" href="#_1-创建" aria-hidden="true">#</a> 1. 创建</h4><ul><li>组合式API <ul><li>setup() ：会在所有选项式 API 钩子之前调用 <ul><li>组合式API关于创建的钩子，只有setup</li><li>setup语法糖：<code>&lt;script setup&gt;&lt;/script&gt;</code>标签间的代码已经相当于是setup()函数间的代码了。</li></ul></li></ul></li><li>选项式API <ul><li>BeforeCreate：创建前，在Vue实例创建完成之前的钩子函数，此钩子函数不能访问组件中的data和ref</li><li>created：创建后，该钩子在组件创建完成后被立即调用，可操作data，但无法操作ref和$el。 <ul><li>用处：对页面数据的初始化请求，结束loading。</li></ul></li></ul></li></ul><h4 id="_2-挂载" tabindex="-1"><a class="header-anchor" href="#_2-挂载" aria-hidden="true">#</a> 2. 挂载</h4><ul><li>组合式API <ul><li>onBeforeMount()：注册一个钩子，在组件被挂载之前被调用。</li><li>onMounted()：注册一个回调函数，在组件挂载完成后执行。</li></ul></li><li>选项式API <ul><li>BeforeMount：挂载前，该钩子在组件挂载前调用，该阶段HTML未渲染出，ref不可操作，render手册被调用，可以访问数据，虚拟都没已经存在。</li><li>Mounted：挂载后，该钩子在页面完成挂载后执行，此时el被vm.$el替换，可以操作ref,filter也是在这里生效。</li></ul></li></ul><h4 id="_3-更新" tabindex="-1"><a class="header-anchor" href="#_3-更新" aria-hidden="true">#</a> 3. 更新</h4><ul><li>组合式API <ul><li>onBeforeUpdate()：注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。</li><li>onUpdated()：注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。</li></ul></li><li>选项式API <ul><li>BeforeUpdate：数据更新前。该钩子在数据更新时调用，这里适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。</li><li>Updated：数据更新后，该钩子会在数据更新后（DOM重新渲染）后调用，在数据更新后做一些处理。watch是监控特定数据的变化，而updated是监控组件里所有数据的变化。</li></ul></li></ul><h4 id="_4-、卸载" tabindex="-1"><a class="header-anchor" href="#_4-、卸载" aria-hidden="true">#</a> 4. 、卸载</h4><ul><li>组合式API <ul><li>onBeforeUnmount ：组件卸载前触发</li><li>onUnmounted：组件卸载时触发</li></ul></li></ul><h4 id="_5-销毁" tabindex="-1"><a class="header-anchor" href="#_5-销毁" aria-hidden="true">#</a> 5. 销毁</h4><ul><li>选项式API <ul><li>BeforeDestroy：销毁前，该函数在实例销毁之前调用，这里的 ref 依旧可以操作，实例仍然完全可用，可以在这里做清除定时器的操作，防止内存泄漏。</li><li>Destroy：销毁后，该函数在组件销毁的时候执行，即实例销毁后调用，这里的 ref 不存在。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。</li></ul></li></ul><h2 id="iii-使用钩子" tabindex="-1"><a class="header-anchor" href="#iii-使用钩子" aria-hidden="true">#</a> Ⅲ. 使用钩子</h2><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。</p><p>在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。</p><h4 id="_2-注册周期钩子" tabindex="-1"><a class="header-anchor" href="#_2-注册周期钩子" aria-hidden="true">#</a> 2. 注册周期钩子</h4><p>以onMounted钩子为例：该钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
 

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">the component is now mounted.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
===============选项式API=============
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">the component is now mounted.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-钩子的调用" tabindex="-1"><a class="header-anchor" href="#_3-钩子的调用" aria-hidden="true">#</a> 3. 钩子的调用</h4><p>以onMounted为例：当调用 onMounted 时，Vue 会自动将回调函数注册到当前正被初始化的组件实例上。</p><p>这意味着这些钩子应当在组件初始化时被同步注册。</p>`,25),p=[l];function o(c,u){return a(),s("div",null,p)}const d=n(i,[["render",o],["__file","7-2.生命周期钩子.html.vue"]]);export{d as default};
