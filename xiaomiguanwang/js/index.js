// JavaScript Document

//当鼠标移入购物车块，触发
$(".shopCart").hover(function(){
	$(this).find("img").attr("src","images/shopCart2.png");
	$(this).find(".cartBuy").stop(true,false).slideDown(300);
},function(){
	$(this).find("img").attr("src","images/shopCart.png");
	$(this).find(".cartBuy").stop(true,false).slideUp(300);
});

//当鼠标移入搜索框块，触发
$(".text").hover(function(){
	$(this).next().addClass("hover");
},function(){
	$(this).next().removeClass("hover");
});

//当搜索框获取焦点，触发
$(".text").focus(function(){
	$(".keywords").hide();	
	$(".products").stop(false,true).slideUp();
});
//当搜索框失去焦点，触发
$(".text").blur(function(){
	$(".keywords").show();	
});

//当鼠标移入菜单栏，触发
var _index=0;
$("ul.meun li a").hover(function(){
	_index=$("ul.meun li a").index(this);
	if(_index<6){
		$(".products").stop(false,true).slideDown();
		$("ul.type").eq(_index).stop(false,true).show().siblings().hide();
	}
	if(_index>5){
		$(".products").stop(false,true).slideUp();
	}
});

//当鼠标移出展示产品价格，触发
$(".banner").hover(function(){
	$(".products").stop(false,true).slideUp();
});

var _index2=0;
$(".list p").hover(function(){
	_index2=$(".list p").index(this);
	$(".list_con").eq(_index2).show().siblings(".list_con").hide();
});

$("ul.banner,ul.banner li:lt(5) img").hover(function(){
	$(".list_con").eq(_index2).hide();
});

$("header header").hover(function(){
	$(".products").stop(false,true).slideUp();
});

$(".banner li").eq(0).show().siblings("li").hide();

_index=0;
//自动播放定时器
var timePlay=null;
function autoPlay(){
	timePlay=setInterval(function(){
		if(_index<4){
			_index++;
			$(".banner li").eq(_index).fadeIn().siblings("li").fadeOut();
			$(".but a").eq(_index).addClass("hover").siblings().removeClass("hover");
		}else{
			$(".banner li").eq(0).fadeIn().siblings("li").fadeOut();
			$(".but a").eq(0).addClass("hover").siblings().removeClass("hover");
			_index=0;		
		};
	},3000);
};
autoPlay();

//轮播图代码
//当鼠标点击右按钮，触发
$(".btn_r").click(function(){
	clearInterval(timePlay);
	if(_index<4){
		_index++;
		$(".banner li").eq(_index).fadeIn().siblings("li").fadeOut();
		$(".but a").eq(_index).addClass("hover").siblings().removeClass("hover");
		autoPlay();
	}else if(_index==4){
		_index=0;
		$(".banner li").eq(_index).fadeIn().siblings("li").fadeOut();
		$(".but a").eq(_index).addClass("hover").siblings().removeClass("hover");
		autoPlay();
	}
});

//当鼠标点击左按钮，触发
$(".btn_l").click(function(){
	clearInterval(timePlay);
	if(_index==0){
		_index=4;
		$(".banner li").eq(_index).fadeIn().siblings("li").fadeOut();
		$(".but a").eq(_index).addClass("hover").siblings().removeClass("hover");
		autoPlay();
	}else if(_index<=4){
		_index--;
		$(".banner li").eq(_index).fadeIn().siblings("li").fadeOut();
		$(".but a").eq(_index).addClass("hover").siblings().removeClass("hover");
		autoPlay();
	}
});

//当鼠标点
$(".but a:eq(0)").click(function(){
	clearInterval(timePlay);
	$(this).addClass("hover").siblings().removeClass("hover");
	$(".banner li").eq(0).fadeIn().siblings("li").fadeOut();
	_index=0;
	autoPlay();
});

$(".but a:eq(1)").click(function(){
	clearInterval(timePlay);
	$(this).addClass("hover").siblings().removeClass("hover");
	$(".banner li").eq(1).fadeIn().siblings("li").fadeOut();
	_index=1;
	autoPlay();
});

$(".but a:eq(2)").click(function(){
	clearInterval(timePlay);
	$(this).addClass("hover").siblings().removeClass("hover");
	$(".banner li").eq(2).fadeIn().siblings("li").fadeOut();
	_index=2;
	autoPlay();
});

$(".but a:eq(3)").click(function(){
	clearInterval(timePlay);
	$(this).addClass("hover").siblings().removeClass("hover");
	$(".banner li").eq(3).fadeIn().siblings("li").fadeOut();
	_index=3;
	autoPlay();
});

$(".but a:eq(4)").click(function(){
	clearInterval(timePlay);
	$(this).addClass("hover").siblings().removeClass("hover");
	$(".banner li").eq(4).fadeIn().siblings("li").fadeOut();
	_index=4;
	autoPlay();
});

var _index3=0;
//自动播放定时器
var timePlay2=null;
function autoPlay2(){
	timePlay2=setInterval(function(){
		if(_index3<1){
			$("ul.lunbo").animate({left:"-1240px"});
			$(".btn .next").addClass("click").siblings().removeClass("click");
			_index3++;
		}else{
			$("ul.lunbo").animate({left:"0px"});
			$(".btn .prev").addClass("click").siblings().removeClass("click");
			_index3=0;
		};
	},4000);
};
autoPlay2();

$(".btn .prev").click(function(){
	clearInterval(timePlay2);
	_index3=0;
	$("ul.lunbo").animate({left:"0px"});
	$(this).addClass("click").siblings().removeClass("click");
	autoPlay2();
});
$(".btn .next").click(function(){
	clearInterval(timePlay2);
	_index3=1;
	$("ul.lunbo").animate({left:"-1240px"});
	$(this).addClass("click").siblings().removeClass("click");
	autoPlay2();
});

var_index4=0;
$(".dp li").hover(function(){
	_index4=$(".dp li").index(this);
	//alert(_index4)
	$(".pinglun").eq(_index4).stop(true,false).animate({opacity:1,height:"75px"},"normal","linear");
},function(){
	$(".pinglun").eq(_index4).stop(true,false).animate({opacity:0.45,height:"0px"},"normal","linear");
});

//! function(){
//	var lis = document.querySelector('.dp').children;
//	var pre_li = lis[0];
//
//	for(var i = 0; i < lis.length; i++){
//		! function(idx){
//			lis[idx].onmouseover = function(e){
//				this.querySelector('.pinglun').style['height'] = '75px';
//				pre_li = this;
//			};
//
//			lis[idx].onmouseout = function(e){
//				pre_li.querySelector('.pinglun').style['height'] = '0px';
//			};
//		}(i);
//	}
//
//}();