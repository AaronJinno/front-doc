import{_ as n,o as i,c as e,e as s}from"./app-c07941ad.js";const d={},l=s(`<p>一个 uni-app 工程，就是一个 Vue 项目。</p><h4 id="_1-目录结构-简洁版" tabindex="-1"><a class="header-anchor" href="#_1-目录结构-简洁版" aria-hidden="true">#</a> 1. 目录结构-简洁版</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌─uniCloud              云空间目录
│─components            符合vue组件规范的uni-app组件目录
│  └─componentA 
│      └─componentA.vue    符合/components/组件名称/组件名称.vue;符合easycom规范
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules           存放[uni_module]
├─unpackage             存放运行或发行的编译结果
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
├─pages.json            配置页面路由、导航条、选项卡等页面类信息
└─uni.scss              这里是uni-app内置的常用样式变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-目录结构-完全版" tabindex="-1"><a class="header-anchor" href="#_2-目录结构-完全版" aria-hidden="true">#</a> 2. 目录结构-完全版</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌─uniCloud              云空间目录
│  ├─cloudfunction      云函数目录
│  └─database           clouddb目录
│─components            符合vue组件规范的uni-app组件目录
│  └─componentA 
│      └─componentA.vue    符合/components/组件名称/组件名称.vue;符合easycom规范
├─common                公共文件目录，如:icons.css
├─db_init               数据库初始化文件目录
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                强制存放应用引用的本地静态资源（如图片、视频等）的目录，
├─store                 vuex/pinia 目录
├─uni_modules           存放[uni_module](/uni_modules)。
├─unpackage             非工程代码，一般存放运行或发行的编译结果

############# 以下是兼容性的目录和文件 #############

├─platforms             存放各平台专用页面的目录
├─utssdk                存放uts文件
├─nativeplugins         App原生语言插件
├─nativeResources       App端原生资源目录
│  └─android            Android原生资源目录
├─hybrid                App端存放本地html文件的目录
├─wxcomponents          存放小程序组件的目录
├─AndroidManifest.xml   Android原生应用清单文件

############# 以下是全局文件 #############
├─.gitignore 
├─app.config.js         全局项目配置
├─main.js               Vue初始化入口文件
├─index.html            vue入口容器
├─package.json          nodejs包描述文件,这里记录的是云函数依赖
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
├─pages.json            配置页面路由、导航条、选项卡等页面类信息
├─template.h5.html
└─uni.scss              这里是uni-app内置的常用样式变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-static目录注意事项" tabindex="-1"><a class="header-anchor" href="#_3-static目录注意事项" aria-hidden="true">#</a> 3. static目录注意事项</h4><ul><li>编译到任意平台时，static 目录下除不满足条件编译的文件，会直接复制到最终的打包目录，不会打包编译。非 static 目录下的文件（vue、js、css 等）只有被引用时，才会被打包编译。</li><li>css、less/scss 等资源不要放在 static 目录下，建议这些公用的资源放在自建的 common 目录下。</li></ul>`,7),a=[l];function v(c,u){return i(),e("div",null,a)}const m=n(d,[["render",v],["__file","1-4.目录结构.html.vue"]]);export{m as default};
