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