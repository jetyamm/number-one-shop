<template>
	<div class="fsearch" style="background: rgba(0,0,0,0.4);" :class="$store.state.headerShowState2 ? 'animated slideInUp' : ''">
		<div class="address" :class="isShow ? 'animated fadeInLeft' : 'animated fadeOutLeft'" :style="{'display' : isShow ? 'block' : 'none'}" v-if="isAdressShow">
			<img src="//img.yihaodianimg.com/front-homepage/mglobal/images/logo.png" style="width: 0.4rem;height: 0.4rem;">
			<a href="javascript:void(0)">
				<span id="cityName"><adresschose></adresschose></span>
			</a>
		</div>
		<div class="search form-group" :class="isMagnify ? 'animated zoomIn' : 'animated fadeInUp'" >
			<label class="sr-only" for="exampleInputAmount"></label>
			<div class="input-group">
				<div class="input-group-addon"><i class="glyphicon glyphicon-search"></i></div>
				<input type="text" class="form-control" id="exampleInputAmount" placeholder="抢1111金币 天天抽奖" @focus="hide" @blur="hide">
				<div class="input-group-addon"><i class="glyphicon glyphicon-remove-circle" ></i></div>
			</div>
			
		</div>
		<div class="lgAndCar" :class="isShow ? 'animated fadeInRight' : 'animated fadeOutRight'" :style="{'display' : isShow ? 'block' : 'none'}">
			<i class="glyphicon glyphicon-user" @click="toLoginPage"></i>
			<i class="glyphicon glyphicon-shopping-cart" @click="goShoppingCar"></i>
		</div>
		<button class="btn btn-default" type="submit" v-if="isBtnShow" @click="goIndex">搜索</button>
	</div>
</template>

<script>
	import '../lib/bootstrap-3.3.7-dist/css/bootstrap.css'
	import '../../node_modules/animate.css/animate.css'
	import adresschose from './AdressChose.vue'
	export default {
		data() {
			return {
				isShow: true,
				isMagnify: false,
				isAdressShow: true,
				isBtnShow: false
			}
		},
		components: {
			adresschose
		},
		methods: {
			toLoginPage() {
				this.$router.push('/login');
			},
			hide() {
				this.isShow = !this.isShow;
				this.isMagnify = !this.isMagnify;
				this.isBtnShow = !this.isBtnShow;
				this.$store.dispatch('setHeaderShow', !this.$store.state.isHeaderShow);
			},
			goShoppingCar(){
				this.$router.push('/shoppingcar')
			},
			goIndex(){
				this.$router.push('/index')
			}

		},
		mounted() {
			var self = this;
			$(window).scroll(function() {
				if(window.scrollY > 1) {
					$('.fsearch').css({
						"position": "fixed",
						"background": 'raba(255,255,255,0.5)'
					});
					$('.lgAndCar').css({
						"color": "red",
						"opacity": 0.5
					});
					self.isAdressShow = false;
				}else{
					$('.lgAndCar').css({
						"color": "#fff",
						"opacity": 1
					});
					self.isAdressShow = true;
				}

			})
		}
	}
</script>

<style lang="scss" scoped>
	.fsearch {
		display: flex;
		width: 100%;
		height: 0.45rem;
		background: rgba(0, 0, 0, 0);
		position: absolute;
		z-index: 2;
		justify-content: space-between;
		.address {
			margin: auto;
		}
		.search {
			flex: 1;
			margin: auto 0.05rem;
			width: 100%;
			border: 0 none;
			/*background: rgba(0,0,0,0);*/
		}
		.form-control,
		.input-group-addon {
			box-shadow: none;
			border: 0 none;
			color: none;
			background: #FFFFFF;
			/*background: rgba(0,0,0,0);*/
			margin: auto;
		}
		.form-control {
			border-radius: 0.2rem;
		}
		.lgAndCar {
			width: 0.68rem;
			text-align: center;
			background: rgba(0, 0, 0, 0);
			/*flex: 1;*/
			i {
				display: inline-block;
				width: 0.21rem;
				height: 0.21rem;
				line-height: 0.45rem;
				font-size: 0.2rem;
				margin: 0 0.05rem;
			}
		}
		.btn{
			/*display: none;*/
			margin: 0.05rem 0.05rem 0.05rem 0;
		}
	}
</style>