<template>
	<div>
		<ul class="good_detail">
			<li v-for="t of title" v-text="t"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: ['图文详情', '规格参数', '评论', '售后服务']
			}
		}
	}
</script>

<style scoped lang="scss">
	.good_detail {
		display: flex;
		justify-content: space-between;
		padding: 0.1rem 0 0.1rem 0.15rem;
		margin-bottom: 3rem;
		border-bottom: 0.01rem solid #CCCCCC;
		border-top: 0.01rem solid #CCCCCC;
		li{
			border-right: 0.01rem solid #CCCCCC;
			padding-right: 0.2rem;  	
			&:last-child{
				border: 0 none;
			}		
		}
	}
</style>