<template>
	<div class="touchweb-com_header " style="font-size: 0.12rem;">
		<!-- left start -->
		<a id="back" href="javascript: void(0);" class="left icon-back" @click="toIndex"></a>
		<h1>1号店注册</h1>

		<div class="rightBox">
			<a id="register_btn" href="javascript: void(0);" class="right rbtn" @click="toLogin">
				登陆
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toIndex() {
				this.$store.dispatch('setfootPage','Home');
				this.$router.push('/Index');
			},
			toLogin(){
				this.$router.push('/Login');
			}
		}
	}
</script>

<style scoped lang="scss">

</style>