$(".log-res>.title>.login-regis>div").click(function(){
	$(this).closest('.log-res').removeClass('on')
	$(this).closest('.log-res').siblings().addClass('on')
})