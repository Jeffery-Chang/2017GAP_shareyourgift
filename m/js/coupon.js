var couponCtrl = {
    loadInfo: function(){
        gapage('m_3_coupon');
        
        setTimeout(function(){
            alert('您可以「儲存」此圖當作優惠劵');
        }, 300);


        $('.fb_btn').on('click', function(event){
            gaclick('m_fb_share');
            event.preventDefault();
            couponCtrl.fbClick();
        });
    },
    fbClick: function(){
        var okUrl = 'http://gaptaiwan.com.tw/shareyourgift/index.html?fb_back=1';
        window.open('http://m.facebook.com/sharer.php?u=' + encodeURIComponent(okUrl), 'sharer', 'toolbar=0,status=0,width=656,height=436');
    }
}

$(function(){
    couponCtrl.loadInfo();
});