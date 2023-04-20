import{_ as a,P as n,Q as s,a5 as e}from"./framework-3728cbf1.js";const i="/front-doc/img/basic/html/9-1-1.png",t="/front-doc/img/basic/html/9-1-2.png",l={},p=e(`<div class="hint-container tip"><p class="hint-container-title">文件操作API</p><p>H5新增了两个与文件操作相关的API：</p><ul><li>FileReader：负责读取文件内容。</li><li>FileSystem：负责文件系统的操作。</li></ul></div><h2 id="i-访问文件域" tabindex="-1"><a class="header-anchor" href="#i-访问文件域" aria-hidden="true">#</a> Ⅰ. 访问文件域</h2><h4 id="_1-multiple属性" tabindex="-1"><a class="header-anchor" href="#_1-multiple属性" aria-hidden="true">#</a> 1. multiple属性</h4><p>该属性允许file控件选择和提交多个文件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-file和filelist" tabindex="-1"><a class="header-anchor" href="#_2-file和filelist" aria-hidden="true">#</a> 2. file和FileList</h4><p>为了方便用户在脚本中访问将要提交的文件，而增加了这两个对象。</p><ul><li>FileLIst：表示用户选择的文件列表</li><li>file：表示file控件内的每一个被选择的文件对象。</li></ul><h4 id="_3-filelist对象" tabindex="-1"><a class="header-anchor" href="#_3-filelist对象" aria-hidden="true">#</a> 3. FileList对象</h4><p>使用file控件的files属性获得。 <img src="`+i+`" alt="9-1-1" loading="lazy"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> filelist <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>length属性：可以获取文件列表里有多少个文件。</li><li>数字：每个数字对应一个上传的文件，FileList对象通过中括号数字获取file对象，注意从0开始。</li></ul><p><strong>循环获取所有的file文件</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>filelist<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> file <span class="token operator">=</span> filelist<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-file对象" tabindex="-1"><a class="header-anchor" href="#_4-file对象" aria-hidden="true">#</a> 4. file对象</h4><figure><img src="`+t+`" alt="9-1-2" tabindex="0" loading="lazy"><figcaption>9-1-2</figcaption></figure><p>通过FIleList对象进行获取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> file <span class="token operator">=</span> filelist<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//i是数字，代表第几个文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>name属性：文件名</li><li>size属性：文件大小，单位是直接</li><li>type属性：文件类型</li><li>lastModified属性：文件最后修改时间（时间戳）</li><li>lastModifiedDate属性：文件最后修改时间（英文单词） PS：File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。</li></ul><h2 id="ii-文件类型" tabindex="-1"><a class="header-anchor" href="#ii-文件类型" aria-hidden="true">#</a> Ⅱ. 文件类型</h2><p>数据在物理上的存储方式是二进制的，即由0/1字符串构成。 ‘ 而我们解读这些的方式有两种：基于字符编码，和基于值编码。</p><h4 id="_1-基于字符编码" tabindex="-1"><a class="header-anchor" href="#_1-基于字符编码" aria-hidden="true">#</a> 1. 基于字符编码</h4><p>即每个我们肉眼可读的字符都有唯一对应的0/1字符串，我们读、写这些字符都使用同一套编码方式。如果某文件的数据使用基于字符的编码，那么该文件即为“文本文件”。<br> 常见的基于字符的编码有：ASCII码，Unicode编码。</p><h5 id="_1-1-ascii码" tabindex="-1"><a class="header-anchor" href="#_1-1-ascii码" aria-hidden="true">#</a> 1.1 ASCII码</h5><p>它是一种定长编码，编码规则为：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1字节 0xxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_1-2-unicode编码" tabindex="-1"><a class="header-anchor" href="#_1-2-unicode编码" aria-hidden="true">#</a> 1.2 Unicode编码</h5><p>比较常见的是UTF-8编码，其为变长编码，即某一个字符的UTF-8编码有可能是1字节，也有可能是多字节。具体编码规则如下：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1字节 0xxxxxxx 
2字节 110xxxxx 10xxxxxx 
3字节 1110xxxx 10xxxxxx 10xxxxxx 
4字节 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx 
5字节 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 
6字节 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-基于值编码" tabindex="-1"><a class="header-anchor" href="#_2-基于值编码" aria-hidden="true">#</a> 2. 基于值编码</h4><p>基于值编码，可以理解为自定义的编码。</p><p>如果某文件的数据使用基于值的编码，那么该文件即为“二进制文件”。不同的应用程序对二进制文件中的每个值会有不同的解读，就像不同的编码对文本文件中的每一/多个字节有不同的解读。</p><p>常见的二进制文件有可执行程序、图形、图像、声音等等。</p><p>用记事本打开二进制文件出现乱码，由于二进制文件有其独立的编码解码规则，而这一规则通常是不同于文本文件的编码解码规则的，所以当我们用记事本打开二进制文件，也就是说，我们尝试用ASCII码的规则去解读二进制文件时，会出现乱码。</p>`,34),c=[p];function o(d,r){return n(),s("div",null,c)}const u=a(l,[["render",o],["__file","9-1.介绍.html.vue"]]);export{u as default};
