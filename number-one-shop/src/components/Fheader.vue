<template>
	<div class="box" :class="this.$store.state.isHeaderShow ? 'animated fadeInDown' : 'animated fadeOutIn'" v-if="this.$store.state.isHeaderShow && headerShowState2">
		<!-- <a href="javascript:;" class="icon_close" id="icon-close"></a> -->
		<a href="javascript:" class="btn_download" id="openAppId">
			<div class="logo"><img src="//img30.360buyimg.com/pop/jfs/t20005/278/1980972592/7676/c839c260/5b63f035Ne178923f.png"></div>
			<div class="openCont">
				<div class="content">
					<div class="name">下载1号店APP</div>
					<div class="sale_text">赢188元新人礼包</div>
				</div>
			</div>
			<div class="icon_open">立即打开</div>
		</a>
	</div>
</template>

<script>
	import $ from 'jquery'
	import '../lib/bootstrap-3.3.7-dist/css/bootstrap.css'
	import '../../node_modules/animate.css/animate.css'
	export default {
		data() {
			return {
				headerShowState: true,
				headerShowState2: true,
			}
		},
		methods: {
			getHeaderShow() {
				//				console.log(this.$store.state.isHeaderShow)
				return this.$store.state.isHeaderShow;
			}

		},
		mounted() {
			var self = this;
			$(window).scroll(function() {
				if(window.scrollY > 1) {
//					self.headerShowState = false;
					setTimeout(()=>{
						self.headerShowState2=false
						self.$store.state.headerShowState2 = true;
					},100)
					
				}else{
//					self.headerShowState = true;
					self.$store.state.headerShowState2 = false;
					
					setTimeout(()=>{
						
						self.headerShowState2=true;
					},100)
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		#openAppId {
			height: 0.6rem;
			display: flex;
			font-size: 0.1rem;
			background: rgba(#CCCCCC, 0.3);
			/*position: fixed;*/
			z-index: 2;
			.logo {
				padding-left: 0.1rem;
				img {
					width: 0.6rem;
					height: 0.6rem;
				}
			}
			.openCont {
				flex: 1;
				padding: 0.1rem 0 0 0.1rem;
				color: #3d0609;
				letter-spacing: 0.02rem;
			}
			.icon_open {
				width: 0.96rem;
				background: #f73a49;
				text-align: center;
				line-height: 0.6rem;
				color: #FFFFFF;
			}
		}
	}
</style>