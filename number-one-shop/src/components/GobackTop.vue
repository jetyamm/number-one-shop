<template>
	<span class="goBackTop" @click="goBackTop"><i class="glyphicon glyphicon-upload"></i></span>
</template>

<script>
	export default {
		methods: {
			goBackTop() {
				let timer = setInterval(function() {
					// 计算缓冲速度（差值越大速度越大）
					let speed = window.scrollY / 5;

					scrollBy(0, -speed);

					if(window.scrollY <= 0) {
						clearInterval(timer);

						// 重置目标值
						scrollTo(0, 0);
					}
				}, 30);
			}
		},
		mounted(){
			// 回到顶部
			window.onscroll = () => {
				// 获取滚动过的距离
				let scrollTop = window.scrollY;

				if(scrollTop >= 100) {
					$('.goBackTop').css('display', 'block');
				} else {
					$('.goBackTop').css('display', 'none');
				}
			}
		}
	}
</script>

<style scoped>
	.goBackTop {
		font-size: 0.3rem;
		position: fixed;
		opacity: 0.7;
		bottom: 0.6rem;
		right: 0.1rem;
	}
</style>