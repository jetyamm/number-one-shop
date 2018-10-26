<template>
	<div>
		<fsearch></fsearch>
		<div class="item_main" style="padding-top: 0.5rem;">
			<div class="item_list">
				<ul>
					<li v-for="(gl,i) in goodslist" v-text="gl.classify" style="padding: 0.1rem;" @click="showList(i)" :class="gl.isShow ? 'active' : ''"></li>
				</ul>
			</div>
			<div class="item_goodlist">
				<div v-for="gl in goodslist" class="goodlist" v-if="gl.isShow">
					<h4 v-text="gl.classify"></h4>
					<ul>
						<li v-for="gld in gl.data.productList">
							<img :src="gld.imageUrl" alt="" />
							<p v-text="gld.name"></p>
						</li>
					</ul>
				</div>
			</div>

		</div>
		<ffooter></ffooter>
	</div>
</template>

<script>
	import ffooter from '../components/Ffooter.vue';
	import fsearch from '../components/Fsearch.vue';
	export default {
		data() {
			return {
				goodslist: []
			}
		},
		methods: {
			showList(i) {
				for(var j = 0; j < this.goodslist.length; j++) {
					this.goodslist[j].isShow = false;
				}
				this.goodslist[i].isShow = true;
			}
			
		},
		components: {
			ffooter,
			fsearch
		},
		mounted() {
			var self = this;
			$.ajax({
				type: "post",
				url: "http://10.3.135.40:3003/goodsList",
				async: true,
				success(data) {
					console.log(data);
					for(var i = 0; i < data.length; i++) {
						if(i == 0) {
							data[i].isShow = true;
						} else {
							data[i].isShow = false;
						}
					}
					self.goodslist = data;
					console.log(self.goodslist);
				}
			});
			
		}
	}
</script>

<style scoped lang="scss">
	.item_main {
		padding-bottom: 0.5rem;
		display: flex;
	}
	
	li {
		padding: 0.1rem;
	}
	
	.item_goodlist {
		display: flex;
		flex-direction: column;
	}
	
	.goodlist {
		display: flex;
		flex-direction: column;
		ul {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			overflow-x: hidden;
			li p {
				width: 0.5rem;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
			}
		}
		img {
			width: 0.5rem;
			height: 0.5rem;
		}
	}
	
	li {
		flex: 1;
	}
	
	.active {
		background: indianred;
		color: #FFFFFF;
	}
</style>