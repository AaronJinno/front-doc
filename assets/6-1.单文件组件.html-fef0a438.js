import{_ as e,o as l,c as t,e as c}from"./app-ba294a04.js";const i={},a=c('<h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><p><code>.vue</code>文件，称为单文件组件(即 <code>*.vue</code> 文件，英文 Single-File Component，简称 SFC)，是Vue.js自定义的一种文件格式，一个<code>.vue</code>文件就是一个单独的组件，在文件内封装了组件相关的代码：html、css、js。</p><ul><li><code>&lt;template&gt;</code>：html</li><li><code>&lt;script&gt;</code>：JS</li><li><code>&lt;style&gt;</code>：CSS</li></ul><p>使用 SFC 必须使用构建工具</p><h4 id="_2-为什么要使用sfc" tabindex="-1"><a class="header-anchor" href="#_2-为什么要使用sfc" aria-hidden="true">#</a> 2. 为什么要使用SFC</h4><ul><li>使用熟悉的 HTML、CSS 和 JavaScript 语法编写模块化的组件</li><li>让本来就强相关的关注点自然内聚</li><li>预编译模板，避免运行时的编译开销</li><li>组件作用域的 CSS</li><li>在使用组合式 API 时语法更简单</li><li>通过交叉分析模板和逻辑代码能进行更多编译时优化</li><li>更好的 IDE 支持，提供自动补全和对模板中表达式的类型检查</li><li>开箱即用的模块热更新 (HMR) 支持</li></ul><h4 id="_3-sfc是如何工作的" tabindex="-1"><a class="header-anchor" href="#_3-sfc是如何工作的" aria-hidden="true">#</a> 3. SFC是如何工作的</h4><p>Vue SFC 是一个框架指定的文件格式，因此必须交由 @vue/compiler-sfc 编译为标准的 JavaScript 和 CSS，一个编译后的 SFC 是一个标准的 JavaScript(ES) 模块，这也意味着在构建配置正确的前提下，可以像导入其他 ES 模块一样导入 SFC。</p><p><strong>style</strong></p><p>SFC 中的 <code>&lt;style&gt;</code> 标签一般会在开发时注入成原生的 <code>&lt;style&gt;</code> 标签以支持热更新。生产环境下它们会被抽取、合并成单独的 CSS 文件。</p>',10),o=[a];function d(s,r){return l(),t("div",null,o)}const n=e(i,[["render",d],["__file","6-1.单文件组件.html.vue"]]);export{n as default};
