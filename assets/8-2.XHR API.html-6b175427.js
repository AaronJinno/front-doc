import{_ as t,o as e,c as a,e as r}from"./app-ba294a04.js";const l={},n=r(`<h2 id="i-属性" tabindex="-1"><a class="header-anchor" href="#i-属性" aria-hidden="true">#</a> Ⅰ. 属性</h2><h4 id="_1-readystate" tabindex="-1"><a class="header-anchor" href="#_1-readystate" aria-hidden="true">#</a> 1. readyState</h4><p>用于追踪 xhr 当前的状态，共有 5 种可能的值，分别对应 xhr不同的阶段。<br> 每次 readyState 值变化时，都会触发 xhr.onreadystatechange 事件。</p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">状态</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">UNSENT (初始状态，未打开)</td><td style="text-align:left;">此时 xhr 对象被成功构造， open() 方法还未被调用</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">OPENED (已打开，未发送)</td><td style="text-align:left;">open() 方法已被成功调用，send() 方法还未被调用。注意：只有 xhr 处于 OPENED 状态，才能调用 xhr.setRequestHeader()和 xhr.send() ,否则会报错</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">HEADERS_RECEIVED(已获取响应头)</td><td style="text-align:left;">send() 方法已经被调用, 响应头和响应状态已经返回</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">LOADING (正在下载响应体)</td><td style="text-align:left;">响应体( response entity body )正在下载中，此状态下 xhr.response 可能已经有了响应数据</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">DONE (整个数据传输过程结束)</td><td style="text-align:left;">整个数据传输过程结束，不管本次请求是成功还是失败</td></tr></tbody></table><h4 id="_2-status" tabindex="-1"><a class="header-anchor" href="#_2-status" aria-hidden="true">#</a> 2. status</h4><p>status 属性表示 HTTP 响应状态码，如 200、302、400等。</p><p>xhr.status==200.代表请求成功。</p><h4 id="_3-responsetype" tabindex="-1"><a class="header-anchor" href="#_3-responsetype" aria-hidden="true">#</a> 3. responseType</h4><p>可在 xhr.send() 前设置 responseType ，用于指定返回的响应数据类型。<br> 支持的类型如下：</p><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">&quot;&quot;</td><td style="text-align:left;">将 responseType 设为空字符串与设置为 text 相同， 是默认类型 （实际上是 DOMString ）。</td></tr><tr><td style="text-align:left;">arraybuffer</td><td style="text-align:left;">response 是一个包含二进制数据的 JavaScript ArrayBuffer 。</td></tr><tr><td style="text-align:left;">blob</td><td style="text-align:left;">response 是一个包含二进制数据的 Blob 对象 。</td></tr><tr><td style="text-align:left;">document</td><td style="text-align:left;">response 是一个 HTML Document 或 XML XMLDocument ，这取决于接收到的数据的 MIME 类型。</td></tr><tr><td style="text-align:left;">json</td><td style="text-align:left;">response 是一个 JavaScript 对象。这个对象是通过将接收到的数据类型视为 JSON 解析得到的。</td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">response 是包含在 DOMString 对中的文本。</td></tr></tbody></table><h4 id="_4-response" tabindex="-1"><a class="header-anchor" href="#_4-response" aria-hidden="true">#</a> 4. response</h4><p>当用responseType设置完属性后，便可用该属性取值，设置的是什么类型，就取什么类型。</p><h4 id="_5-responsetext、responsexml" tabindex="-1"><a class="header-anchor" href="#_5-responsetext、responsexml" aria-hidden="true">#</a> 5. responseText、responseXML</h4><p>以设定好的类型取值，需要json格式的时需要用函数进行转换。</p><h4 id="_6-upload" tabindex="-1"><a class="header-anchor" href="#_6-upload" aria-hidden="true">#</a> 6. upload</h4><p>是一个XMLHttpRequestUpload对象，用于收集传输信息。支持事件：</p><ul><li>onloadstart</li><li>onprogress</li><li>onabort</li><li>ontimeout</li><li>onerror</li><li>onload</li><li>onloadend</li></ul><p>其中，xhr.upload.onprogress在上传阶段(即xhr.send()之后，xhr.readystate=2之前)触发，每 50ms 触发一次。可获得上传信息、进度等。</p><h4 id="_7-timeout" tabindex="-1"><a class="header-anchor" href="#_7-timeout" aria-hidden="true">#</a> 7. timeout</h4><p>超时时间，单位毫秒，默认值 0 （即不设置超时）。<br> 计时从onloadstart 事件触发开始（即xhr.send()开始）,以onloadend 事件触发为结束。</p><h2 id="ii-方法" tabindex="-1"><a class="header-anchor" href="#ii-方法" aria-hidden="true">#</a> Ⅱ. 方法</h2><h4 id="_1-open" tabindex="-1"><a class="header-anchor" href="#_1-open" aria-hidden="true">#</a> 1. open</h4><p>用于创建 HTTP 请求，但请求并未发送</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> async<span class="token operator">?</span><span class="token operator">:</span>boolean<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>method：请求类型，如 GET 、POST 等，大小写不敏感。</li><li>url：URL 地址</li><li>async：是否异步，默认 true，必须为异步</li></ul><h4 id="_2-send" tabindex="-1"><a class="header-anchor" href="#_2-send" aria-hidden="true">#</a> 2. send</h4><p>定义 HTTP 请求的数据（body），当 method 为 GET、HEAD 时，该参数忽略。<br> body可为：ArrayBuffer、Blob、Document(类似 XML 格式数据)、DOMString（字符串）、FormData（表单）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">send</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-abort" tabindex="-1"><a class="header-anchor" href="#_3-abort" aria-hidden="true">#</a> 3. abort</h4><p>若请求已发出，则会终止请求，并将 readyState 置为 0。<br> 调用后，应将 xhr 对象置为 null 以促进垃圾回收。由于内存原因，不建议重用 xhr 对象。</p><h4 id="_4-setrequestheader-header-string-value-string" tabindex="-1"><a class="header-anchor" href="#_4-setrequestheader-header-string-value-string" aria-hidden="true">#</a> 4. setRequestHeader(header:string, value:string)</h4><p>设置请求 HTTP 请求头信息。如content-type、cookie、accept-xxx等。<br> 必须在open()方法后，send()方法前调用，否则会抛错。<br> 可调用多次，最终值不会覆盖，而是采用追加append方式。</p><h2 id="iii-事件" tabindex="-1"><a class="header-anchor" href="#iii-事件" aria-hidden="true">#</a> Ⅲ. 事件</h2><h4 id="_1-xhr共有8个事件" tabindex="-1"><a class="header-anchor" href="#_1-xhr共有8个事件" aria-hidden="true">#</a> 1. xhr共有8个事件</h4><table><thead><tr><th style="text-align:left;">事件</th><th style="text-align:left;">触发条件</th></tr></thead><tbody><tr><td style="text-align:left;">onreadystatechange</td><td style="text-align:left;">每当xhr.readyState改变时触发；但xhr.readyState由非 0 值变为 0 时不触发。</td></tr><tr><td style="text-align:left;">onloadstart</td><td style="text-align:left;">调用xhr.send()方法后立即触发，若xhr.send()未被调用则不会触发此事件。</td></tr><tr><td style="text-align:left;">onprogress</td><td style="text-align:left;">xhr.upload.onprogress在上传阶段(即xhr.send()之后，xhr.readystate=2之前)触发，每 50ms 触发一次；xhr.onprogress在下载阶段（即xhr.readystate=3时）触发，每 50ms 触发一次。</td></tr><tr><td style="text-align:left;">onload</td><td style="text-align:left;">当请求成功完成时触发，此时xhr.readystate=4</td></tr><tr><td style="text-align:left;">onloadend</td><td style="text-align:left;">当请求结束（包括请求成功和请求失败）时触发</td></tr><tr><td style="text-align:left;">onabort</td><td style="text-align:left;">当调用xhr.abort()后触发</td></tr><tr><td style="text-align:left;">ontimeout</td><td style="text-align:left;">xhr.timeout不等于 0 ，由请求开始即 onloadstart 开始算起，当到达xhr.timeout 所设置时间请求还未结束即 onloadend ，则触发此事件。</td></tr><tr><td style="text-align:left;">onerror</td><td style="text-align:left;">在请求过程中，若发生 Network error 则会触发此事件（若发生 Network error 时，上传还没有结束，则会先触发 xhr.upload.onerror，再触发 xhr.onerror ；若发生 Network error时，上传已经结束，则只会触发xhr.onerror ）。注意，只有发生了网络层级别的异常才会触发此事件，对于应用层级别的异常，如响应返回的xhr.statusCode是 4xx 时，并不属于 Network error ，所以不会触发 onerror 事件，而是会触发 onload 事件。</td></tr></tbody></table><h4 id="_2-请求正常时-事件触发顺序" tabindex="-1"><a class="header-anchor" href="#_2-请求正常时-事件触发顺序" aria-hidden="true">#</a> 2. 请求正常时，事件触发顺序</h4><ul><li>触发 xhr.onreadystatechange (之后每次 readyState 变化时，都会触发一次)</li><li>触发 xhr.onloadstart //上传阶段开始：</li><li>触发 xhr.upload.onloadstart</li><li>触发 xhr.upload.onprogress</li><li>触发 xhr.upload.onload</li><li>触发 xhr.upload.onloadend //上传结束，下载阶段开始：</li><li>触发 xhr.onprogress</li><li>触发 xhr.onload</li><li>触发 xhr.onloadend</li></ul><h4 id="_3-发生-abort-timeout-error-时事件触发顺序" tabindex="-1"><a class="header-anchor" href="#_3-发生-abort-timeout-error-时事件触发顺序" aria-hidden="true">#</a> 3. 发生 abort / timeout / error 时事件触发顺序</h4><ul><li>触发 xhr.onreadystatechange 事件，此时 readystate 为 4</li><li>如果上传阶段还没有结束，则依次触发以下事件： <ul><li>xhr.upload.onprogress</li><li>xhr.upload.[onabort或ontimeout或onerror]</li><li>xhr.upload.onloadend</li></ul></li><li>触发 xhr.onprogress 事件</li><li>触发 xhr.[onabort或ontimeout或onerror] 事件</li><li>触发 xhr.onloadend 事件</li></ul><h4 id="_4-upload补充" tabindex="-1"><a class="header-anchor" href="#_4-upload补充" aria-hidden="true">#</a> 4. upload补充</h4><p>xhr.upload.onprogress 和 xhr.onprogress 的回调参数为 XMLHttpRequestEventTarget 对象。<br> 属性如下：</p><ul><li>lengthComputable 【只读】，为 boolean值，表示资源是否有可计算的长度。</li><li>loaded 已接收或已上传的字节数。</li><li>total 文件总字节数。</li><li>xhr.upload.onprogress 事件触发于上传阶段，可用于获取上传进度。</li><li>xhr.onprogress 事件触发于下载阶段，可用于获取下载进度。</li></ul>`,42),d=[n];function s(o,i){return e(),a("div",null,d)}const p=t(l,[["render",s],["__file","8-2.XHR API.html.vue"]]);export{p as default};
