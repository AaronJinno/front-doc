import{_ as e,P as a,Q as t,a5 as i}from"./framework-3728cbf1.js";const r="/front-doc/img/vue/vue/1-0-1.png",d="/front-doc/img/vue/vue/1-0-2.png",l="/front-doc/img/vue/vue/1-0-3.png",n="/front-doc/img/vue/vue/1-0-4.png",h="/front-doc/img/vue/vue/1-0-5.png",c={},o=i('<h4 id="_1-library-类库" tabindex="-1"><a class="header-anchor" href="#_1-library-类库" aria-hidden="true">#</a> 1. Library：类库</h4><p>库，本质上是一些函数的集合。每次调用函数，实现一个特定的功能，接着把控制权交给使用者。</p><p>代表：jQuery（核心：封装DOM操作，简化DOM操作）。</p><h4 id="_2-framework-框架" tabindex="-1"><a class="header-anchor" href="#_2-framework-框架" aria-hidden="true">#</a> 2. Framework：框架</h4><p>框架是一套完整的解决方案，使用框架的时候，需要把你的代码放到框架合适的地方，框架会在合适的时机调用你的代码。</p><p>框架规定了自己的编程方式，是一套完整的解决方案。</p><p>使用框架的时候，由框架控制一切，我们只需要按照规则写代码。</p><h4 id="_3-类库与框架的区别" tabindex="-1"><a class="header-anchor" href="#_3-类库与框架的区别" aria-hidden="true">#</a> 3. 类库与框架的区别</h4><p>You call Library, Framework calls you（你主导类库，框架主导你）。</p><ul><li>框架中：控制整个流程的是框架</li><li>使用库：由开发人员决定如何调用库中提供的方法（辅助）</li></ul><h4 id="_4-渐进式框架" tabindex="-1"><a class="header-anchor" href="#_4-渐进式框架" aria-hidden="true">#</a> 4. 渐进式框架</h4><p>渐进式框架的大概意思就是你可以只用我的一部分，而不是用了我这一点就必须用我的所有部分。（由简单到复杂的使用该框架，Vue就是渐进式框架）。</p><p>渐进式意味着你可以将Vue作为你应用的一部分嵌入其中，带来更丰富的交互体验。或者如果你希望将更多的业务逻辑使用Vue实现，那么可以使用Vue的核心库以及其生态系统。</p><figure><img src="'+r+'" alt="1-0-1" tabindex="0" loading="lazy"><figcaption>1-0-1</figcaption></figure><h4 id="_5-mvc与mvvm" tabindex="-1"><a class="header-anchor" href="#_5-mvc与mvvm" aria-hidden="true">#</a> 5. MVC与MVVM</h4><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意：这里的MVC和MVVM指的都是前端的。</p><p>后端的的MVC是与前端的MVC没关系，后端的V=前端的M+V+C。</p></div><h5 id="_5-1-mvc" tabindex="-1"><a class="header-anchor" href="#_5-1-mvc" aria-hidden="true">#</a> 5.1 MVC</h5><figure><img src="'+d+'" alt="1-0-2" tabindex="0" loading="lazy"><figcaption>1-0-2</figcaption></figure><ul><li>M: json、XML、HTML数据</li><li>V：模板引擎，模板片段</li><li>C：JS业务逻辑，HTTP请求交互（WebSocket等）</li></ul><h5 id="_5-2-mv-vm" tabindex="-1"><a class="header-anchor" href="#_5-2-mv-vm" aria-hidden="true">#</a> 5.2 MV-VM</h5><figure><img src="'+l+'" alt="1-0-3" tabindex="0" loading="lazy"><figcaption>1-0-3</figcaption></figure><ul><li>M：model数据模型（网页中的数据，一个JSON对象）</li><li>V：view视图（DOM元素），也就是HTML结构。</li><li>VM：ViewModel 视图模型：中间层（比如Vue），用来负责协调 V 层 和 M 层，以及数据的双向绑定。（VM不用你写是框架自带的）。</li></ul><h5 id="_5-3-mvc与mv-vm对比" tabindex="-1"><a class="header-anchor" href="#_5-3-mvc与mv-vm对比" aria-hidden="true">#</a> 5.3 MVC与MV-VM对比</h5><p>现在都是MVVM，已经没有MVC了，因为C要操作DOM效率低，且没有数据双向绑定啥的。</p><p>MVVM的效率高，方便，就是要写的文件数量变多了。</p><h5 id="_5-4-mvc与mvvm的联系" tabindex="-1"><a class="header-anchor" href="#_5-4-mvc与mvvm的联系" aria-hidden="true">#</a> 5.4 MVC与MVVM的联系</h5><figure><img src="'+n+'" alt="1-0-4" tabindex="0" loading="lazy"><figcaption>1-0-4</figcaption></figure><h4 id="_6-虚拟dom" tabindex="-1"><a class="header-anchor" href="#_6-虚拟dom" aria-hidden="true">#</a> 6. 虚拟DOM</h4><h5 id="_6-1-传统操作dom" tabindex="-1"><a class="header-anchor" href="#_6-1-传统操作dom" aria-hidden="true">#</a> 6.1 传统操作DOM</h5><p>当你用传统的源生api或jQuery去操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程。</p><p>比如当你在一次操作时，需要更新10个DOM节点，理想状态是一次性构建完DOM树，再执行后续操作。但浏览器没这么智能，收到第一个更新DOM请求后，并不知道后续还有9次更新操作，因此会马上执行流程，最终执行10次流程。显然例如计算DOM节点的坐标值等都是白白浪费性能，可能这次计算完，紧接着的下一个DOM更新请求，这个节点的坐标值就变了，前面的一次计算是无用功。</p><h5 id="_6-2-虚拟dom技术" tabindex="-1"><a class="header-anchor" href="#_6-2-虚拟dom技术" aria-hidden="true">#</a> 6.2 虚拟DOM技术</h5><p>虚拟DOM就是为了解决这个浏览器性能问题而被设计出来的。虚拟DOM和真实DOM之间会有一个映射的关系。例如前面的例子，假如一次操作中有10次更新DOM的动作，虚拟DOM不会立即操作DOM，而是将这10次更新的diff内容保存到本地的一个js对象中，最终将这个js对象一次性渲染到DOM树上，通知浏览器去执行绘制工作，这样可以避免大量的无谓的计算量。</p><h4 id="_7-前端mvc与后端mvc" tabindex="-1"><a class="header-anchor" href="#_7-前端mvc与后端mvc" aria-hidden="true">#</a> 7. 前端MVC与后端MVC</h4><p>注意：前端的C 一般是VM。</p><figure><img src="'+h+'" alt="1-0-5" tabindex="0" loading="lazy"><figcaption>1-0-5</figcaption></figure><p><strong>前后端的MVC对比</strong></p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">前端</th><th style="text-align:left;">后端</th></tr></thead><tbody><tr><td style="text-align:left;">M</td><td style="text-align:left;">json、 xml 、html数据等</td><td style="text-align:left;">数据库 、文件等</td></tr><tr><td style="text-align:left;">V</td><td style="text-align:left;">模板引擎、模板片段等</td><td style="text-align:left;">HTML模板</td></tr><tr><td style="text-align:left;">C</td><td style="text-align:left;">JS 业务逻辑 HTTP请求交互（AJAX, JSONP, WEBSOCKET）</td><td style="text-align:left;">HTTP请求路由 、搜索引擎 、数据分析 、文件服务</td></tr></tbody></table><h4 id="_8-js-编程范式" tabindex="-1"><a class="header-anchor" href="#_8-js-编程范式" aria-hidden="true">#</a> 8. JS 编程范式</h4><ul><li>命令式编程：传统的JS开发</li><li>声明式编程：Vue开发，现在通用的前端开发方式</li></ul>',40),s=[o];function f(m,p){return a(),t("div",null,s)}const M=e(c,[["render",f],["__file","1-0.前置概念.html.vue"]]);export{M as default};
