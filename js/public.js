//设置页面fontsize
let fontsize
let {log} = console
$(window).resize(function(){
	htmlFonts()
})
$(function(){
	// 页面加载完成之后设置一次html的fontsize
	let length = $('img').length
	$('img').on('load',function(){
		length--
		if(length<=0){
			htmlFonts()
		}
	})
	$(".survival-top .top-modal>ul>li").addClass('btn-center-slide')
	
	//顶部导航
	$(".survival-top .top-modal").mouseenter(function(){
		$(this).find('.list').stop(false).show(300)
	})
	$(".survival-top .top-modal").mouseleave(function(){
		$(this).find('.list').stop(false).hide(300)
	})
	
	//滚动页面时让顶部固定
	$(document).scroll(function(){
		//由滚动条设置顶部导航为固定定位
		if($(document).scrollTop()>=70){
			$(".survival-top").css({
				position: 'fixed',
				'box-shadow': '0 0 .1rem cadetblue'
			})
			$(".right-aside>div:last-child").show(300)
		}else{
			$(".survival-top").css({
				position: 'none',
				'box-shadow': 'none'
			})
			$(".right-aside>div:last-child").hide(300)
		}
	})
	
	$(".survival-top .top-modal.top-search a").click(function(){
		$(".survival-top>.my-model").stop().slideToggle(300)
	})
})
//设置fontsize的函数
function htmlFonts(){
	if(window.screen.availWidth<=768){
		fontsize = $(document).width()*200/1200
	}else{
		fontsize = $(document).width()*100/window.screen.availWidth
	}
	$('html').css('font-size',fontsize)
}