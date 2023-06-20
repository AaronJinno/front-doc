import{_ as n,o as s,c as a,e}from"./app-2b89a278.js";const t="/front-doc/img/applet/uniapp/3-4-1.jpg",p={},o=e(`<h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><p>uni-app 通过在package.json文件中增加uni-app扩展节点，可实现自定义条件编译平台。</p><p>PS：只能扩展web和小程序平台（指定的小程序平台），不能扩展app打包。</p><h4 id="_2-意义" tabindex="-1"><a class="header-anchor" href="#_2-意义" aria-hidden="true">#</a> 2. 意义</h4><ul><li>可以在代码里编写自定义的条件编译，为这个新平台编写专用代码</li><li>运行时可以执行面向新平台的编译运行</li><li>发行时可以执行面向新平台的编译发行</li></ul><h4 id="_3-基本配置" tabindex="-1"><a class="header-anchor" href="#_3-基本配置" aria-hidden="true">#</a> 3. 基本配置</h4><p>该文件需要自己创建，在根目录下创建 package.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;uni-app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 扩展配置</span>
        <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;custom-platform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//自定义编译平台配置，可通过cli方式调用</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;自定义扩展名称&quot;</span><span class="token punctuation">,</span> <span class="token comment">//在HBuilderX中会显示在运行/发行菜单中</span>
                <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//运行到的目标浏览器，仅当UNI_PLATFORM为h5时有效</span>
                <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//环境变量</span>
                    <span class="token property">&quot;UNI_PLATFORM&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//基准平台</span>
                    <span class="token property">&quot;MY_TEST&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// ... 其他自定义环境变量</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;define&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//自定义条件编译</span>
                    <span class="token property">&quot;CUSTOM-CONST&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//自定义条件编译常量，建议为大写</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例" aria-hidden="true">#</a> 4. 示例</h4><h5 id="_4-1-配置微信服务号" tabindex="-1"><a class="header-anchor" href="#_4-1-配置微信服务号" aria-hidden="true">#</a> 4.1 配置微信服务号</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;uni-app&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;h5-weixin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;微信服务号&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span>  
                <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;UNI_PLATFORM&quot;</span><span class="token operator">:</span> <span class="token string">&quot;h5&quot;</span>  
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;define&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
                    <span class="token property">&quot;H5-WEIXIN&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> 
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>    
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-使用自定义平台" tabindex="-1"><a class="header-anchor" href="#_4-2-使用自定义平台" aria-hidden="true">#</a> 4.2 使用自定义平台</h5><p>开发者可在代码中使用自定义平台名进行条件编译，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// #ifdef H5</span>
<span class="token constant">H5</span>平台通用代码（含微信服务号）
<span class="token comment">// #endif</span>
<span class="token comment">// #ifdef H5-WEIXIN</span>
微信服务号特有代码
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-3-运行与发布项目" tabindex="-1"><a class="header-anchor" href="#_4-3-运行与发布项目" aria-hidden="true">#</a> 4.3 运行与发布项目</h5><p>HBuilderX会根据package.json的扩展配置，在运行、发行菜单下，生成自定义菜单（微信服务号），开发者点击对应菜单编译运行即可，如下图：</p><figure><img src="`+t+'" alt="3-4-1" tabindex="0" loading="lazy"><figcaption>3-4-1</figcaption></figure>',17),i=[o];function c(l,r){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","3-4.package.json.html.vue"]]);export{d as default};
