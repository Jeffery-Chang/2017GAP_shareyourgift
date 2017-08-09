var insCtrl = {
    itemIndex: '',
    init: function(){
        gapage('m_1_game');
        $('.btn_gold').on('click', function(event){
            event.preventDefault();
            insCtrl.goClick();
        });
        
        insCtrl.itemIndex = Math.floor(Math.random() * 7);
        $('.picture li').hide();
        if (isMobile.apple.tablet ||
            isMobile.android.tablet ||
            isMobile.windows.tablet) {
            $('.wrap').hide();
        }else{
            $('.ribbon_content').hide();
            effect.lightTurn($('.light'),effect.randomFunc($('.picture li'),$('.slide li'),$('.btn_gold')));
        }
        $('.picture li').eq(insCtrl.itemIndex).show();
    },
    goClick: function(){
        location.href = 'laydown.html?itemIndex=' + insCtrl.itemIndex;
    }
}

$(function(){
    insCtrl.init();
});