import{_ as i,o as e,c as l,e as a}from"./app-ba294a04.js";const d={},r=a('<h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><p>在CSS中有三个显示和隐藏的功能，我们要区分开，他们分别是 display、visibility 和 overflow。</p><p>他们的主要目的是让一个元素在页面中消失，但是不在文档源码中删除。 最常见的是网站广告，当我们点击类似关闭不见了，但是我们重新刷新页面，它们又会出现。</p><h4 id="_2-display" tabindex="-1"><a class="header-anchor" href="#_2-display" aria-hidden="true">#</a> 2. display</h4><p>display 设置或检索对象是否及如何显示。</p><ul><li>display：none 隐藏对象，隐藏之后，不再保留位置</li><li>display：block （inline）,除了转换块状内联外，还能进行显示</li></ul><h4 id="_3-visibility" tabindex="-1"><a class="header-anchor" href="#_3-visibility" aria-hidden="true">#</a> 3. visibility</h4><p>设置或检索是否显示对象。</p><ul><li>visible：对象可视</li><li>hidden：对象隐藏，隐藏之后，继续保留原有位置。</li></ul><h4 id="_4-overflow" tabindex="-1"><a class="header-anchor" href="#_4-overflow" aria-hidden="true">#</a> 4. overflow</h4><p>检索或设置当对象的内容超过其指定高度及宽度时如何管理内容。</p><ul><li>visible：不剪切内容也不添加滚动条。</li><li>auto：超出自动显示滚动条，不超出不显示滚动条</li><li>hidden：不显示超过对象尺寸的内容，超出的部分隐藏掉</li><li>scroll：不管超出内容否，总是显示滚动条</li></ul>',12),s=[r];function t(o,h){return e(),l("div",null,s)}const _=i(d,[["render",t],["__file","4-6.显示与隐藏.html.vue"]]);export{_ as default};
