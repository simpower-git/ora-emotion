spa.forum=function(){var n,r,t,i={main_html:String()+"情感论坛页面"},a={$container:null,$forum:null},o={};return n=function(){var n=a.$container,r=a.$forum;o={$container:n,$forum:r}},r=function(){var n=o.$container.find(".spa-preface img");$("title").text("橘子情感 - 情感论坛"),n.attr("src","images/forum/preface.png")},t=function(t,o){a.$container=t,a.$forum=o,o.html(i.main_html),n(),r()},{initModule:t}}();