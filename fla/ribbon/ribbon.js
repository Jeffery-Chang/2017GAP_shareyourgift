var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images||{};
    ss = ss||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadFile({src:"images/ribbon_canvas_atlas_.json", type:"spritesheet", id:"ribbon_canvas_atlas_"}, true);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function resize() {
    var rr = 750 / window.innerWidth;

    stage.canvas.width = 750;
    stage.canvas.height = window.innerHeight * rr;
    var r = (window.innerWidth ) / window.innerHeight;
    var s;
    if(r > ( 750 / 1334 )){ s = window.innerHeight / 1334; }
    else{ s = window.innerWidth / 750; }

    var s1 = exportRoot;

    // 2016-11-17 +0.08是為了5.5吋
    var sc = ((r - 750 / 1334) * 1.3) + 0.08;
    if( sc == 0 ) sc = 0.057;

    // fix for pad
    if(screen.availWidth >= 550){
        var padrr = screen.availWidth / window.innerWidth;

        stage.canvas.width = screen.availWidth;
        stage.canvas.height = window.innerHeight * padrr;
        sc = sc * 1.4;
    }

    s = s + sc;
    s1.scaleX = s1.scaleY = s;

    var s1w = 750 * s;
    var s1h = 1334 * s;
    var ww = window.innerWidth;
    var hh = window.innerHeight;

    s1.y = s1.oy - (( s1h - hh ) * 1.5) / 2;
    s1.x = s1.ox - ( s1w - ww ) / 2;
    s1.gotoAndStop(20);

    //var btn = s1.instance;
    var btn = s1.instance_1.shape_22;
    var isCfaDwn = false;
    var px, py, dx, dy;
    var onFrame = null;
    var frame;
    var beginF = 21;
    var endF = 50;

    btn.on("mousedown",function(e){
        TweenMax.killTweensOf(s1);
        isCfaDwn = true;
        px = e.stageX;
        py = e.stageY;
        s1.gotoAndStop(20);
    });

    stage.on("pressmove",function(e){
        if( isCfaDwn ){
            var cx = e.stageX, cy = e.stageY;
            if( cy > py ){
                var btnRang = 650;

                if (isMobile.apple.tablet ||
                    isMobile.android.tablet ||
                    isMobile.windows.tablet) {
                    btnRang = 850;
                }

                var dis =  cy - py;
                var seed = dis / btnRang;
                frame = beginF + (endF - beginF) * seed;
                frame = Math.ceil(frame);

                if( onFrame != frame ){
                    onFrame = frame;
                    s1.gotoAndStop(frame);
                    if(frame >= endF - 20){
                        s1.play();
                        stage.off("pressmove");
                        stage.off("pressup");
                        var id = setInterval(function(){
                            if( s1.currentFrame == 50 ){
                                
                                clearInterval(id);

                                s1.gotoAndStop(75);
                                if (isMobile.apple.tablet ||
                                    isMobile.android.tablet ||
                                    isMobile.windows.tablet) {
                                    parent.$('.wrap').show();
                                    parent.$('.ribbon_content').fadeOut('fast',function(){
                                        effect.lightTurn(parent.$('.light'),effect.randomFunc(parent.$('.picture li'),parent.$('.slide li'),parent.$('.btn_gold')));
                                    });
                                }else{
                                    location.href = '../../m/inspiration.html';
                                }
                            }
                        }, 33);
                    }
                }
            }
        }
    });

    stage.on("pressup",function(e){
        isCfaDwn = false;
        if(frame < endF - 20){
            TweenMax.to(s1, .5, {
                easel:{ frame:20 },
                ease:Linear.easeNone,
                onComplete: function(){

                }
            });
        }
    });
}

function handleComplete(evt) {
    var queue = evt.target;
    ss["ribbon_canvas_atlas_"] = queue.getResult("ribbon_canvas_atlas_");

    exportRoot = new lib.ribbon_canvas();
    exportRoot.ox = exportRoot.x;
    exportRoot.oy = exportRoot.y;

    stage = new createjs.Stage(canvas);

    createjs.Touch.enable(stage);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    resize();
}