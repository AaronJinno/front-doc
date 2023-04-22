import{_ as e,P as i,Q as a,a5 as c}from"./framework-3728cbf1.js";const l="/front-doc/img/vue/vue/2-1-1.png",d={},n=c(`<div class="hint-container danger"><p class="hint-container-title">版本迭代</p><p>vue2：在vue2版本时代，vue-cli是基于Webpack的。</p><p>vue3：在vue3版本时代，vue-cli是基于Vite的。</p></div><h2 id="i-vue-cli-简介" tabindex="-1"><a class="header-anchor" href="#i-vue-cli-简介" aria-hidden="true">#</a> Ⅰ. Vue-cli 简介</h2><h4 id="_1-cli是什么" tabindex="-1"><a class="header-anchor" href="#_1-cli是什么" aria-hidden="true">#</a> 1. CLI是什么</h4><p>CLI：Command-Line Interface，命令行界面，俗称脚手架。</p><p>所谓脚手架，就是帮助我们建设好了建造大厦的所需模板，建设者只需往模板里面填入实质内容，即可完成大厦的建设，对于程序开发来说，脚手架使程序员只需要关注业务逻辑的实现上面，我们不需要再关注兼容性问题，不需要再浪费时间在重复的工作上。</p><h4 id="_2-vue-cli-是什么" tabindex="-1"><a class="header-anchor" href="#_2-vue-cli-是什么" aria-hidden="true">#</a> 2. Vue-cli 是什么</h4><p>Vue CLI是一个官方发布的Vue.js项目脚手架，使用vue-cli可以快速的搭建Vue开发环境以及对应的打包配置。</p><p>Vue-cli是运行在NodeJS环境下的脚手架。vue-cli 可以帮我们集成（或者打包）vue核心模块，并将我们的代码转义，压缩。</p><h4 id="_3-为什么要用vue-cli" tabindex="-1"><a class="header-anchor" href="#_3-为什么要用vue-cli" aria-hidden="true">#</a> 3. 为什么要用Vue-cli</h4><p>如果你在开发大型项目, 那么你需要, 并且必然需要使用Vue CLI。</p><p>使用Vue.js开发大型应用时，我们需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试、还有各项配置等事情。如果每个项目都要手动完成这些工作，那无疑效率比较低效，所以通常我们会使用一些脚手架工具来帮助完成这些事情。</p><p>使用Vue-cli可以快速搭建Vue开发环境（包含各项插件），和各项配置（包括webpack或vite）。</p><h4 id="_4-vue-cli与vue-cli项目" tabindex="-1"><a class="header-anchor" href="#_4-vue-cli与vue-cli项目" aria-hidden="true">#</a> 4. Vue-cli与Vue-cli项目</h4><p>在vue2时代是先创建vue-cli，在通过vue命令创建vue项目。</p><p>在vue3时代，常用的做法是通过Vite直接创建vue项目（包含了vue-cli和vite）。</p><h2 id="ii-vite-引入vue-cli" tabindex="-1"><a class="header-anchor" href="#ii-vite-引入vue-cli" aria-hidden="true">#</a> Ⅱ. Vite 引入Vue CLI</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>首先需要安装Node.js，且版本在V16以上。</p><p>这种构建方式，在创建vue-cli的同时，直接创建了项目。</p></div><h4 id="_1-通过vite构建" tabindex="-1"><a class="header-anchor" href="#_1-通过vite构建" aria-hidden="true">#</a> 1. 通过vite构建</h4><p>下面命令会自动创建Vue脚手架，并执行create-vue,，该脚手架会自动依赖vite。</p><p>该脚手架是Vue官方的脚手架。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm create vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>命令解析</strong></p><ul><li>第一步：通过npm全局创建了vue-cli</li><li>第二步：创建完vue-cli后，立即执行vue create，创建了一个vue项目</li></ul><h4 id="_2-项目构建交互" tabindex="-1"><a class="header-anchor" href="#_2-项目构建交互" aria-hidden="true">#</a> 2. 项目构建交互</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述命令引入vue-cli的时候直接创建了项目，所以需要对项目进行一些配置</p></div><p>创建vue脚手架时，会有诸多选项，默认值都是no。<br> 如果不确定是否开启该功能，可以使用默认值，在项目创建后，再开启。</p><figure><img src="`+l+`" alt="2-1-1" tabindex="0" loading="lazy"><figcaption>2-1-1</figcaption></figure><ul><li>Project name：项目名称</li><li>TypeScript：Typer Script 支持</li><li>JSX：JSX支持，一种JavaScript的语法扩展。</li><li>Vue Router：路由组件</li><li>Pinia：状态管理，Vuex的替代品</li><li>Vitest：一种测试框架</li><li>Cypress：E2E测试工具</li><li>ESLint：代码格式规范检查</li><li>Prettier：前端代码格式化工具</li></ul><h4 id="_3-查看安装" tabindex="-1"><a class="header-anchor" href="#_3-查看安装" aria-hidden="true">#</a> 3. 查看安装</h4><p>这里查看的就是npm create vue@latest命令第一步全局安装的vue/cli版本。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>vue -V //显示的是vue cli的版本
@vue/cli 4.5.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-vue-cli升级" tabindex="-1"><a class="header-anchor" href="#_4-vue-cli升级" aria-hidden="true">#</a> 4. Vue CLI升级</h4><p>注意：这里指的是小版本的升级，大版本可能有兼容问题</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm update -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),r=[n];function u(t,s){return i(),a("div",null,r)}const p=e(d,[["render",u],["__file","2-1.引入vue-cli.html.vue"]]);export{p as default};
