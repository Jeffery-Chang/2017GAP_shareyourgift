(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var indexCtrl = {
    init: function(){
        var fbBack = $.getUrlParam('fb_back');
        if(fbBack != '' && fbBack !== undefined && fbBack !== null){
            gaclick('m-click-share_tracking');
        };

        $('.btn_gold').on('click', function(event){
            event.preventDefault();
            indexCtrl.startClick();
        });
    },
    startClick: function(){
        if (isMobile.apple.tablet ||
            isMobile.android.tablet ||
            isMobile.windows.tablet) {
            location.href = 'inspiration.html';
        }else{
            location.href = '../fla/ribbon/ribbon_canvas.html';
        }
    }
}

$(function(){
    indexCtrl.init();
});