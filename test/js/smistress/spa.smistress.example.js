spa.smistress.example=function(){var t,n,e,l={main_html:String()+'<div class="spa-module-title"><span class="spa-module-title-line"></span><p class="spa-module-title-txt">成功案例</p><span class="spa-module-title-line"></span></div>'},s={$example:null},a={};return t=function(){var t=s.$example;a={$example:t,$top:t.find(".top"),$bottom:t.find(".bottom")}},n=function(){a.$top.click(function(){$.uriAnchor.setAnchor({case:"case_01"})}),a.$bottom.click(function(){$.uriAnchor.setAnchor({case:"case_02"})})},e=function(e){s.$example=e,e.html(l.main_html),t(),n()},{initModule:e}}();