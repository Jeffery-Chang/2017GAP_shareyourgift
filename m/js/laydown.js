(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var layCtrl = {
    init: function(){
        gapage('m_2_product');

        var itemIndex = $.getUrlParam('itemIndex');
        $('.laydown section, .pop, .black').hide();

        $('.laydown section a.btn').on('click', function(event){
            event.preventDefault();
            $('.pop, .black').fadeIn('fast');
        });
        $('.pop .close').on('click', function(event){
            event.preventDefault();
            $('.pop, .black').fadeOut('fast');
        });
        $('.btn_gold').on('click', function(event){
            event.preventDefault();
            layCtrl.goClick('page');
        });
        $('.write').on('click', function(event){
            layCtrl.goClick('outside');
        });
        
        // 2016-11-18 增加回上頁
        $('.back').on('click', function(event){
            event.preventDefault();
            layCtrl.goClick('previous');
        });

        var showObj = $('.laydown section').eq(itemIndex);
        showObj.show();

        // 2016-11-17 增加載入後滑動
        setTimeout(function(){
            var objImg = showObj.find('img');
            var screenWidth = window.innerWidth;
            var imgWidth = objImg.width();
            var move = (imgWidth - screenWidth);

            if(imgWidth > screenWidth){
                TweenMax.to(objImg, 1, {
                    x: '-=' + move,
                    ease: Power2.easeOut,
                    onComplete: function () {
                        TweenMax.to(objImg, 1, {
                            x: '+=' + move,
                            ease: Power2.easeOut,
                            onComplete: function () {

                            }
                        });
                    }
                });
            }
        }, 750);
    },
    goClick: function(type){
        if(type === "page"){
            trackWaitJump('m_result_get_coupon','coupon.html');
        }else if(type === "outside"){
            // 2016-11-21 手機版短網址更新
            // $('.write').attr('href','https://goo.gl/VL3qIH');
            $('.write').attr('href','https://goo.gl/OX8niF');
            gaclick('m_result_go_fanpage');
        }else if(type === "previous"){
            location.href = 'inspiration.html';
        }
    }
}

$(function(){
    layCtrl.init();
});