<<<<<<< HEAD
//轮播接口
$(function(){
	$.ajax({
		url:api+'list',
		type:'get',
		dataType:'json',
		success:function(res){
			let html = '';
			let html1='';
			let html2='';
			console.log(res)
			let item =res.data
			//产品选型 产品
			for(let i in item){
				html+=`
				<div class="fly-swiper-list fly-swiper-slide fly-show-bottom scroll-watch-in-view">
					<div class="product-wrpper">
						<div class="overflow-only fly-product-pro">
							<a href="fly-product-detail.html">
								<img src="${item[i].img}"/>
								<!--效果遮罩-->
								<div class="intro transition-short">
									<h4>${item[i].nam}</h4>
									<p>${item[i].intro}</p>
								</div>
							</a>
						</div>
						<div class="product-bottom overflow">
							<div class="fly-title-box">
								<p class="product-title transition-short">${item[i].c_name}</p>
								<p class="product-text">${item[i].nam}</p>
							</div>
							<div class="product-sale transition-short">立即购买</div>
						</div>
					</div>
				</div>
			`
			}
			
			$('.fly-shop').append(html)
			
			//产品选型产品轮播
			for(let i in item){
				html1+=`
				<div class="fly-swiper-list fly-swiper-slide fly-show-bottom scroll-watch-in-view">
					<div class="product-wrpper">
						<div class="overflow-only fly-product-pro">
							<a href="fly-product-detail.html">
								<img src="${item[i].img}"/>
								<!--效果遮罩-->
								<div class="intro transition-short">
									<h4>${item[i].nam}</h4>
									<p>${item[i].intro}</p>
								</div>
							</a>
						</div>
						<div class="product-bottom overflow">
							<div class="fly-title-box">
								<p class="product-title transition-short">${item[i].c_name}</p>
								<p class="product-text">${item[i].nam}</p>
							</div>
							<div class="product-sale transition-short">立即购买</div>
						</div>
					</div>
				</div>
			`
			}
			$('.fly-choose-product').append(html1)
			$.lunboS($('.carousel-box .fly-swiper-list'),$('.carousel-box .fly-dot-box'))
			
			//首页产品轮播
			for(let i in item){
				html2+=`
					<div>
						<div>
							<div class="img">
								<img src="${item[i].img}" alt="" />
							</div>
							<div class="intro">
								<p class="name">${item[i].c_name}</p>
								<p class="fontc-ccc cname">${item[i].nam}</p>
							</div>
						</div>
					</div>`
			
			}
			$('.shop-carosol-inner').append(html2)
			
		}
	})

})
=======
$.ajax({
	url:'http://192.168.97.249:3003/'+'list',
	type:'get',
	dataType:'json',
	success:function(res){
		let list =res.list
		let html = '';
		console.log(res)
		let item =res.data
//			console.log(res)
		for(let i in item){
			html+=`
			<div class="fly-swiper-list fly-swiper-slide fly-show-bottom scroll-watch-in-view">
				<div class="product-wrpper">
					<div class="overflow-only fly-product-pro">
						<a href="javascript:;">
							<img src="${item[i].img}"/>
							<!--效果遮罩-->
							<div class="intro transition-short">
								<h4>${item[i].nam}</h4>
								<p>${item[i].intro}</p>
							</div>
						</a>
					</div>
					<div class="product-bottom flex-betwe">
						<div>
							<p class="product-title transition-short">${item[i].c_name}</p>
							<p class="product-text">${item[i].nam}</p>
						</div>
						<div class="product-sale transition-short">立即购买</div>
					</div>
				</div>
			</div>
		`
		}
		$('.fly-shop').append(html)
		
		for(let i in item){
			html+=`
			<div class="fly-swiper-list fly-swiper-slide fly-show-bottom scroll-watch-in-view">
				<div class="product-wrpper">
					<div class="overflow-only fly-product-pro">
						<a href="javascript:;">
							<img src="${item[i].img}"/>
							<!--效果遮罩-->
							<div class="intro transition-short">
								<h4>${item[i].nam}</h4>
								<p>${item[i].intro}</p>
							</div>
						</a>
					</div>
					<div class="product-bottom flex-betwe">
						<div>
							<p class="product-title transition-short">${item[i].c_name}</p>
							<p class="product-text">${item[i].nam}</p>
						</div>
						<div class="product-sale transition-short">立即购买</div>
					</div>
				</div>
			</div>
		`
		}
		$('.fly-choose-product').append(html)
		
	}
	})
>>>>>>> fd78cd289bec7828bf3875e288ba4c974e92a129
