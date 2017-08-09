(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFBA2C",
	manifest: []
};



// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["ribbon_canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sha = function() {
	this.spriteSheet = ss["ribbon_canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXhLIEvAAIiYCXg");
	this.shape.setTransform(15.2,7.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.4,15.2);


(lib.sha_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sha();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,680,680);


(lib.ru3skdk = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#880000","#9D0000","#F70000","#AA0000"],[0,0.557,0.769,1],0,5.3,0,-5.8).s().p("AhCAOQgEgpAJgVQAGgNAZAFQAeAGAHgCQAUgGAZABIgBARQABATAJAMQAMANgGAVQgGAVgSgBQgOgBgaAGQgfAHgMACIgDAAQgUAAgDgtg");
	this.shape.setTransform(6.9,5.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,11.8);


(lib.J002 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#880000","#FF0000","#AA0000"],[0,0.753,1],10,5,-16.7,-2.1).s().p("ABRB2QhFgDhKgcQglgOg8ADIg1AFQAJgLAYhaQAWhTAXgKQAdgNBBAcQA+AcAzAvQAqAlAmAOQATAIAKgBIAZAUQARAYgiATQgjAUg4AAIgSAAg");
	this.shape.setTransform(-19.7,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#990000","#FF1111"],[0,1],0.3,-3.8,-0.6,6.6).s().p("AgMA5QhDgDhEgWQhTgaAWgdQAWgeBCgDQAZAABNAHQB8ALAcAEQBrARgmAcQgmAMguAMQhXAWgnAAIgFAAg");
	this.shape_1.setTransform(-20.1,1.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-20.6,43.1,28.2);


(lib.J001 = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#880000","#FF0000","#AA0000"],[0,0.761,1],-2.7,3.5,14.3,-4.5).s().p("Ai3CAQgkgNANgbIAVgYIAcgLQAjgUAkgsQArg3A5gmQA8gmAfAIQAXAGAiBPQAmBVAKAJQgWAAgdADQg6AHgjAUQhEAohEAOQggAHgcAAQgeAAgXgIg");
	this.shape.setTransform(19.4,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A20000","#EE0000"],[0,1],-1,-0.9,8.4,9.2).s().p("AhuA9IhWgLQgpgXBmgfICTgnQBLgSAYgDQBBgHAaAaQAbAchOAkQhAAghBAMQgSAEgaAAQgkAAg0gGg");
	this.shape_1.setTransform(19.7,-2.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,-24.1,42.3,28.7);


(lib.GOLDNOISE = function() {
	this.initialize();

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["ribbon_canvas_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-49,-49)).s().p("Eg6lBoNMAAAjQaMB1KAAAMAAADQag");
	this.shape.setTransform(375,667);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.Bowl001 = function() {
	this.initialize();

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BB0000","#FF0909","#430000","#D50000","#FF2B2B","#F70000","#DD0000","#FF1111"],[0.008,0.125,0.353,0.584,0.69,0.784,0.882,1],29.6,47.3,-26,-49.6).s().p("AB9E9QgOgZjjllQjXlRhPhnIB+gsQAsAwIMMPQAeAwBhBvIhvADIgNBqQh/ingjhCg");
	this.shape.setTransform(-6.6,-9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.7,-64.9,82.3,110.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(10.8,6.5,0.71,0.857,0,0,0,15.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.3},4).to({y:6.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,13);


(lib.Bow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.instance = new lib.ru3skdk();
	this.instance.setTransform(-1.1,1.6,1.414,1.414,0,0,0,6.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1.5,x:1.5,y:2.1},14).to({regX:7,scaleX:0.53,scaleY:1.45,skewX:6.9,skewY:6.5,x:2.3,y:3.7},4).to({_off:true},1).wait(51));

	// 結002
	this.instance_1 = new lib.J002("synched",0);
	this.instance_1.setTransform(-3,2.4,1.414,1.414);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.28,scaleY:0.5,skewY:-7.3,x:3.4,y:5.7},14).to({_off:true},1).wait(55));

	// 結001
	this.instance_2 = new lib.J001("synched",0);
	this.instance_2.setTransform(1.4,1.4,1.414,1.414);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.41,scaleY:0.57,skewY:12.3,x:-5.3,y:4.3},14).to({_off:true},1).wait(55));

	// 圖層 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvBCpQGDjsGLj3IAVgNQMpn7A+gtQA+gtC7jXIgQC1IgCAHQgLAjgzBaQg4BjgiAkQgTAWgqFjQgZDagiFUQgrHEgnG8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-95.9,y:108.1}).wait(19).to({graphics:null,x:0,y:0}).wait(51));

	// 圖層 16
	this.instance_3 = new lib.Bowl001("synched",0);
	this.instance_3.setTransform(-0.8,3.7,1.257,1.35,72);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.89,scaleY:0.96,x:-37.6,y:48.7},14).to({scaleX:0.9,scaleY:0.98,x:-43.2,y:55.4},4).to({_off:true},1).wait(51));

	// 圖層 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AvKrAQg5h9AVgvIgFhxQC/CWBUBaQGAEuGgECQHHEXHuDjI3tKhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:102.7,y:94.3}).wait(19).to({graphics:null,x:0,y:0}).wait(51));

	// 緞帶頭001
	this.instance_4 = new lib.Bowl001("synched",0);
	this.instance_4.setTransform(4.2,1.1,1.414,1.414);

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-6.6,regY:-9.9,scaleX:1.41,scaleY:1.41,x:-5,y:-12.7},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:-4.5,y:-11.8},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-3.6,y:-10.4},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-2.4,y:-8.4},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-0.8,y:-5.9},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:1.1,y:-2.8},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:3.5,y:0.8},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:6.1,y:5.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:9.1,y:9.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:12.4,y:15.2},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:16.1,y:21.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:20.2,y:27.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:24.6,y:34.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:36,y:52.1},0).to({scaleY:1.02,skewX:-1.2,x:43.6,y:63.4},4).to({_off:true},1).wait(51));

	// 圖層 14
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BB0000","#FF0909","#973535","#D50000","#FF2B2B","#F70000","#FF1111","#B80000"],[0.008,0.125,0.353,0.584,0.69,0.784,0.898,1],-27.4,41,39.4,-43.3).s().p("AkqGdIhkAUQB1icAxgxQAUgUEFkpQCIiaBrhmQBdhZANhHIAACdQAJA5hnBzQhoByljGeQgkAohLByg");
	this.shape.setTransform(-39.2,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BB0000","#FF0909","#973535","#D50000","#FF2B2B","#F70000","#FF1111","#B80000"],[0.008,0.125,0.353,0.584,0.69,0.784,0.898,1],-27.4,41,39.4,-43.3).s().p("AkqGdIhkAUQB6iaAuguQAVgWD9kSQCXidBlhwQBZhmANhHIAACdQAIBFhlB4QhlB4lnGHQgkAohLByg");
	this.shape_1.setTransform(-39.6,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BB0000","#FF0909","#973535","#D50000","#FF2B2B","#F70000","#FF1111","#B80000"],[0.008,0.125,0.353,0.584,0.69,0.784,0.898,1],-27.4,41,39.4,-43.3).s().p("AkqGdIhkAUQB+iYArgsIEOkVQCjifBgh5QBVhxANhIIAACdQAHBQhiB9QhiB8lsFzQgkAohLByg");
	this.shape_2.setTransform(-40,53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BB0000","#FF0909","#973535","#D50000","#FF2B2B","#F70000","#FF1111","#B80000"],[0.008,0.125,0.353,0.584,0.69,0.784,0.898,1],-27.4,41,39.4,-43.3).s().p("AkqGdIhkAUQCCiXAogpIEJkFQCvihBbiBQBSh7ANhIIAACdQAFBahfCBQhgCAlvFhQgkAohLByg");
	this.shape_3.setTransform(-40.3,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#BB0000","#FF0909","#973535","#D50000","#FF2B2B","#F70000","#FF1111","#B80000"],[0.008,0.125,0.353,0.584,0.69,0.784,0.898,1],-27.4,41,39.4,-43.3).s().p("AkqGdIhkAUICvixQAegfDZipQDbinBHigQBHigANhKIAACdQABB/hWCQQhXCOl9EfQgkAohLByg");
	this.shape_4.setTransform(-41.6,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},19).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},30).to({state:[]},7).wait(10));

	// 緞帶頭001
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#BB0000","#FF0909","#973535","#D50000","#FF2B2B","#F70000","#DD0000","#FF1111"],[0,0.067,0.251,0.584,0.69,0.784,0.882,1],-29.9,-43.4,30.8,49.8).s().p("ABzFoQgbgwiqkKQiskJg+hKQg+hLgMgxIAAidQA0BTBpBTQDjDiEPHpQAeAxBgBuIhvADIgMBqQh/imgagxg");
	this.shape_5.setTransform(39.8,51.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BB0000","#F90707","#A92F2F","#DC0303","#FF2626","#F80303","#E30303","#FF1111"],[0,0.145,0.38,0.655,0.745,0.824,0.902,1],-30.4,-43.1,30.3,50.1).s().p("ABoFrIjHkxQiqj+g7hUQg8hVgMgxIAAieQA0BTBjBdQDPD1EmHLQAiAyBrBnIh5AGIgDBqQiJiigggwg");
	this.shape_6.setTransform(45.1,58.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BB0000","#F40606","#B92929","#E30606","#FF2222","#FA0606","#E80606","#FF1111"],[0,0.216,0.498,0.722,0.792,0.855,0.922,1],-30.9,-42.9,29.8,50.3).s().p("ABfFuQglgwilj4Qioj1g5heQg4hegMgxIAAidQA0BTBbBlQC+EHE6GwQAmAyB0BgIiBAIIAEBqQiRidgkgvg");
	this.shape_7.setTransform(49.8,64.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BB0000","#EF0505","#C82424","#E90808","#FF1F1F","#FB0808","#ED0808","#FF1111"],[0,0.282,0.604,0.78,0.835,0.886,0.937,1],-31.3,-42.7,29.4,50.5).s().p("ABWFwQgogwikjvQimjug2hmQg3hlgMgyIAAidQA0BTBXBtQCtEWFNGYQAoA0B+BZIiIAKIAKBqQiZiYgpgwg");
	this.shape_8.setTransform(54.1,69.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BB0000","#DD0000","#FF1111"],[0,0.522,1],-32.9,-41.9,27.8,51.3).s().p("AA3F5Qg3gviejRQiejRguiEQgviFgLgxIAAidQA0BTBACLQBxFRGTE6QA1A4CdBCIilASIAlBqQi4iJg3gug");
	this.shape_9.setTransform(70,89.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},19).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},30).to({state:[]},7).wait(10));

	// 圖層 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BE0000","#D40000","#550000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-169.7,0,58.3,0).s().p("ApGBPIAAidISNAAIAACdg");
	this.shape_10.setTransform(58.6,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-169.7,0,58.3,0).s().p("ApGBPIAAidISNAAIAACdg");
	this.shape_11.setTransform(58.6,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-163.9,7.9,56.3,-2.7).s().p("AoygzQHrgiJ5gUIAACdQpwAJn0Atg");
	this.shape_12.setTransform(61.4,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-158.6,15,54.5,-5.1).s().p("AofgbQGWg/KpgoIAACeQqZAQmmBXg");
	this.shape_13.setTransform(63.9,9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-153.9,21.4,52.9,-7.3).s().p("AoPgFQFMhaLTg5IAACeQq9AXliB8g");
	this.shape_14.setTransform(66.1,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-136.2,45.4,46.7,-15.6).s().p("AnSBMQAwi/N1h4IAACgQtDAxhiEGg");
	this.shape_15.setTransform(74.6,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},19).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},30).to({state:[]},7).wait(10));

	// 圖層 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BE0000","#D40000","#3C0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-58.8,0,181.9,0).s().p("ApLBPIAAidISXAAIAACdg");
	this.shape_16.setTransform(-58.5,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-58.8,0,181.9,0).s().p("ApLBPIAAidISXAAIAACdg");
	this.shape_17.setTransform(-58.5,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-58.2,-2.6,180.4,6).s().p("ACtA7QlrgDmHASIgBidQGUgMF3ADQDYACCqAZIAACfQi4gfjigEg");
	this.shape_18.setTransform(-58.4,5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-57.7,-5,179,11.3).s().p("AC1AqQlggHmWAjIgBidQGigWFqAEQDoAFCQAwIABCfQicg7jygGg");
	this.shape_19.setTransform(-58.3,8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-57.3,-7.1,177.8,16.1).s().p("AC9AZQlXgJmiAyIgCidQGtggFgAHQD3AGB5BFIABCfQiDhTkAgKg");
	this.shape_20.setTransform(-58.2,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-55.6,-15.4,173.2,33.9).s().p("ADZglQk1gUnVBpIAAidQHahEE4AOQE5APAYCbIAACfQgji3k2gUg");
	this.shape_21.setTransform(-57.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},19).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},30).to({state:[]},7).wait(10));

	// 圖層 5 複製
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#BE0000","#D40000","#4A0000","#E50000","#C40000"],[0,0.333,0.58,0.89,1],0,-144.5,0,442.1).s().p("AhJV+MAAAgr7ICTAAMAAAAr7g");
	this.shape_22.setTransform(-0.8,26.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],0,-144.5,0,442.1).s().p("AhJV+MAAAgr7ICTAAMAAAAr7g");
	this.shape_23.setTransform(-0.8,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-0.8,-144.3,-0.8,441.9).s().p("AhRV+QAjz7gj4AICSAAQAjYIgiTzg");
	this.shape_24.setTransform(0.9,26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-1.7,-144.1,-1.7,441.8).s().p("AhYV+QBCyEhD53ICSAAQBCaFhBR2g");
	this.shape_25.setTransform(2.4,26.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-2.4,-144,-2.4,441.7).s().p("AhfV+QBfwahg7hICSAAQBeb2hcQFg");
	this.shape_26.setTransform(3.8,26.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#BE0000","#D40000","#AA0000","#E50000","#C40000"],[0,0.153,0.51,0.89,1],-5.2,-143.4,-5.2,441.2).s().p("Ah4V+UADHgKKgDKghxICTAAUADGAidgDDAJeg");
	this.shape_27.setTransform(8.9,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},19).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},1).to({state:[{t:this.shape_27}]},30).to({state:[]},7).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,-114.3,234.3,281.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVCKIAAjnIhwAAIAAggIEMAAIAAAgIh/AAIAAAkQAlARBKAoIgTAdQhDgogZgMIAAChgAmQCJIAAhyIgZAUIgKgdQAsgfAVgtIAbANQgPAdgLANIAACQgACwCIIgHgfIAYACQAFAAACgCQADgDAAgFIAAg+IgiAMIgIggQATgEAXgIIAAg7IgmAAIAAgdIAmAAIAAg0IAfAAIAAA0IAfAAIAAAdIgfAAIAAAwIAegOIAAAdIgeAPIAABTQAAAIgBAGQgCAGgEADQgEAEgGACQgGACgIAAgAliCEIAAgdIBTAAIAAhHIhCAAIAAgdIBCAAIAAg9IhKAAIAAgfIBJAAQgJgUgMgUIAfgIQARAiAFAOIBJAAIAAAfIhJAAIAAA9IBBAAIAAAdIhBAAIAABHIBQAAIAAAdgAEGB/IAAgfIBcAAQAJgeAJgkIAPhOIAeAIQgGAmgIAhQgIAigKAfIA1AAIAAAfgAEbgkIAdgKQAQBPAHAwIgdAIQgGgsgRhRgAm1hDQANgKAWgXQAJgMAPgZIAcAMQgXAxg3AngAEOg/IAAgdIBBAAQgGgWgHgRIAggGIAMAtIBBAAIAAAdg");
	this.shape.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// Layer 5
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(0,42.6,1,1,0,0,0,10.8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AJ1AAQAAEEi5C4Qi4C5kEAAQkDAAi4i5Qi5i4AAkEQAAkDC5i4QC4i5EDAAQEEAAC4C5QC5C4AAEDg");
	this.shape_1.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-65.4,129.9,129.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol7();
	this.instance.setTransform(63,63.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:264.2},10,cjs.Ease.get(-1)).to({scaleX:0.24,scaleY:0.24,alpha:0},3).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().p("AB4a/MAAAgiTIEEAAMAAAAiTg");
	var mask_graphics_3 = new cjs.Graphics().p("AiBQ/MAAAgh9IECAAMAAAAh9g");
	var mask_graphics_4 = new cjs.Graphics().p("AiBQfMAAAgg9IECAAMAAAAg9g");
	var mask_graphics_5 = new cjs.Graphics().p("AiBPpIAA/SIECAAIAAfSg");
	var mask_graphics_6 = new cjs.Graphics().p("AiBOeIAA88IECAAIAAc8g");
	var mask_graphics_7 = new cjs.Graphics().p("AiBM+IAA57IECAAIAAZ7g");
	var mask_graphics_8 = new cjs.Graphics().p("AiBLIIAA2PIECAAIAAWPg");
	var mask_graphics_9 = new cjs.Graphics().p("AiBI9IAAx5IECAAIAAR5g");
	var mask_graphics_10 = new cjs.Graphics().p("AiBGcIAAs3IECAAIAAM3g");
	var mask_graphics_11 = new cjs.Graphics().p("AiBDmIAAnLIECAAIAAHLg");
	var mask_graphics_12 = new cjs.Graphics().p("AB4aVIAAg2IEEAAIAAA2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:38.1,y:172.8}).wait(1).to({graphics:mask_graphics_3,x:63.2,y:236.7}).wait(1).to({graphics:mask_graphics_4,x:63.2,y:239.7}).wait(1).to({graphics:mask_graphics_5,x:63.2,y:244.6}).wait(1).to({graphics:mask_graphics_6,x:63.2,y:251.5}).wait(1).to({graphics:mask_graphics_7,x:63.2,y:260.4}).wait(1).to({graphics:mask_graphics_8,x:63.2,y:271.2}).wait(1).to({graphics:mask_graphics_9,x:63.2,y:284.1}).wait(1).to({graphics:mask_graphics_10,x:63.2,y:298.9}).wait(1).to({graphics:mask_graphics_11,x:63.2,y:315.7}).wait(1).to({graphics:mask_graphics_12,x:38.1,y:168.6}).wait(4));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQGmQgHgHAAgLIAAgdQAAgLAHgHQAHgHAJAAQAKAAAIAHQAGAHAAALIAAAdQAAALgGAHQgIAIgKAAQgJAAgHgIgAgQElQgHgIAAgKIAAgfQAAgKAHgHQAHgIAJABQAKgBAIAIQAGAHAAAKIAAAfQAAAKgGAIQgIAGgKAAQgJAAgHgGgAgQCiQgHgHAAgLIAAgdQAAgLAHgHQAHgHAJgBQAKABAIAHQAGAHAAALIAAAdQAAALgGAHQgIAIgKAAQgJAAgHgIgAgQAhQgHgIAAgKIAAgdQAAgKAHgHQAHgIAJABQAKgBAIAIQAGAHAAAKIAAAdQAAAKgGAIQgIAGgKABQgJgBgHgGgAgQhgQgHgHAAgLIAAgeQAAgKAHgHQAHgIAJAAQAKAAAIAIQAGAHAAAKIAAAeQAAALgGAHQgIAIgKgBQgJABgHgIgAgQjhQgHgIAAgKIAAgeQAAgLAHgHQAHgHAJAAQAKAAAIAHQAGAHAAALIAAAeQAAAKgGAIQgIAGgKABQgJgBgHgGgAgQlkQgHgHAAgLIAAgeQAAgKAHgHQAHgIAJAAQAKAAAIAIQAGAHAAAKIAAAeQAAALgGAHQgIAIgKgBQgJABgHgIg");
	this.shape.setTransform(62.7,284.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQIoQgHgHAAgLIAAgeQAAgKAHgHQAHgIAJAAQAKAAAIAIQAGAHAAAKIAAAeQAAALgGAHQgIAIgKgBQgJABgHgIgAgQGmQgHgHAAgKIAAgeQAAgLAHgHQAHgHAJAAQAKAAAIAHQAGAHAAALIAAAeQAAAKgGAHQgIAIgKAAQgJAAgHgIgAgQElQgHgIAAgKIAAgfQAAgKAHgHQAHgIAJAAQAKAAAIAIQAGAHAAAKIAAAfQAAAKgGAIQgIAGgKAAQgJAAgHgGgAgQCiQgHgHAAgLIAAgdQAAgLAHgHQAHgHAJAAQAKAAAIAHQAGAHAAALIAAAdQAAALgGAHQgIAIgKAAQgJAAgHgIgAgQAhQgHgIAAgKIAAgdQAAgKAHgHQAHgIAJABQAKgBAIAIQAGAHAAAKIAAAdQAAAKgGAIQgIAGgKAAQgJAAgHgGgAgQhgQgHgHAAgLIAAgdQAAgLAHgHQAHgHAJgBQAKABAIAHQAGAHAAALIAAAdQAAALgGAHQgIAIgKAAQgJAAgHgIgAgQjhQgHgIAAgKIAAgfQAAgKAHgHQAHgIAJABQAKgBAIAIQAGAHAAAKIAAAfQAAAKgGAIQgIAGgKABQgJgBgHgGgAgQlkQgHgHAAgLIAAgdQAAgLAHgHQAHgIAJAAQAKAAAIAIQAGAHAAALIAAAdQAAALgGAHQgIAIgKgBQgJABgHgIgAgQnlQgHgIAAgKIAAgeQAAgLAHgHQAHgHAJAAQAKAAAIAHQAGAHAAALIAAAeQAAAKgGAIQgIAGgKABQgJgBgHgGg");
	this.shape_1.setTransform(62.7,181.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},13).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-2,155,329.5);


// stage content:



(lib.ribbon_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 往下拉
	this.instance = new lib.Symbol6("single",0);
	this.instance.setTransform(387,994,1.27,1.27,0,0,0,62.9,171.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({mode:"synched",loop:false},0).to({_off:true},30).wait(56));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg6lBoNMAAAjQaMB1KAAAMAAADQag");
	var mask_graphics_19 = new cjs.Graphics().p("Eg6lBoNMAAAjQaMB1KAAAMAAADQag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:375,y:667}).wait(19).to({graphics:mask_graphics_19,x:375,y:667}).wait(86));

	// Layer 3
	this.instance_1 = new lib.Bow("single",0);
	this.instance_1.setTransform(387.4,543.6,4.716,4.716);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({mode:"synched",loop:false},0).wait(23).to({startPosition:53},0).to({alpha:0,startPosition:59},6).to({_off:true},1).wait(56));

	// Layer 4
	this.instance_2 = new lib.sha_1("synched",0);
	this.instance_2.setTransform(392,572.3,1,1,0,0,0,340,340);
	this.instance_2.alpha = 0.398;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({startPosition:0},0).wait(23).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(56));

	// bg
	this.instance_3 = new lib.GOLDNOISE();

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({alpha:0},6,cjs.Ease.get(0.96)).to({_off:true},1).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;