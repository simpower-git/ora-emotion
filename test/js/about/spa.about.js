spa.about=function(){var a,t,i,n={main_html:String()+'<div class="about-ora"></div><div class="about-history"></div><div class="about-environment"></div><div class="about-dynamic"></div><div class="about-step"></div><div class="about-guarantee"></div><div class="about-associated"></div>'},o={$container:null,$about:null},e={};return a=function(){var a=o.$container,t=o.$about;e={$container:a,$about:t,$ora:t.find(".about-ora"),$history:t.find(".about-history"),$environment:t.find(".about-environment"),$dynamic:t.find(".about-dynamic"),$step:t.find(".about-step"),$guarantee:t.find(".about-guarantee"),$associated:t.find(".about-associated")}},t=function(){var a=e.$container.find(".spa-preface img");$("title").text("橘子情感 - 关于我们"),a.attr("src","images/about/preface.png"),spa.about.ora.initModule(e.$ora),spa.about.history.initModule(e.$history),spa.about.environment.initModule(e.$environment),spa.about.dynamic.initModule(e.$dynamic),spa.about.step.initModule(e.$step),spa.about.guarantee.initModule(e.$guarantee),spa.about.associated.initModule(e.$associated)},i=function(i,e){o.$container=i,o.$about=e,e.html(n.main_html),a(),t()},{initModule:i}}();