<template>
	<div>
		<fheader></fheader>
		<div class="goodDetail container">
			<div class="touchweb-com_header " style="font-size: 0.12rem;">
				<!-- left start -->
				<a id="back" href="javascript: void(0);" class="left icon-back" @click="toIndex"></a>
				<h1>商品详情</h1>

				<div class="menuBox">
					<span href="javascript: void(0);" class="menu_btn glyphicon glyphicon-option-horizontal" @click="showMenu"></span>

				</div>
				<ul class="menus" v-if="isShowMenu">
					<li v-for="m in menus">
						<router-link :to="m.page"><span :class="m.fontClassName" v-text="m.name"></span></router-link>
					</li>
				</ul>

			</div>
			<div class="goodInfo">
				<img :src="good.imageUrl" alt="" />
				<p v-text="good.name"></p>
				<p class="good-price"><span v-text="good.price" class="good-singlePrice" style="color: red; font-size: 0.18rem;"></span><span>降价通知</span></p>
				<p><span v-text="good.soldRate + '+评论['"></span><span>100%</span><span>好评]</span></p>
				<p>已选择
					<a href="javascript:void(0)" @click="goodTypeShow">白色</a>
				</p>
				<a href="javascript:void(0)">
					<deliveryAddress></deliveryAddress>
					<p>有货</p>
					<p>由 翻旧事旗舰店 从 浙江金华市 发货, 并提供售后服务. </p>
					<p>货到付款运费30元,在线支付免运费 </p>
				</a>
				<p>货到付款</p>
				<p>服务保障：<i class=""></i>支持七天无理由退货</p>
				<div></div>
			</div>
			<div class="shopInfo">
				<div>
					<img src="" alt="" />
					<h3></h3>
					<ul>
						<li v-for=""></li>
					</ul>
				</div>
				<div><i class=""></i>进入商铺</div>
			</div>
			<div>
				<p><span>搜索</span><span v-text="">翻旧事</span><span>相关产品</span><span> > </span></p>
			</div>
			<imgTextDetail></imgTextDetail>
			<goodfooter></goodfooter>
		</div>
		<gobackTop></gobackTop>
		<goodtype></goodtype>
	</div>
</template>

<script>
	import common from '../html/js/common.js'
	import fheader from '../components/Fheader.vue'
	import goodfooter from '../components/GoodFooter.vue'
	import deliveryAddress from '../components/DeliveryAddress.vue'
	import imgTextDetail from '../components/ImgTextDetail.vue'
	import gobackTop from '../components/GobackTop.vue'
	import goodtype from '../components/GoodType.vue'
	export default {
		data() {
			return {
				menus: [{
					name: '购物车',
					fontClassName: 'glyphicon glyphicon-shopping-cart',
					page: 'ShoppingCar'
				}, {
					name: '搜索',
					fontClassName: 'glyphicon glyphicon-search',
					page: 'Search'
				}, {
					name: '类目',
					fontClassName: 'glyphicon glyphicon-menu-hamburger',
					page: 'Classify'
				}, {
					name: '首页',
					fontClassName: 'glyphicon glyphicon-home',
					page: 'Index'
				}, {
					name: '我的1号店',
					fontClassName: 'glyphicon glyphicon-user',
					page: 'My'
				}],
				isShowMenu: false,
				good: {},
			}
		},
		components: {
			fheader,
			goodfooter,
			deliveryAddress,
			imgTextDetail,
			gobackTop,
			goodtype
		},
		methods: {
			showMenu() {
				this.isShowMenu = !this.isShowMenu;
			},
			toIndex() {
				this.$router.push('/Index');
			},
			goodTypeShow(){
				this.$store.dispatch('setGoodtypeShow',true);
			}
		},
		mounted() {
			this.good = JSON.parse(sessionStorage.getItem('goodInfo'));
			console.log(this.good.imageUrl);
			console.log(scrollY);
			window.scrollTo(0, 0);
		}
	}
</script>

<style scoped lang="scss">
	.menu_btn {
		position: absolute;
		right: 0;
		display: block;
		height: 0.44rem;
		line-height: 0.44rem;
		margin-right: 0.1rem;
		height: 0.2rem;
		font-size: 0.18rem;
		color: red;
	}
	
	.menus {
		position: absolute;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
		padding: 0 0.05rem;
		li {
			border-bottom: 1px solid #CCCCCC;
			span {
				display: block;
				line-height: 0.44rem;
				font-size: 0.14rem;
				color: #FFFFFF;
				padding: 0 0.2rem;
				letter-spacing: 0.03rem;
			}
			&:last-child {
				border: 0 none;
			}
		}
	}
	
	.goodInfo {
		img {
			width: 100%;
			height: 2rem;
		}
		.good-price{
			display: flex;
			justify-content: space-between;
			.good-singlePrice:before{
				content: '￥';
			}	
			span:nth-child(2){
				display: block;
				text-align: center;
				width: 0.8rem;
				line-height: 0.24rem;
				border: 0.01rem solid #CCCCCC;
				border-radius: 0.2rem;
			}
		}
		p{
			padding:0 0.1rem;
		}
	}
</style>