<template>
	<div class="container">
		<div class="nav">
			<a href="https://yrt.m.yhd.com/signforcoin/index" v-for="m in manus">
				<div class="icon_box">
					<div class="pic">
						<img alt="天天签到" :src="m.url">
					</div>
					<span class="tips" v-text="m.tips"></span>
				</div>
				<span class="title" style="color:#4A4A4A" v-text="m.content"></span>
			</a>
		</div>
		<div class="hot-tit-box">
			<div class="hot-titimg">
				<img src="../assets/nav/rollTips.png" alt="" width="64px" />
			</div>
			<div class="swiper-container swiper-no-swiping swiper2">
				<ul class="swiper-wrapper">
					<li class="swiper-slide" v-for="(r,index) of rollTips" :key="index">
						<a href="https://pro.yhd.com/yhd/active/3sb39vtHejHTQQzYtxdKyBDAMEGj/index.html" class="item-link J-ping" v-text="r"></a>
					</li>
				</ul>
			</div>
			<span class="icon-right_arrow"> > </span>
</div>
<a href="//vip.yhd.com/h5/giftActivity/1//toIndex.do" class="super-brand-item">
			<img src="../assets/nav/super-brand-item0.gif" alt="."><img src="../assets/nav/super-brand-item1.gif" alt=".">
		</a>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import '../../node_modules/swiper/dist/css/swiper.css'
	export default {
		data() {
			return {
				manus: [{
					url: 'src/assets/nav/nav0.gif',
					content: '天天签到',
					tips: '领钱'
				}, {
					url: 'src/assets/nav/nav1.gif',
					content: '全民抽奖',
					tips: '抽大'
				}, {
					url: 'src/assets/nav/nav2.png',
					content: '领券中心',
					tips: ''
				}, {
					url: 'src/assets/nav/nav3.png',
					content: '9块9',
					tips: ''
				}, {
					url: 'src/assets/nav/nav4.png',
					content: '充值中心',
					tips: ''
				}],
				rollTips: ['1号店最全金币玩法大升级啦！', '下午1点红包雨不见不散！']
			}
		},
		mounted() {
			var swiper1 = new Swiper('.swiper2', {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 30,
				mousewheel: true,
				autoplay: true, //可选选项，自动滑动
				speed: 300,
				loop: true

			});
		}
	}
</script>

<style scoped lang="scss">
	.nav {
		display: flex;
		margin-top: 0.05rem;
		text-align: center;
		justify-content: space-around;
		a {
			img {
				width: 0.53rem;
				height: 0.53rem;
			}
		}
		.icon_box {
			position: relative;
		}
		.tips {
			position: absolute;
			top: -0.08rem;
			right: -0.1rem;
			border: 1px solid red;
			background: red;
			color: white;
			border-radius: 50%;
			font-size: 0.08rem;
		}
	}
	
	.hot-tit-box {
		display: flex;
		height: 0.35rem;
		line-height: 0.35rem;
		font-size: 0.15rem;
		img {
			width: 0.64rem;
			height: 0.15rem;
			margin: 0 0.05rem;
		}
		.swiper2 {
			flex: 1;
			margin-left: 0.1rem;
			a {
				color: #000;
			}
		}
		.icon-right_arrow {
			margin-right: 0.1rem;
		}
	}
	.super-brand-item{
		display: flex;
		img{
			width: 50%;
			height: 1.25rem;
		}
	}
</style>