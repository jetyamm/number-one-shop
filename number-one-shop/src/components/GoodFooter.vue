<template>
	<div class="good_bottom" @click="setState">
		<div class="login_btn" fixed>
			<a id="login-btn" href="javascript: void(0);" class="btn">加入购物车</a><i class="car glyphicon glyphicon-shopping-cart" @click="goShoppingCar"></i>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			setState(){
				this.$store.state.isGoodtypeShow = !this.$store.state.isGoodtypeShow;
			},
			goShoppingCar(){
				this.$router.push('/shoppingCar');
			}
		}
	}
</script>

<style scoped lang="scss">
	.good_bottom{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #FFFFFF;
	}
	.login_btn {
		display: flex;
		margin:0 0.10rem ;
		font-size: 0.38rem;
		.btn {
		    width: 100%;
		    height: 0.4rem;
		    line-height: 0.4rem;
		    -webkit-border-radius: 0.05rem;
		    border-radius: 0.05rem;
		    text-align: center;
		    font-size:  0.16rem;
		    color: #fff;
		    background-color: #ff3c3c;
		    padding: 0;
		}
		.car{
			margin: 0 0.10rem;
		}
	}
	
</style>