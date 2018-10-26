<template>
	<div class="know-you-like container">
		<h4>懂你想要</h4>
		<div class="item-box">
			<a class="item-link" href="../#/goodDetail" v-for="gl in goodList" @click="deliveryGood(gl)">
				<div class="pic-wrap"><img class="pic" :src="gl.imageUrl"></div>
				<div class="item-title" style="color: #000000;" v-text="gl.name"></div>
				<div class="item-bottom"><span style="color: red;">¥<span class="item-price" v-text="gl.price"></span></span>
					<a href="javascript:void(0)" class="find-similar" style="color: #C0C0C0;">找相似</a>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios';
	export default {
		data() {
			return {
				page: 1,
				goodList: []
			}
		},
		methods: {
			deliveryGood(good) {
				good = JSON.stringify(good);
				sessionStorage.setItem('goodInfo', good);
			},
		},
		mounted() {
			var self = this;
			Axios.get('http://10.3.135.40:3002/getIndexGood', {
					params: {
						siteType: this.page
					}
				})
				.then(function(response) {

					self.goodList = self.goodList.concat(response.data);
					self.goodList.map(function(e, i) {
						if(e.id === '') {
							self.goodList.splice(i, 1);
						}
					})

//											console.log(self.goodList);
				})
				.catch(function(error) {
					console.log(error);
				});
			// 回到顶部
			window.scrollTo(0, 0);
			
			// 滚动到底部自动加载信息
			$(window).scroll(function() {
				let scrollTop = $(this).scrollTop();
				let scrollHeight = $(document).height();
				let windowHeight = $(this).height();
				if(scrollTop + windowHeight === scrollHeight) {
					Axios.get('http://10.3.135.40:3002/getIndexGood', {
							params: {
								siteType: self.page++
							}
						})
						.then(function(response) {

							self.goodList = self.goodList.concat(response.data);
							self.goodList.map(function(e, i) {
								if(e.id === '') {
									self.goodList.splice(i, 1);
								}
							})

							//						console.log(self.goodList);
						})
						.catch(function(error) {
							console.log(error);
						});
				}
			})

		}
	}
</script>

<style scoped>
	.know-you-like {
		margin-bottom: 1rem;
	}
	
	h4 {
		font-weight: 999;
		/*font-size: 0.14rem;*/
		padding: 0.05rem 0.05rem;
	}
	
	.item-box {
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.item-link {
		width: 1.6rem;
		margin-top: 0.1rem;
	}
	
	img {
		width: 1.58rem;
		height: 1.58rem;
	}
	
	.item-title {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.item-bottom {
		display: flex;
		justify-content: space-between;
		padding: 0 0.05rem
	}
</style>