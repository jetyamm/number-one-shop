<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	body {
		background-color: #fbf9fe;
	}
	
	* {
		margin: 0;
		padding: 0;
	}
	ul li{
		list-style: none;
	}
	.touchweb-com_header {
		font-size: 0.12rem;
		position: relative;
		z-index: 150;
		height: 0.44rem;
		background-color: #fff;
		border-bottom: 0.01rem solid #e5e5e5;
		.left.icon-back {
			color: #ff3c3c;
			font-size: 0.12rem;
			line-height: 0.3rem;
		}
		.left {
			position: absolute;
			left: 0;
			top: 0.07rem;
			width: 0.23rem;
			height: 0.3rem;
			text-align: center;
			padding: 0 0.05rem;
		}
		h1 {
			width: 50%;
			height: 0.44rem;
			line-height: 0.44rem;
			margin: 0 auto;
			font-size: 0.18rem;
			text-align: center;
			font-weight: normal;
			color: #000;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.rightBox {
			position: absolute;
			right: 0;
			top: 0;
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-align: center;
			-webkit-box-align: center;
			box-align: center;
			-webkit-align-items: center;
			align-items: center;
			height: 100%;
			-webkit-transition: all .3s linear;
			transition: all .3s linear;
			font-size: 0;
		}
		.right.rbtn {
			right: 0.05rem;
			display: block;
			width: 0.5rem;
			height: 0.28rem;
			line-height: 0.28rem;
			padding: 0;
			border-radius: 0.04rem;
			border: 0.01rem solid #ddd;
			background-color: #f5f5f5;
			color: #333;
		}
		.right {
			display: block;
			position: relative;
			font-size: 0.12rem;
			text-align: center;
			vertical-align: middle;
			color: #ff3c3c;
		}
		.icon-back:before {
			content: "<";
			font-size: 0.20rem;
		}
	}
</style>