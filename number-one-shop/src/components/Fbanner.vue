<template>
	<!--<swiper :list="list"></swiper>-->
	<div class="banner">
		<div class="swiper-container swiper1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="l in list">
					<a l.url><img :src="l.img" alt="" style="height: 2.7rem;width: 100%;" width="100%"/></a>
				</div>
			</div>
			<div class="swiper-pagination" style="margin-bottom: 0.4rem;"></div>
			<!--左箭头-->
			<div class="swiper-button-prev"></div>
			<!--右箭头-->
			<div class="swiper-button-next"></div>
			
		</div>
	</div>
</template>

<script>
	//	import { Swiper } from 'vux';
	import Swiper from 'swiper';
	import '../../node_modules/swiper/dist/css/swiper.css';

	export default {
		data() {
			return {
				list: [{
					url: 'javascript:',
					img: './src/assets/index/banner0.jpg',
					title: ''
				}, {
					url: 'javascript:',
					img: './src/assets/index/banner1.jpg',
					title: ''
				}, {
					url: 'javascript:',
					img: './src/assets/index/banner2.jpg', // 404
					title: ''
				}, {
					url: 'javascript:',
					img: './src/assets/index/banner3.jpg', // 404
					title: ''
				}, {
					url: 'javascript:',
					img: './src/assets/index/banner4.jpg', // 404
					title: ''
				}],
				img: []
			}
		},
		created(){
//			init(){
			var self = this;
			$.ajax({
				type:"post",
				url:"http://10.3.135.40:3003/img",
				async:true,
				success(data){
//					console.log(data);
					self.img = data[0].img;
				}
			});
			
//			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper1', {
				autoplay: {
		            disableOnInteraction: false,
		            delay: 2500,
	         	},
				speed: 300,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				observer:true,//修改swiper自己或子元素时，自动初始化swiper 
				observeParents:true,//修改swiper的父元素时，自动初始化swiper 
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	}
</script>

<style scoped>
	.banner {
		height: 2.3rem;
		overflow: hidden;
	}
</style>