import{_ as l,r as t,o as c,c as d,a as n,b as s,d as e,e as i}from"./app-2b89a278.js";const r="/front-doc/img/vue/vuepress/8-1-1.jpg",o="/front-doc/img/vue/vuepress/8-1-2.jpg",u={},p=i('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>详见：git&gt;github actions</p></div><figure><img src="'+r+`" alt="8-1-1" tabindex="0" loading="lazy"><figcaption>8-1-1</figcaption></figure><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> Github Actions</h2><p>使用GitHub Actions 进行自动化编译和部署</p><h4 id="_1-jobs" tabindex="-1"><a class="header-anchor" href="#_1-jobs" aria-hidden="true">#</a> 1. jobs</h4><p>workflows要做的job如下：</p><ul><li>检查代码：actions/checkout@v3</li><li>配置环境 <ul><li>安装pnpm：pnpm/action-setup@v2</li><li>设置node：actions/setup-node@v3</li></ul></li><li>构建文档：npm run docs:build</li><li>部署文档 <ul><li>Github Pages：JamesIves/github-pages-deploy-action@v4 <ul><li>先同步到Gitee仓库：wearerequired/git-mirror-action@master</li><li>再部署到Gitee Pages：yanglbme/gitee-pages-action@main</li></ul></li><li>自己的服务器：burnett01/rsync-deployments@4.1</li></ul></li></ul><h4 id="_2-workflows文件" tabindex="-1"><a class="header-anchor" href="#_2-workflows文件" aria-hidden="true">#</a> 2. workflows文件</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 确保这是你正在使用的分支名称</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">7</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>


      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
          pnpm run docs<span class="token punctuation">:</span>build
          <span class="token punctuation">&gt;</span> src/.vuepress/dist/.nojekyll

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 这是文档部署到的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> docs
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> github pages</h2><h4 id="_1-仓库类型" tabindex="-1"><a class="header-anchor" href="#_1-仓库类型" aria-hidden="true">#</a> 1. 仓库类型</h4>`,11),v={href:"http://aaronjinno.github.io",target:"_blank",rel:"noopener noreferrer"},m={href:"http://aaronjinno.github.io",target:"_blank",rel:"noopener noreferrer"},b=n("li",null,"仓库名：项目名，如 aicell",-1),h={href:"http://aaronjinno.github.io/aicell",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),g=i(`<h4 id="_2-base" tabindex="-1"><a class="header-anchor" href="#_2-base" aria-hidden="true">#</a> 2. base</h4><p>如果采用的用户名仓库，config.ts中的base就设置为 &quot;/&quot;</p><p>如果采用的是项目仓库，config.ts中的base就设置为 &quot; /项目仓库名/ &quot;</p><h4 id="_3-开启权限" tabindex="-1"><a class="header-anchor" href="#_3-开启权限" aria-hidden="true">#</a> 3. 开启权限</h4><p>push项目前，需要开启权限，</p><h4 id="_4-push" tabindex="-1"><a class="header-anchor" href="#_4-push" aria-hidden="true">#</a> 4. push</h4><ul><li>push项目</li><li>观察actions：成功执行</li></ul><h4 id="_5-激活pages" tabindex="-1"><a class="header-anchor" href="#_5-激活pages" aria-hidden="true">#</a> 5. 激活pages</h4><p>激活pages，访问url</p><h2 id="服务器部署" tabindex="-1"><a class="header-anchor" href="#服务器部署" aria-hidden="true">#</a> 服务器部署</h2><p>服务器环境：CentOS Stream 9</p><h4 id="部署方式" tabindex="-1"><a class="header-anchor" href="#部署方式" aria-hidden="true">#</a> 部署方式</h4><ul><li>自动部署 <ul><li>通过 github action 中共的jobs步骤，在github pages部署完后，增加一个step，该step用来将编译后的文件上传到服务器。</li><li>自动部署，对文件修改一点，也会全部重写将编译后的文件上传到服务器，速度非常慢，尤其是github服务器在美国。</li></ul></li><li>手动部署 <ul><li>在服务端使用git托管项目，项目分支为docs</li><li>当服务器部署完后，服务器git拉取更新</li><li>访问服务器，直接就是更新完后的项目。</li></ul></li></ul><p>因此这里选择手动部署，以下是手动不是的步骤</p><h4 id="_1-安装环境" tabindex="-1"><a class="header-anchor" href="#_1-安装环境" aria-hidden="true">#</a> 1. 安装环境</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装node</span>
yum <span class="token function">install</span> <span class="token function">node</span> <span class="token comment"># nodejs-16.16.0; npm-8.11.0</span>

<span class="token comment"># 全局安装pnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span> //v8.1.0
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/  <span class="token comment"># 设置淘宝源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-项目目录" tabindex="-1"><a class="header-anchor" href="#_2-项目目录" aria-hidden="true">#</a> 2. 项目目录</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/item/aicell  <span class="token comment">#aicell 项目目录</span>
/item/aicell/dist <span class="token comment">#aicell 编译后的前端目录</span>
/item/aicell/ssl <span class="token comment">#SSL文件目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-配置nginx" tabindex="-1"><a class="header-anchor" href="#_3-配置nginx" aria-hidden="true">#</a> 3. 配置Nginx</h4><h5 id="_3-1-安装并启动" tabindex="-1"><a class="header-anchor" href="#_3-1-安装并启动" aria-hidden="true">#</a> 3.1 安装并启动</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx <span class="token comment"># v.1.20.1</span>
systemctl start nginx <span class="token comment"># 启动Nginx</span>
systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment"># 设置为开机自启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-1-配置" tabindex="-1"><a class="header-anchor" href="#_3-1-配置" aria-hidden="true">#</a> 3.1 配置</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份配置文件</span>
<span class="token function">cp</span> /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),_={href:"https://freessl.cn/",target:"_blank",rel:"noopener noreferrer"},f=i(`<h5 id="_3-3-nginx-conf" tabindex="-1"><a class="header-anchor" href="#_3-3-nginx-conf" aria-hidden="true">#</a> 3.3 nginx.conf</h5><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
include /usr/share/nginx/modules/*.conf;
events {
    worker_connections 1024;
}

http {
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;
    include /etc/nginx/conf.d/*.conf;

    server{
        listen 443 ssl http2 default_server;
        listen [::]:443 ssl http2 default_server;
        server_name  aicell.cc;
        root  /item/aicell/www;

        # ssl  on;
        ssl_certificate &quot;/item/aicell/ssl/aicell.cc.crt&quot;;
        ssl_certificate_key  &quot;/item/aicell/ssl/aicell.cc.key&quot;;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout 10m;
        ssl_protocols      TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        include /etc/nginx/default.d/*.conf;
        location / {
            index index.html index.htm;
        }  
    }

    server{
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name aicell.cc;
        rewrite ^(.*)$ https://$host$1 permanent;

        location / {
           return 301 https://aicell.cc:443$request_uri; 
        }  
    }    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-添加dns并测试服务器" tabindex="-1"><a class="header-anchor" href="#_4-添加dns并测试服务器" aria-hidden="true">#</a> 4. 添加DNS并测试服务器</h4><p>对部署的网址，添加DNS解析</p><figure><img src="`+o+`" alt="8-1-2" tabindex="0" loading="lazy"><figcaption>8-1-2</figcaption></figure><p>将项目打包，并上传到<code>/item/aicell/dist</code> ，并访问<code>aicell.cc</code>测试是否能够访问成功。</p><h4 id="_5-安装git" tabindex="-1"><a class="header-anchor" href="#_5-安装git" aria-hidden="true">#</a> 5. 安装git</h4><p>安装git，并在github上配置服务器的SSL公钥。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">git</span> <span class="token comment"># v2.31.1</span>
<span class="token builtin class-name">cd</span>  /root/.ssh
<span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-管理项目" tabindex="-1"><a class="header-anchor" href="#_6-管理项目" aria-hidden="true">#</a> 6. 管理项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化项目</span>
<span class="token function">git</span> init
config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;V&quot;</span>
config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;v@gmail.com&quot;</span>
<span class="token function">git</span> clone git@github.com:AaronJinno/aaronjinno.github.io.git www
<span class="token function">git</span> checkout docs
<span class="token comment"># git checkout -b docs origin/docs</span>

<span class="token comment"># 拉取更新</span>
<span class="token function">git</span> pull origin docs:docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-更新流程" tabindex="-1"><a class="header-anchor" href="#_7-更新流程" aria-hidden="true">#</a> 7. 更新流程</h4><p>本地更新完项目后，就上传到github，然后在服务器拉取docs分支即可。</p>`,13);function x(y,q){const a=t("ExternalLinkIcon");return c(),d("div",null,[p,n("ul",null,[n("li",null,[s("用户名仓库： "),n("ul",null,[n("li",null,[s("仓库名：与用户名个人网站一样，如："),n("a",v,[s("aaronjinno.github.io"),e(a)])]),n("li",null,[s("访问url："),n("a",m,[s("aaronjinno.github.io"),e(a)])])])]),n("li",null,[s("项目仓库： "),n("ul",null,[b,n("li",null,[s("访问url： "),n("a",h,[s("aaronjinno.github.io/aicell"),e(a)]),k,s(" 二选一，用户名仓库只能创建一个，不过url更简洁")])])])]),g,n("p",null,[s("通过："),n("a",_,[s("https://freessl.cn/"),e(a)]),s(" 申请一个SSL证书，放入/item/aicell/ssl。")]),f])}const j=l(u,[["render",x],["__file","8-1.github部署.html.vue"]]);export{j as default};
