/* 二级导航 */
function navJson() {
    // 获取二级菜单列表
    var navList = $(".nav .nav-block li");

    $.ajax({
        type: "GET",
        url: "../data/nav.json",
        success: function (data) {
            $(navList[0]).children("a").text(data.index);
            $(navList[1]).children("a").text(data.saveLove);
            $(navList[2]).children("a").text(data.saveMarriage);
            $(navList[3]).children("a").text(data.separateMistress);
            $(navList[4]).children("a").text(data.customLove);
            $(navList[5]).children("a").text(data.emotionForum);
            $(navList[6]).children("a").text(data.focusTeam);
            $(navList[7]).children("a").text(data.course);
            $(navList[8]).children("a").text(data.aboutUs);
        }
    });
}
navJson();



/* 创建隐藏的二级导航菜单 */
function createSecNav() {

    // 创建并插入元素
    var secNavOut = document.createElement("div");
    $(secNavOut).addClass("sec-nav-hide");
    $("body").append(secNavOut);
    // 创建并插入元素
    var secNavInner = document.createElement("div");
    $(secNavInner).addClass("sec-nav-inner");
    $(secNavOut).append(secNavInner);
    // 创建并插入元素
    for (var i = 0; i < 9; i++) {
        $(secNavInner).append(document.createElement("a"));
    }

    // 获取 a 元素
    var secNavItem = $(".sec-nav-hide .sec-nav-inner a");

    // 获取 json 数据插入到 a 元素中
    $.ajax({
        type: "GET",
        url: "../data/nav.json",
        success: function (data) {

            var i = 0;
            var j = 0;

            for (var titleName in data.navTitle) {
                $(secNavItem[i]).text(data.navTitle[titleName]);
                i++;
            }
            for (var navSrc in data.src) {
                $(secNavItem[j]).attr("href", "..\/" + data.src[navSrc]);
                j++;
            }

        },
        error: function () {
            alert("请求失败");
        }
    });

}
createSecNav();



/* 三级页面右侧新闻列表标题和下方图片 */
function cisRight() {
    $.ajax({
        type: "GET",
        url: "../data/cis-right.json",
        success: function (data) {

            var recommendList = data.recommendList;

            //--> 标题
            var title = $(".right1>h3");

            //--> 移除标题
            var removeTitle = $(".right1 .jieshao h3");
            removeTitle.remove();

            //--> 插入图片
            var imgWrap = $(".right1 .jieshao span");
            var picLink = $(".right1 .jieshao span a");

            $(picLink).attr("href", "../course.html");  // 设置 a 标签链接为 "../course.html"

            var imgSrc = data.img[0].src;               // 获取图片路径
            var imgClass = data.img[1].class;           // 获取图片类名

            imgWrap.append().before("<a href='../course.html'><img /></a>");         // 将图片插入到子元素第一个位置

            $(".right1 .jieshao img").attr("src", imgSrc).attr("class", imgClass);      // 给图片添加 src 和 class 属性

            title.text(recommendList);      // 插入标题

        }
    });
}
cisRight();

function Ora() {
    /* 页面底部微信公众平台 */
    Ora.prototype.wechatPlatformTxt = function () {
        var wechatPlatformTxt = $("footer .main .bot .left p>.wechat-num");
        $.ajax({
            type: "GET",
            url: "../data/footer.json",
            success: function (data) {
                wechatPlatformTxt.text(data.wechatPlatformTxt);
            }
        });
    }
}

var wechatPlatformTxt = new Ora();
wechatPlatformTxt.wechatPlatformTxt();


/* 页面滚动到指定位置显示隐藏的二级导航菜单 */
function fixedNav() {
    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 1500) {
            $(".sec-nav-hide").css({
                opacity: 1
            });
        } else {
            $(".sec-nav-hide").css({
                opacity: 0
            });
        }

    });
}
fixedNav();



/* 页面右侧菜单 */
function rightNav() {
    $(".yb_conct").remove();
    var rightNavWrap = document.createElement("div");
    $(rightNavWrap).addClass("floating_ck");
    $("body").append(rightNavWrap);

    $.ajax({
        type: "GET",
        url: "../component/right-nav.html",
        success: function (data) {
            $(".floating_ck").append(data);
        },
        error: function () {
            console.log("数据请求失败！");
        }
    })

}
rightNav();
// 右侧菜单返回顶部按钮
function gotoTop(acceleration,stime) {
    acceleration = acceleration || 0.1;
    stime = stime || 10;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));

    var speeding = 1 + acceleration;
    window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

    if(x > 0 || y > 0) {
        var run = "gotoTop(" + acceleration + ", " + stime + ")";
        window.setTimeout(run, stime);
    }
}