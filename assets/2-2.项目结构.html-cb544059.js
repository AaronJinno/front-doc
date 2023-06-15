import{_ as n,o as s,c as a,e}from"./app-277eb25d.js";const i={},c=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里采用的是JS而非TS，因此缺少了TS相关的目录和文件。</p></div><h2 id="i-默认目录结构" tabindex="-1"><a class="header-anchor" href="#i-默认目录结构" aria-hidden="true">#</a> Ⅰ. 默认目录结构</h2><h4 id="_1-无任何依赖" tabindex="-1"><a class="header-anchor" href="#_1-无任何依赖" aria-hidden="true">#</a> 1. 无任何依赖</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── dist     <span class="token comment">//打包后的目录</span>
├── node_modules   <span class="token comment">//依赖目录  </span>
├── <span class="token keyword">public</span>  <span class="token comment">//静态资源</span>
│   └── favicon<span class="token punctuation">.</span>ico  <span class="token comment">//favicon图标</span>
├── src   <span class="token comment">//源代码</span>
├── index<span class="token punctuation">.</span>html   <span class="token comment">//vite将项目入口放到了public外面    </span>
├── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js  <span class="token comment">//vue-cli 配置,vite配置非Webpack            </span>
└── <span class="token keyword">package</span><span class="token punctuation">.</span>json  <span class="token comment">//package.json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-包含依赖" tabindex="-1"><a class="header-anchor" href="#_2-包含依赖" aria-hidden="true">#</a> 2. 包含依赖</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── cypress   <span class="token comment">//E2E测试目录</span>
├── dist     <span class="token comment">//打包后的目录</span>
├── node_modules   <span class="token comment">//依赖目录  </span>
├── <span class="token keyword">public</span>  <span class="token comment">//静态资源</span>
│   └── favicon<span class="token punctuation">.</span>ico  <span class="token comment">//favicon图标</span>
├── src   <span class="token comment">//源代码</span>
│   │── assets  <span class="token comment">//静态资源目录，包括JS和CSS文件</span>
│   │── components  <span class="token comment">//项目组件目录</span>
│   │── router  <span class="token comment">//路由目录</span>
│   │── stores  <span class="token comment">//pinia目录</span>
│   │── views  <span class="token comment">//views目录</span>
│   └── index<span class="token punctuation">.</span>html  <span class="token comment">//html模板</span>
├── <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>cjs   <span class="token comment">//代码规范检查的配置</span>
├── <span class="token punctuation">.</span>prettierrc<span class="token punctuation">.</span>json   <span class="token comment">//前端代码格式化的配置文件</span>
├── cypress<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js   <span class="token comment">//cypress测试工具的配置文件</span>
├── index<span class="token punctuation">.</span>html   <span class="token comment">//vite将项目入口放到了public外面   </span>
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json  <span class="token comment">//package.json          </span>
└── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js  <span class="token comment">//vue-cli 配置,vite配置非Webpack   </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-目录解析" tabindex="-1"><a class="header-anchor" href="#_3-目录解析" aria-hidden="true">#</a> 3. 目录解析</h4><p>很多配置项都隐藏了，需要在node_modules中找。</p><p>想改的话，就在vite.config.js中进行覆盖。</p><h2 id="ii-真实项目目录" tabindex="-1"><a class="header-anchor" href="#ii-真实项目目录" aria-hidden="true">#</a> Ⅱ. 真实项目目录</h2><h4 id="_1-一级目录" tabindex="-1"><a class="header-anchor" href="#_1-一级目录" aria-hidden="true">#</a> 1. 一级目录</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── dist                       # 打包后的目录
├── mock                       # 项目mock 模拟数据<span class="token punctuation">[</span>可选<span class="token punctuation">]</span>
├── plop<span class="token operator">-</span>templates             # plop模板
├── <span class="token keyword">public</span>                     # 静态资源<span class="token punctuation">,</span>不会被压缩合并
│   └── favicon<span class="token punctuation">.</span>ico  #favicon图标
├── src                        # 源代码
├── tests                      # 单元测试
├── <span class="token punctuation">.</span>env<span class="token punctuation">.</span>development           # 环境变量<span class="token operator">-</span>开发版
├── <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production            # 环境变量<span class="token operator">-</span>生产版
├── <span class="token punctuation">.</span>eslintrc<span class="token punctuation">.</span>js               # eslint 配置项
├── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js             # vue<span class="token operator">-</span>cli 配置
└── <span class="token keyword">package</span><span class="token punctuation">.</span>json               # <span class="token keyword">package</span><span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-src次级目录" tabindex="-1"><a class="header-anchor" href="#_2-src次级目录" aria-hidden="true">#</a> 2. src次级目录</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── api                    # 所有请求的数据
├── assets                 # 主题 字体等静态资源
├── components             # 全局公用组件
├── directive              # 全局指令
├── filters                # 全局 filter
├── icons                  # 项目所有 svg icons
├── lang                   # 国际化 language
├── layout                 # 全局 layout
├── router                 # 路由
│   ├── modules            # 各模块的路由
│   ├── index<span class="token punctuation">.</span>js           # 路由总入口 
├── store                  # 全局 store管理
│   ├── modules            # 各模块的store
│   ├── getters  
│   ├── index<span class="token punctuation">.</span>js           # store总入口
├── styles                 # 全局样式<span class="token punctuation">[</span>sass<span class="token punctuation">]</span>
├── utils                  # 全局公用方法<span class="token punctuation">[</span>包括封装的第三方包<span class="token punctuation">]</span>
├── vendor                 # 公用vendor
├── views                  # views 所有页面，有些页面有自己单独的组件
├── App<span class="token punctuation">.</span>vue                # 入口页面
├── main<span class="token punctuation">.</span>js                # 入口文件 加载组件 初始化等
└── permission<span class="token punctuation">.</span>js          # 权限管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[c];function l(p,o){return s(),a("div",null,t)}const u=n(i,[["render",l],["__file","2-2.项目结构.html.vue"]]);export{u as default};
