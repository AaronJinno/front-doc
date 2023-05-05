import{_ as n,P as s,Q as a,a5 as p}from"./framework-3728cbf1.js";const t={},o=p(`<h2 id="i-mainfest" tabindex="-1"><a class="header-anchor" href="#i-mainfest" aria-hidden="true">#</a> Ⅰ. mainfest</h2><h4 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h4><ul><li>manifest.json 文件是应用的配置文件，用于指定应用的名称、图标、权限等。</li><li>HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。</li><li>该文件是个JSON文件，不过在HBuilder中进行了优化。</li></ul><h4 id="_2-配置项" tabindex="-1"><a class="header-anchor" href="#_2-配置项" aria-hidden="true">#</a> 2. 配置项</h4><p>配置项分为全局配置和平台配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;uni-test&quot;</span><span class="token punctuation">,</span> <span class="token comment">//应用名称</span>
    <span class="token property">&quot;appid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;__UNI__50BF561&quot;</span><span class="token punctuation">,</span><span class="token comment">//应用标识,新建 uni-app 项目时，DCloud 云端分配的id</span>
    <span class="token property">&quot;description&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token comment">//应用描述</span>
    <span class="token property">&quot;versionName&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">//版本名称，例如：1.0.0</span>
    <span class="token property">&quot;versionCode&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">,</span><span class="token comment">//版本号，</span>
    <span class="token property">&quot;transformPx&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//是否转换项目的px，为true时将px转换为rpx</span>
    <span class="token property">&quot;networkTimeout&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//各类网络请求的超时时间，单位均为毫秒。</span>
        <span class="token property">&quot;request&quot;</span><span class="token operator">:</span><span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">//uni.request 的超时时间，单位毫秒。</span>
        <span class="token property">&quot;uploadFile&quot;</span><span class="token operator">:</span><span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">//uni.uploadFile 的超时时间，单位毫秒。</span>
        <span class="token property">&quot;downloadFile&quot;</span><span class="token operator">:</span><span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">//uni.downloadFile 的超时时间，单位毫秒。</span>
        <span class="token property">&quot;connectSocket&quot;</span><span class="token operator">:</span><span class="token number">60000</span> <span class="token comment">//uni.connectSocket 的超时时间，单位毫秒。</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uniStatistics&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否开启uni统计配置项,默认true开启</span>
    <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否开启 debug 模式，开启后调试信息以 info 的形式给出</span>
    
    <span class="token comment">//##########以下是个平台的特有配置##########</span>
    <span class="token property">&quot;app-plus&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//App 特有配置</span>
    <span class="token property">&quot;h5&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//H5 特有配置</span>
    <span class="token property">&quot;quickapp&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 快应用特有配置,暂不支持</span>
    <span class="token property">&quot;mp-weixin&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 微信小程序特有配置</span>
    <span class="token property">&quot;mp-alipay&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 支付宝小程序特有配置</span>
    <span class="token property">&quot;mp-baidu&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 百度小程序特有配置</span>
    <span class="token property">&quot;mp-toutiao&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 字节跳动小程序特有配置</span>
    <span class="token property">&quot;mp-lark&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// 飞书小程序特有配置</span>
    <span class="token property">&quot;mp-qq&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">// qq小程序特有配置</span>
    <span class="token property">&quot;mp-kuaishou&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//快手小程序特有配置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-appid" tabindex="-1"><a class="header-anchor" href="#_3-appid" aria-hidden="true">#</a> 3. appid</h4><p>uni-app 的 appid 由 DCloud 云端分配，主要用于 DCloud 相关的云服务。</p><p>注意区分 uni-app 的 appid 与微信小程序、iOS 等其它平台分配的 appid，以及第三方 SDK 的 appid。</p><h2 id="ii-mainfest平台配置" tabindex="-1"><a class="header-anchor" href="#ii-mainfest平台配置" aria-hidden="true">#</a> Ⅱ. mainfest平台配置</h2><h4 id="_1-h5" tabindex="-1"><a class="header-anchor" href="#_1-h5" aria-hidden="true">#</a> 1. h5</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;h5&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token comment">// 页面标题，默认使用 manifest.json 的 name</span>
        <span class="token property">&quot;template&quot;</span><span class="token operator">:</span><span class="token string">&quot;template.h5.html&quot;</span><span class="token punctuation">,</span><span class="token comment">//index.html模板路径，相对于根目录,用于自定义模板</span>
        <span class="token property">&quot;router&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;history&quot;</span><span class="token punctuation">,</span> <span class="token comment">//路由跳转模式，支持 hash、history     </span>
            <span class="token property">&quot;base&quot;</span><span class="token operator">:</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//应用基础路径</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;async&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;loading&quot;</span><span class="token operator">:</span><span class="token string">&quot;AsyncLoading&quot;</span><span class="token punctuation">,</span><span class="token comment">//页面 js 加载时使用的组件（需注册为全局组件）</span>
            <span class="token property">&quot;error&quot;</span><span class="token operator">:</span><span class="token string">&quot;AsyncError&quot;</span><span class="token punctuation">,</span><span class="token comment">//页面 js 加载失败时使用的组件（需注册为全局组件）</span>
            <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span><span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span><span class="token comment">//展示 loading 加载组件的延时时间,如果在该时间内加载完，就不显示loading</span>
            <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span><span class="token string">&quot;60000&quot;</span><span class="token punctuation">,</span><span class="token comment">//页面 js 加载超时时间（超时后展示 error 对应的组件）</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;devServer&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//对应vue3中vite的server</span>
            <span class="token property">&quot;https&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//是否启用 https 协议</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">,</span><span class="token comment">//前端开发服务端口</span>
            <span class="token property">&quot;disableHostCheck&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// 禁用 Host 检查                  </span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;publicPath&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://www.cdn.com/h5/&quot;</span><span class="token punctuation">,</span><span class="token comment">//配置 publicPath 为 cdn 资源地址前缀</span>
        <span class="token property">&quot;sdkConfigs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//三方SDK配置</span>
            <span class="token property">&quot;maps&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//地图或位置相关SDK                     </span>
                <span class="token property">&quot;amap&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//高德地图</span>
                    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span><span class="token string">&quot;23421312&quot;</span><span class="token punctuation">,</span> <span class="token comment">//高德地图秘钥</span>
                    <span class="token property">&quot;securityJsCode&quot;</span><span class="token operator">:</span><span class="token string">&quot;234wef13&quot;</span><span class="token punctuation">,</span> <span class="token comment">//高德地图安全密钥</span>
                    <span class="token property">&quot;serviceHost&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare&quot;</span>                
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>        
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;optimization&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//资源优化</span>
            <span class="token property">&quot;prefetch&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//资源预取</span>
            <span class="token property">&quot;preload&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//资源预加载</span>
            <span class="token property">&quot;treeShaking&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//摇树优化，根据项目需求，动态打包框架所需的组件及API</span>
                <span class="token property">&quot;enable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//不启动树摇</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uniStatistics&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//通全局配置，是否开启uni统计</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-mp-weixin" tabindex="-1"><a class="header-anchor" href="#_2-mp-weixin" aria-hidden="true">#</a> 2. mp-weixin</h4><p>这里面可以放类似微信中app.json中的配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;mp-weixin&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span><span class="token string">&quot;4616523&quot;</span><span class="token punctuation">,</span> <span class="token comment">//微信小程序的AppID</span>
        <span class="token property">&quot;setting&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//微信小程序项目设置</span>
            <span class="token property">&quot;urlCheck&quot;</span><span class="token operator">:</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span><span class="token comment">//是否检查安全域名和 TLS 版本</span>
            <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//ES6 转 ES5,手势组件会强制开启 ES6 转 ES5</span>
            <span class="token property">&quot;postcss&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//上传代码时样式是否自动补全</span>
            <span class="token property">&quot;minified&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//上传代码时是否自动压缩                                     </span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;functionlPages&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//微信小程序是否启用插件功能页，默认关闭</span>
        <span class="token property">&quot;requiredBackgroundModes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//微信小程序需要在后台使用的能力,与app.json中的一样</span>
        <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//使用到的插件</span>
            <span class="token comment">//与app.json中的一样</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resizable&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//在iPad上小程序是否支持屏幕旋转，默认关闭</span>
        <span class="token property">&quot;navigateToMiniProgramAppIdList&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//需要跳转的小程序列表，与app.json中的一样</span>
        <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//微信小程序接口权限相关设置</span>
            <span class="token comment">//与app.json中的一样</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;optimization&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//对微信小程序的优化配置</span>
            <span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否开启分包优化                    </span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cloudfunctionRoot&quot;</span><span class="token operator">:</span><span class="token string">&quot;cloudfunctions/&quot;</span> <span class="token comment">//配置云开发目录,使用微信小程序的云开发,还需要其他配置</span>
        <span class="token property">&quot;requiredPrivateInfos&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//地理位置相关接口。</span>
        <span class="token property">&quot;lazyCodeLoading&quot;</span><span class="token operator">:</span><span class="token string">&quot;requiredComponnets&quot;</span><span class="token punctuation">,</span><span class="token comment">//开启小程序按需注入特性</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-mp-toutiao" tabindex="-1"><a class="header-anchor" href="#_3-mp-toutiao" aria-hidden="true">#</a> 3. mp-toutiao</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;mp-toutiao&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span><span class="token string">&quot;23e232&quot;</span><span class="token punctuation">,</span><span class="token comment">//字节跳动小程序的 AppID</span>
        <span class="token property">&quot;setting&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//字节跳动小程序项目设置</span>
             <span class="token property">&quot;urlCheck&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">// 是否检查安全域名和 TLS 版本</span>
             <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//ES6 转 ES5 </span>
             <span class="token property">&quot;postcss&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 上传代码时样式是否自动补全</span>
             <span class="token property">&quot;minified&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 上传代码时是否自动压缩   </span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;navigateToMiniProgramAppIdList&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//需要跳转的小程序列表</span>
        <span class="token property">&quot;uniStatistics&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//字节跳动小程序是否开启 uni 统计，配置方法同全局配置</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-mp-kuaishou" tabindex="-1"><a class="header-anchor" href="#_4-mp-kuaishou" aria-hidden="true">#</a> 4. mp-kuaishou</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;mp-kuaishou&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span><span class="token string">&quot;232cd2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;optimization&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//对快手小程序的优化配置</span>
            <span class="token property">&quot;subPackages&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否开启分包优化                    </span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>         
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-自定义小程序项目配置" tabindex="-1"><a class="header-anchor" href="#_5-自定义小程序项目配置" aria-hidden="true">#</a> 5. 自定义小程序项目配置</h4><p>支持项目根目录(cli 项目为 src 目录)下创建配置文件自定义小程序项目配置</p><ul><li>project.config.json：微信/QQ</li><li>project.ttt.json：字节跳动</li><li>project.ks.json：快手</li></ul><h4 id="_6-分包优化" tabindex="-1"><a class="header-anchor" href="#_6-分包优化" aria-hidden="true">#</a> 6. 分包优化</h4><p>在对应的平台（只支持mp-weixin、mp-qq、mp-baidu、mp-toutiao、mp-kuaishou）开启分包优化后，就可以对文件进行分包了。</p><ul><li>静态文件：分包下支持 static 等静态资源拷贝，即分包目录内放置的静态资源不会被打包到主包中，也不可在主包中使用 j- s文件：当某个 js 仅被一个分包引用时，该 js 会被打包到该分包内，否则仍打到主包（即被主包引用，或被超过 1 个分包引用）</li><li>自定义组件：若某个自定义组件仅被一个分包引用时，且未放入到分包内，编译时会输出提示信息</li></ul><h4 id="_7-app配置" tabindex="-1"><a class="header-anchor" href="#_7-app配置" aria-hidden="true">#</a> 7. APP配置</h4><p>详见：APP专题。</p>`,27),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","3-3.mainfest.json.html.vue"]]);export{r as default};
