var effect = {
    colorRnd:'',
    lightTurn: function(obj,cb){
        if (cb === void 0) { cb = null; }
        TweenMax.to(obj, .09, {
            backgroundColor: "rgba(255,255,255,0.8)",
            display: "block",
            ease: Power4.easeIn,
            delay: 0.3,
            repeat: 3,
            repeatDelay : 0.001,
            onComplete: function () {
                TweenMax.to(obj, .1, {
                    backgroundColor: "rgba(255,255,255,0)",
                    display: "none",
                    ease: Power0.easeIn,
                    onComplete: function () {
                        if (cb) cb();
                    }
                });
            }
        });
    },
    randomFunc:function(event,slideObj,stopObj){
        effect.colorRnd = Math.floor(Math.random() * 5);
        var picRandom = setInterval(function(){
            var cnt = parent.insCtrl.itemIndex + 1;
            // 2016-11-17 改成一個方向
            // var slideCnt = Math.floor(Math.random() * 4);
            var slideCnt = 3;
            var slideReal = slideObj.eq(slideCnt);
            var slideDir = slideObj.eq(slideCnt).attr('class');

            effect.BoardIn(slideReal,event,cnt,slideDir);

            stopObj.on('click', function(event){
                event.preventDefault();
                clearInterval(picRandom);
            });
        }, 2000);
    },
    BoardInit: function(){
        TweenMax.set(parent.$('.slide .top'), {
            top: "-100%"
        });
        TweenMax.set(parent.$('.slide .right'), {
            left: "100%"
        });
        TweenMax.set(parent.$('.slide .bottom'), {
            top: "100%"
        });
        TweenMax.set(parent.$('.slide .left'), {
            left: "-100%"
        });
    },
    BoardIn(obj,event,cnt,dir){
        var exefun;
        switch(dir){
            case 'top':
                exefun = function(){
                    effect.BoardTop(obj,0.5);
                }
                break;
            case 'right':
                exefun = function(){
                    effect.BoardRight(obj,0.5);
                }
                break;
            case 'bottom':
                exefun = function(){
                    effect.BoardBottom(obj,0.5);
                }
                break;
            case 'left':
                exefun = function(){
                    effect.BoardLeft(obj,0.5);
                }
                break;
        }

        // 2016-11-17 背景色輪播
        var colorRnd = effect.colorRnd;
        var colorArr = ['#fef3c3','#007f62','#ffba2c','#7baaad','#ff413a'];
        if(colorRnd > colorArr.length -1 ) colorRnd = 0;
        
        obj.css('backgroundColor',colorArr[colorRnd]);
        colorRnd++
        effect.colorRnd = colorRnd;

        TweenMax.to(obj, 0.5, {
            top: "0",
            left: "0",
            right: "0",
            ease: Power2.easeIn,
            onComplete: function () {
                event.eq(parent.insCtrl.itemIndex).fadeOut('fast', function(){
                    if(cnt > ($('.picture li').size() - 1) ) cnt = 0;
                    event.eq(cnt).fadeIn('slow');
                    parent.insCtrl.itemIndex = cnt;
                    cnt++;
                    exefun();
                });
            }
        });
    },
    BoardTop: function(obj, sec, cb) {
        if (sec === void 0) { sec = 0.5; }
        if (cb === void 0) { cb = null; }

        TweenMax.to(obj, sec, {
            top: "100%",
            ease: Power2.easeOut,
            onComplete: function () {
                effect.BoardInit();
            }
        });
    },
    BoardRight: function(obj, sec, cb) {
        if (sec === void 0) { sec = 0.5; }
        if (cb === void 0) { cb = null; }

        TweenMax.to(obj, sec, {
            left: "-100%",
            ease: Power2.easeOut,
            onComplete: function () {
                effect.BoardInit();
            }
        });
    },
    BoardBottom: function(obj, sec, cb) {
        if (sec === void 0) { sec = 0.5; }
        if (cb === void 0) { cb = null; }

        TweenMax.to(obj, sec, {
            top: "-100%",
            ease: Power2.easeOut,
            onComplete: function () {
                effect.BoardInit();
            }
        });
    },
    BoardLeft: function(obj, sec, cb) {
        if (sec === void 0) { sec = 0.5; }
        if (cb === void 0) { cb = null; }

        TweenMax.to(obj, sec, {
            left: "100%",
            ease: Power2.easeOut,
            onComplete: function () {
                effect.BoardInit();
            }
        });
    }
}