(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var gap = {
    map:0,
    init: function() {
        var fbBack = $.getUrlParam('fb_back');
        if(fbBack != '' && fbBack !== undefined && fbBack !== null){
            gaclick('m-click-share_tracking');
        }

        $(window).bind('scroll resize', function() {　　
            var $this = $(this);　　
            var $this_Top = $this.scrollTop();

            //當高度小於100時，關閉區塊 
            if ($this_Top < 100) {　　　
                $('#top-bar').stop().animate({
                    top: "-41px",
                    opacity: "0"
                });　　　
            }　　　　
            if ($this_Top > 100) {　　　　
                $('#top-bar').stop().animate({
                    top: "0px",
                    opacity: "1"
                });　　　
            }　　
        }).scroll();　

        $('#top-bar li').eq(0).on('click', function(event){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: 0
            }, 600);
        });
        $('#top-bar li').eq(1).on('click', function(event){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $('.main.qrcode_block').offset().top - $('.main.qrcode_block .qr').height()
            }, 600);
        });
        $('#top-bar li').eq(2).on('click', function(event){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $('.main.activity').offset().top
            }, 800);
        });
        $('#top-bar li').eq(3).on('click', function(event){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $('.main.store').offset().top
            }, 1000);
        });

        $('.main.store section li').on('click', function(event){
            event.preventDefault();

            var num = 0;
            var index = parseInt($(this).index());
            var area = $(this).parents('.s_list').attr('class');

            if(area.indexOf("center") > 0){
                num = 7;
            }else if(area.indexOf("south") > 0){
                num = 9;
            }

            gap.mapTo(index + num);
        });

        $('#gotop').on('click', function(event){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1000);
        });

        $('.idea').on('click', function(event){
            $(this).attr('href','https://goo.gl/VL3qIH');
            gaclick('m_result_go_fanpage');
        });

    },
    mapTo: function(map){
        if( map != gap.map ){
            $('.map iframe').fadeOut('fast', function(){
                var mapCnt = map + 1;
                $(this).attr('src','map/store'+mapCnt+'.html').fadeIn('fast');
            });

            $('.main.store section li').eq(gap.map).find('a').removeClass('focus');
            $('.main.store section li').eq(map).find('a').addClass('focus');

            gap.map=map;
        }
    }
};

$(function(){
    gap.init();
});