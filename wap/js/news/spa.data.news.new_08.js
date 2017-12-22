/*
 * spa.data.news.new_08.js
 * news for data
 * 新闻咨询 08 - 客户远道而来，送来锦旗向导师团队致谢
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_08 = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-data-news">'
          + '<h2>客户远道而来，送来锦旗向导师团队致谢</h2>'
          + '<p>'
            + '客户张女士手持精致的感谢锦旗，来到了橘子情感。这已经不是第一次有客户亲自'
            + '登门感谢了，虽然橘子创想文化传播有限公司作为一家通过线上指导为主的互联网'
            + '公司，但由于专业的素养和突出的能力，自公司成立以来成绩不断，总有远道而来'
            + '的客户热情上门，表达感谢。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/25.jpg" />'
          + '</div>'
          + '<p>'
            + '据悉，张女士是橘子情感的客户之一，在她找到这家公司的时候，她的婚姻生活出'
            + '现了极大的问题，甚至濒临死局。抱着试试看的心态联系了这里的导师，通过专业'
            + '的课程学习和导师悉心的教导，如今她的家庭生活重归美满，幸福的笑容时刻在脸'
            + '上洋溢。'
          + '</p>'
          + '<p>'
            + '客户张女士并不是本地人，此行是专门向各位导师们表达感谢的，同时也想看看这'
            + '样一家优秀的公司到底都容纳着什么样子的人才。橘子创想的导师们也热情地接待'
            + '了张女士的到来，并与她进行亲切的交谈。'
          + '</p>'
          + '<p>'
            + '导师嘉伟表示，虽然公司是线上服务性质，但每次见到热情而来的客户还是非常激'
            + '动，看到自己的努力为客户带去帮助是快乐的，但同时也希望各位客户不必再舟车'
            + '劳顿远道而来，希望大家有空多陪陪家人，好好休息。'
          + '</p>'
          + '<p>'
            + '“感谢橘子情感导师们对我的帮助，真的受益匪浅，如果没有他们就没有我今天的'
            + '幸福。”整个谈话中张女士一直重复着这句话，看得出来她内心的感恩和动容。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/26.jpg" />'
          + '</div>'
          + '<p>'
            + '橘子情感作为情感服务新兴行业的领导企业，用专业的团队打造全国好评率最高的'
            + '情感咨询培训机构。如今越来越多客户的登门感谢也再次印证了该公司的成就非凡'
            + '，他们所致力的不仅是解决基础的情感问题，更是整个社会情感教育的缺失。'
          + '</p>'
        + '</div>'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
