import{_ as n,o as s,c as a,e as t}from"./app-fb2cd4f5.js";const p="/front-doc/img/applet/uniapp/3-2-1.jpg",o={},e=t(`<h2 id="i-pages-json" tabindex="-1"><a class="header-anchor" href="#i-pages-json" aria-hidden="true">#</a> Ⅰ. pages.json</h2><ul><li>位置：根目录下</li><li>作用：对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等 <ul><li>navigator组件导航是，目标页面必须是在pages.json中注册的内部页面。</li><li>应用底部的tabbar对应的页面必须是在pages.json中注册的内部页面。</li></ul></li></ul><p>以下仅介绍常用配置项，详情见文档。</p><h4 id="_1-pages" tabindex="-1"><a class="header-anchor" href="#_1-pages" aria-hidden="true">#</a> 1. pages</h4><p>uni-app 通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token comment">//配置页面路径</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//配置页面窗口表现</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span><span class="token comment">//设置页面标题文字</span>
                <span class="token property">&quot;enablePullDownRefresh&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token comment">//开启下拉刷新</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/API/api&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/view/vindex&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-1-tips" tabindex="-1"><a class="header-anchor" href="#_1-1-tips" aria-hidden="true">#</a> 1.1 TIPs</h5><ul><li>pages节点的第一项为应用入口页（即首页）</li><li>应用中新增/减少页面，都需要对 pages 数组进行修改</li><li>文件名不需要写后缀，框架会自动寻找路径下的页面资源</li></ul><h5 id="_1-2-目录结构示例" tabindex="-1"><a class="header-anchor" href="#_1-2-目录结构示例" aria-hidden="true">#</a> 1.2 目录结构示例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌─pages //根目录下的目录,存放页面的
│  ├─index //index页面的目录
│  │  └─index.vue //index页面文件 //path:&quot;pages/index/index&quot;
│  └─login
│     └─login.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-3-style" tabindex="-1"><a class="header-anchor" href="#_1-3-style" aria-hidden="true">#</a> 1.3 style</h5><p>用于设置每个页面的状态栏、导航条、标题、窗口背景色等，这些配置项会覆盖 globalStyle 中相同的配置项。</p><h4 id="_2-condition" tabindex="-1"><a class="header-anchor" href="#_2-condition" aria-hidden="true">#</a> 2. condition</h4><p>启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。</p><p>PS：微信开发者工具里需要手动改变编译模式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//当前激活的模式（list 的索引项）</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">//启动模式列表</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token comment">//启动模式名称</span>
                <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/view/index&quot;</span><span class="token punctuation">,</span> <span class="token comment">//启动页面路径，必选</span>
                <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;interval=4000&amp;autoplay=false&quot;</span> <span class="token comment">//启动参数,可在页面的 onLoad 函数里获得</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/switch/switch&quot;</span>             
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-globalstyle" tabindex="-1"><a class="header-anchor" href="#_3-globalstyle" aria-hidden="true">#</a> 3. globalStyle</h4><p>全局配置：用于设置应用的状态栏、导航条、标题、窗口背景色等。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token comment">//导航栏标题颜色及状态栏前景颜色，仅支持 black/white</span>
        <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;演示&quot;</span><span class="token punctuation">,</span> <span class="token comment">//导航栏标题文字内容</span>
        <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span><span class="token punctuation">,</span> <span class="token comment">//导航栏背景颜色（同状态栏背景色）</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span><span class="token punctuation">,</span> <span class="token comment">//下拉显示出来的窗口的背景色</span>
        <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//引用小程序组件</span>
            <span class="token property">&quot;collapse-tree-item&quot;</span><span class="token operator">:</span><span class="token string">&quot;/components/collapse-tree-item&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;renderingMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;seperated&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 仅微信小程序，webrtc 无法正常时尝试强制关闭同层渲染</span>
        <span class="token property">&quot;pageOrientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portrait&quot;</span><span class="token punctuation">,</span> <span class="token comment">//横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape</span>
        <span class="token property">&quot;rpxCalcMaxDeviceWidth&quot;</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span><span class="token comment">//rpx支持的最大设备宽度</span>
        <span class="token property">&quot;rpxCalcBaseDeviceWidth&quot;</span><span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>
        <span class="token comment">//rpx使用的基准设备宽度</span>
        <span class="token property">&quot;rpxCalcIncludeWidth&quot;</span><span class="token operator">:</span> <span class="token number">750</span> <span class="token comment">//rpx 计算特殊处理的值，始终按实际的设备宽度计算</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-tabbar" tabindex="-1"><a class="header-anchor" href="#_4-tabbar" aria-hidden="true">#</a> 4. tabBar</h4><p>对于多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#7A7E83&quot;</span><span class="token punctuation">,</span> <span class="token comment">//tab 上的文字默认颜色</span>
        <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3cc51f&quot;</span><span class="token punctuation">,</span> <span class="token comment">//tab 上的文字选中时的颜色</span>
        <span class="token property">&quot;borderStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span> <span class="token comment">//tabbar上边框的颜色，可选值 black/white，也支持其他颜色值</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span><span class="token comment">//tab 的背景色</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//tabBar 默认高度</span>
        <span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//文字默认大小</span>
        <span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//图标默认宽度（高度等比例缩放）</span>
        <span class="token property">&quot;spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3px&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//图标和文字的间距</span>
        <span class="token property">&quot;iconfontSrc&quot;</span><span class="token operator">:</span><span class="token string">&quot;static/iconfont.ttf&quot;</span><span class="token punctuation">,</span> <span class="token comment">// app tabbar 字体.ttf文件路径 app 3.4.4+</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//tab 的列表，最少两个，最多5个</span>
            <span class="token punctuation">{</span> <span class="token comment">//这里的选项会替代tabBar设置的默认选项</span>
                <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/index&quot;</span><span class="token punctuation">,</span><span class="token comment">//页面路径</span>
                <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_component.png&quot;</span><span class="token punctuation">,</span><span class="token comment">//图片路径,最大40k</span>
                <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_component_HL.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;组件&quot;</span><span class="token punctuation">,</span> <span class="token comment">//tab 上按钮文字，在 App 和 H5 平台为非必填</span>
                <span class="token property">&quot;iconfont&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 字体图标,优先级高于 iconPath</span>
                    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\ue102&quot;</span><span class="token punctuation">,</span> <span class="token comment">//tab上的图标</span>
                    <span class="token property">&quot;selectedText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\ue103&quot;</span><span class="token punctuation">,</span> <span class="token comment">//选中时的tab文字</span>
                    <span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17px&quot;</span><span class="token punctuation">,</span>
                    <span class="token comment">//文字默认大小</span>
                    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span> <span class="token comment">//tab 上的文字选中时的颜色</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">{</span>
                <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/API/index&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_API.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_API_HL.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;midButton&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//中间按钮的宽度</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span> <span class="token comment">//中间按钮的高度,可以大于 tabBar 高度，达到中间凸起的效果</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文字&quot;</span><span class="token punctuation">,</span> <span class="token comment">//中间按钮的文字</span>
            <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/midButton_iconPath.png&quot;</span><span class="token punctuation">,</span><span class="token comment">//中间按钮的图片路径</span>
            <span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span><span class="token comment">//图片宽度（高度等比例缩放）</span>
            <span class="token property">&quot;backgroundImage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/midButton_backgroundImage.png&quot;</span><span class="token comment">//按钮背景图片路径</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当设置 position 为 top 时，将不会显示 icon</li><li>tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。</li><li>tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）</li><li>tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。</li><li>顶部的 tabbar 目前仅微信小程序上支持。需要用到顶部选项卡的话，建议不使用 tabbar 的顶部设置，而是自己做顶部选项卡，可参考 hello uni-app-&gt;模板-&gt;顶部选项卡。</li></ul><h4 id="_5-easycom" tabindex="-1"><a class="header-anchor" href="#_5-easycom" aria-hidden="true">#</a> 5. easycom</h4><p>只要组件安装在项目根目录或uni_modules的components目录下，并符合components/组件名称/组件名称.vue或uni_modules/插件ID/components/组件名称/组件名称.vue目录结构。就可以不用引用、注册，直接在页面中使用。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;easycom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;autoscan&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否自动扫描组件</span>
        <span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//自定义扫描规则</span>
            <span class="token property">&quot;^uni-(.*)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@/components/uni-$1.vue&quot;</span>，<span class="token comment">//匹配components目录内的vue文件</span>
            <span class="token property">&quot;^vue-file-(.*)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;packageName/path/to/vue-file-$1.vue&quot;</span> <span class="token comment">//匹配node_modules目录  </span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//使用示例
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-list</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>第一行<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-list-item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-list-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>第二行<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-list-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-list</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>树摇：不管components目录下安装了多少组件，easycom打包后会自动剔除没有使用的组件</li><li>插件市场：在uni-app插件市场下载符合components/组件名称/组件名称.vue目录结构的组件，均可直接使用</li><li>easycom只处理vue组件，不处理小程序专用组件（如微信的wxml格式组件）。不处理后缀为.nvue的组件。</li></ul><h4 id="_6-xxxwindow" tabindex="-1"><a class="header-anchor" href="#_6-xxxwindow" aria-hidden="true">#</a> 6. xxxWindow</h4><p>用于解决宽屏适配问题。【详见：Web开发-&gt;宽屏适配】</p><p>以现有的手机应用为mainWindow，在左、上、右，可以追加新的页面显示窗体。<br> 以下三种windows是否默认显示，由minwidth的默认值和设备大小决定，也可以在pages里指定是否默认显示。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token comment">//5.大屏顶部窗口：仅H5   </span>
    <span class="token property">&quot;topWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/top-window.vue&quot;</span><span class="token punctuation">,</span> <span class="token comment">//配置页面路径</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//配置页面窗口表现,一些CSS样式</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;44px&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>            
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;matchMedia&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//配置显示该窗口的规则</span>
             <span class="token property">&quot;minWidth&quot;</span><span class="token operator">:</span> <span class="token number">768</span> <span class="token comment">//设备可见区域宽度 &gt;= minWidth 时，显示该 window</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//6.大屏左侧窗口：仅H5   </span>
    <span class="token property">&quot;leftWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/left-window.vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//7.大屏右侧窗口：仅H5</span>
    <span class="token property">&quot;rightWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/right-window.vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span>
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-创建页面" tabindex="-1"><a class="header-anchor" href="#ii-创建页面" aria-hidden="true">#</a> Ⅱ. 创建页面</h2><h4 id="_1-组件与页面" tabindex="-1"><a class="header-anchor" href="#_1-组件与页面" aria-hidden="true">#</a> 1. 组件与页面</h4><p>组件和页面本质都是一个Vue文件，只是从逻辑上将其分成了组件和页面。<br> 所谓页面就是一个完整展示的页面。</p><h4 id="_2-组合与页面的区分" tabindex="-1"><a class="header-anchor" href="#_2-组合与页面的区分" aria-hidden="true">#</a> 2. 组合与页面的区分</h4><p>根目录下创建组件和页面的目录</p><ul><li>pages目录：存放页面</li><li>components目录：存放自定义的vue组件【注意要符合easycom规范】</li></ul><h4 id="_3-创建页面" tabindex="-1"><a class="header-anchor" href="#_3-创建页面" aria-hidden="true">#</a> 3. 创建页面</h4><p>右键pages目录，选择新建页面，如下，填写信息：</p><ul><li>创建同名目录：勾选这个，符合规范</li><li>在pages.json中注册：勾选这个，自动注册到pages.json，省去了手动注册。</li></ul><figure><img src="`+p+`" alt="3-2-1" tabindex="0" loading="lazy"><figcaption>3-2-1</figcaption></figure><h2 id="iii-整体配置" tabindex="-1"><a class="header-anchor" href="#iii-整体配置" aria-hidden="true">#</a> Ⅲ. 整体配置</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//1.设置页面路径及窗口表现</span>
    <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;组件&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/API/index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> 
        <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/view/index&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">//2.启动模式配置，仅开发期间生效</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//当前激活的模式（list 的索引项）</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token comment">//模式名称</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/view/index&quot;</span> <span class="token comment">//启动页面，必选</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//3.设置默认页面的窗口表现：状态栏、导航条、标题、窗口背景色等    </span>
    <span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;演示&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#F8F8F8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;collapse-tree-item&quot;</span><span class="token operator">:</span><span class="token string">&quot;/components/collapse-tree-item&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;renderingMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;seperated&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 仅微信小程序，webrtc 无法正常时尝试强制关闭同层渲染</span>
        <span class="token property">&quot;pageOrientation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;portrait&quot;</span><span class="token punctuation">,</span> <span class="token comment">//横屏配置，全局屏幕旋转设置(仅 APP/微信/QQ小程序)，支持 auto / portrait / landscape</span>
        <span class="token property">&quot;rpxCalcMaxDeviceWidth&quot;</span><span class="token operator">:</span> <span class="token number">960</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rpxCalcBaseDeviceWidth&quot;</span><span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rpxCalcIncludeWidth&quot;</span><span class="token operator">:</span> <span class="token number">750</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//3.设置底部tab的表现</span>
    <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#7A7E83&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#3cc51f&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;borderStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;spacing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3px&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconfontSrc&quot;</span><span class="token operator">:</span><span class="token string">&quot;static/iconfont.ttf&quot;</span><span class="token punctuation">,</span> <span class="token comment">// app tabbar 字体.ttf文件路径 app 3.4.4+</span>
        <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/component/index&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_component.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_component_HL.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;组件&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;iconfont&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 优先级高于 iconPath，该属性依赖 tabbar 根节点的 iconfontSrc</span>
                       <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\ue102&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;selectedText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\ue103&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;fontSize&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17px&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span>
                  <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/API/index&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_API.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/icon_API_HL.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;接口&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;midButton&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;80px&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50px&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;文字&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/midButton_iconPath.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;iconWidth&quot;</span><span class="token operator">:</span> <span class="token string">&quot;24px&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;backgroundImage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/image/midButton_backgroundImage.png&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//4.组件自动引入规则  </span>
    <span class="token property">&quot;easycom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;autoscan&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否自动扫描组件</span>
        <span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//自定义扫描规则</span>
            <span class="token property">&quot;^uni-(.*)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@/components/uni-$1.vue&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//5.大屏顶部窗口：仅H5   </span>
    <span class="token property">&quot;topWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/top-window.vue&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;44px&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//6.大屏左侧窗口：仅H5   </span>
    <span class="token property">&quot;leftWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/left-window.vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//7.大屏右侧窗口：仅H5</span>
    <span class="token property">&quot;rightWindow&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;responsive/right-window.vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;300px&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;matchMedia&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
             <span class="token property">&quot;minWidth&quot;</span><span class="token operator">:</span> <span class="token number">768</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义导航栏" tabindex="-1"><a class="header-anchor" href="#自定义导航栏" aria-hidden="true">#</a> 自定义导航栏</h2><p>导航栏分为以下三种：</p><ul><li>无导航栏：仅设置path，其他的不做任何配置，导航栏将由各客户端自己决定。</li><li>uniapp导航栏：采用uniapp内置的配置属性配置的导航栏。</li><li>自定义导航栏：手动指定一个组件作为导航栏。</li></ul><h4 id="_1-开启自定义导航栏" tabindex="-1"><a class="header-anchor" href="#_1-开启自定义导航栏" aria-hidden="true">#</a> 1. 开启自定义导航栏</h4><p>在style里，将navigationStyle设置为custom或false，就可以开启自定义导航栏。</p><p>当开启了自定义导航栏后，就不要在使用uniapp内置的属性配置导航栏了，会和自定义导航栏混在一起（除了H5），非要共存可以选择设置一个div为uniapp的导航栏配置占位。</p><p>可以为某个页面单独设置，也可以全局设置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token property">&quot;navigationStyle&quot;</span><span class="token operator">:</span><span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-uni-ui" tabindex="-1"><a class="header-anchor" href="#_2-uni-ui" aria-hidden="true">#</a> 2. uni-ui</h4><p>uni ui解决了两种导航栏共存的情况。</p><h4 id="_3-方案" tabindex="-1"><a class="header-anchor" href="#_3-方案" aria-hidden="true">#</a> 3. 方案</h4><p>不建议使用自定义导航栏，性能不好，还有各种bug。</p>`,56),i=[e];function c(l,u){return s(),a("div",null,i)}const d=n(o,[["render",c],["__file","3-2.page.json.html.vue"]]);export{d as default};
