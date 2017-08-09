var menu = {
    // 2016-11-17 重置過init
    init: function(){
        menu.resize();
        
        $('#toggle').click(function() {
            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');
        });

        $('.overlay-menu li').on('click', function(event){
            event.preventDefault();
            var menuIndex = $(this).index();
            switch (menuIndex){
                case 0:
                    location.href = 'index.html';
                    break;
                case 1:
                    trackWaitJump('m_meun_regulations','activity.html');
                    break;
                case 2:
                    trackWaitJump('m_meun_stores','store.html');
                    break;
            }
        });
    },
    resize: function(){
        if (window.orientation === 180 || window.orientation === 0) {
            $('.turn').hide();
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            $('.turn').show();
        } 
    }
}

$(function(){
    menu.init();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", menu.resize , false);
});