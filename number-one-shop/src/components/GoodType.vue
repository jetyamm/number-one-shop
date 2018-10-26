<template>
	<div>
		<div style="width: 100%;height: 10rem;background: #000000;position: absolute;top: 0;z-index: 150;opacity: 0.5;" v-if="getState">

		</div>
		<div style="z-index: 1000;" class="goodType container  animated fadeInUp" v-if="getState">
			<div class="goodImgPrice">
				<span style="position: absolute;top: 0 ;right: 0;padding: 0.1rem;color: #CCCCCC;" @click="setState">X</span>
				<img :src="goodInfo.imageUrl" alt="" />
				<div>
					<p v-text="goodInfo.price" class="price"></p>
					<p v-text="goodInfo.name"></p>
				</div>
			</div>
			<div class="color">
				<h4>颜色</h4>
				<ul class="choseColor">
					<li v-for="(gc,i) of goodColor" v-text="gc" @click="chose(i)"></li>
				</ul>
			</div>
			<div class="buyNum">
				<div style="width: 2.6rem;">购买数量</div>
				<div class="input-group">
					<span class="input-group-addon sub" @click="sub">-</span>
					<input type="text" class="form-control countNum" aria-label="Amount (to the nearest dollar)" :value="buyNum" maxlength="2" oninput="value=value.replace(/[^\d]/g,'')">
					<span class="input-group-addon add" @click="add">+</span>
				</div>
			</div>
			<div class="good_bottom">
				<div class="login_btn" fixed>
					<a id="login-btn" href="javascript: void(0);" class="btn" @click="addCar">加入购物车</a>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodInfo: {},
				goodColor: [],
				buyNum: 1
			}
		},
		methods: {
			setState(){
				this.$store.state.isGoodtypeShow = false;
			},
			sub(){
				if(this.buyNum -1 <= 1){
					$('.countNum').val(1);
				}else{
					$('.countNum').val(this.buyNum --);					
				}
			},
			add(){
				if(this.buyNum +1 >= 99){
					$('.countNum').val(99);
				}else{
					$('.countNum').val(this.buyNum ++);					
				}
			},
			chose(i){
				for(var j=0;j<$('.choseColor li').length;j++){
					$('.choseColor li').eq(j).removeClass('active');
				}
				$('.choseColor li').eq(i).addClass('active');
			},
			addCar(){
				var self = this;
				var newlist = JSON.stringify([{
							'name': self.goodInfo.name,
							'price': self.goodInfo.price,
							'img': self.goodInfo.imageUrl,
							'color': $('.active').text(),
							'num': this.buyNum
						}]);
				$.ajax({
					type:"post",
					url:"http://10.3.135.40:3003/addshoppingcar",
					async:true,
					data:{
						oname: 'three',
						this_all: 'false',
						allPrice: 0,
						newlist: newlist
					},
					success(data){
						console.log(data);
						if(data == 'exit'){
							confirm('购物车已存在该商品');
						}else{
							confirm('该商品已添加进购物车');
						}
						
					}
				});
			}
		},
		computed: {
			getState() {
				return this.$store.getters.getGoodtypeShow;
			}
		},
		mounted() {
			this.goodInfo = JSON.parse(sessionStorage.getItem('goodInfo'));
			this.goodColor = this.goodInfo.color.split(',');
		}
	}
</script>

<style scoped lang="scss">
	.goodType {
		height: 3rem;
		position: fixed;
		bottom: 0;
		z-index: 3;
		background: rgba(255, 255, 255, 0.9);
		padding-top: 0.1rem;
		img {
			display: block;
			float: left;
			width: 1.5rem;
			height: 1rem;
		}
	}
	
	.goodImgPrice {
		display: flex;
		.price {
			color: red;
			&:before {
				content: '￥';
			}
		}
	}
	
	.color {
		height: 1rem;
		overflow-y: auto;
		.choseColor {
			display: flex;
			li {
				padding: 0.08rem;
				margin: 0.1rem;
				border: 0.01rem solid #CCCCCC;
				border-radius: 0.1rem;
			}
		}
	}
	
	.buyNum {
		display: flex;
		width: 100%;
		padding-bottom: 0.05rem;
		line-height: 0.44rem;
		.input-group {
			width: 1.1rem;
			margin-top: 0.05rem;
		}
	}
	
	.active {
		background: red;
		color: #FFFFFF;
	}
	
	.good_bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	
	.login_btn {
		display: flex;
		margin: 0 0.10rem 0 0 ;
		font-size: 0.38rem;
		.btn {
			width: 100%;
			height: 0.4rem;
			line-height: 0.4rem;
			-webkit-border-radius: 0.05rem;
			border-radius: 0.05rem;
			text-align: center;
			font-size: 0.16rem;
			color: #fff;
			background-color: #ff3c3c;
			padding: 0;
		}
	}
</style>