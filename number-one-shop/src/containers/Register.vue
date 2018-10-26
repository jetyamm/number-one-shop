<template>
	<div class="container">
		<registerHeader></registerHeader>
		<div class="register_box">
			<div class="input-group input-group-lg">
				<span class="input-group-addon glyphicon glyphicon-phone" id="sizing-addon1"></span>
				<input type="text" class="form-control username" maxlength="11" placeholder="请输入手机号码" aria-describedby="sizing-addon1" style="border-bottom: 0.01rem solid #CCCCCC;" @blur="checkoutTel" @focus="setTel" @keydown="showBtnColor">
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon glyphicon glyphicon-envelope" id="sizing-addon1"></span>
				<input type="text" class="form-control code" placeholder="请输入验证码" aria-describedby="sizing-addon1" maxlength="4" @blur="checkoutCode" @focus="setCode" oninput="value=value.replace(/[^\d]/g,'')">
				<span class="checkoutCode"><span v-text="updatecode" class="codeNum"></span><span class="glyphicon glyphicon-repeat" @click="updateCode"></span></span>

			</div>
		</div>
		<div v-if="isTelNull" class="inputWarn"><i class="glyphicon glyphicon-info-sign"></i>不能为空</div>
		<div v-if="isCodeNull" class="inputWarn"><i class="glyphicon glyphicon-info-sign"></i>请输入验证码</div>
		<div v-if="isIligalTel" class="inputWarn"><i class="glyphicon glyphicon-info-sign"></i>手机号码格式不符合要求</div>
		<div class="agreement">
			<label>点击注册，表示您同意1号店<a href="javascript: void(0);" class="license-terms">《服务协议及隐私声明》</a></label>
		</div>

		<div class="register_btn">
			<a id="register_btn-btn" href="javascript: void(0);" class="btn" @click="toTwoStep">注册</a>
		</div>
	</div>
</template>

<script>
	import common from '../html/js/common.js'
	import registerHeader from '../components/Register_header.vue'
	export default {
		data() {
			return {
				isTelNull: false,
				isCodeNull: false,
				updatecode: '',
				isIligalTel: false
			}
		},
		components:{
			registerHeader
		},
		methods: {
			checkoutTel() {
				if($('.username').val() == '') {
					this.isTelNull = true;
					this.isIligalTel = false;
				} else {
					this.isTelNull = false;
				}
			},
			checkoutCode() {
				if($('.code').val() == '') {
					this.isCodeNull = true;
//					this.isTelNull == false;
				} else {
					this.isCodeNull = false;
				}
			},
			setTel() {
				this.isTelNull = false;
			},
			setCode() {
				this.isCodeNull = false;
			},
			updateCode() {
				this.updatecode = common.randomCode(4);
				$('.codeNum').css('color', common.randomColor(16));
			},
			showBtnColor(){
				var _usernameVal = $('.username').val();
				if(_usernameVal.length === 11){
					$('.btn').css('background-color','#ff3c3c');
				}else{
					$('.btn').css('background-color','#ccc');
				}
				
				if(!(/^1[34578]\d{9}$/.test(_usernameVal))){
					this.isIligalTel = true;
				}else{
					this.isIligalTel = false;
				}
			},
			toTwoStep(){
				if(!this.isTelNull && !this.isCodeNull){
					if($('.code').val() == this.updatecode){
						sessionStorage.setItem('username',$('.username').val());	
						this.$router.push('/rgSecondStep');
					}else{
						confirm('验证码有误');
					}
				}else{
					confirm('信息不能为空');
				}
			}
			
		},
		mounted() {
			this.updateCode();
		}
	}
</script>

<style scoped lang="scss">
	/*登陆注册框*/
	
	.register_box {
		border-bottom: 0.01rem solid #CCCCCC;
		.input-group-addon {
			background-color: #FFF;
			border: 0 none;
			top: 0;
			padding: 0.1rem 0.16rem;
			height: 0.46rem;
			font-size: 0.18rem;
		}
		.form-control {
			background-color: none;
			border: 0 none;
			box-shadow: none;
			font-size: 0.14rem;
			border-radius: 0;
			padding: 0.1rem 0.16rem;
			height: 0.46rem;
		}
	}
	
	.inputWarn {
		color: red;
		margin: 0.1rem 0 0.1rem 0.2rem;
		.glyphicon-info-sign {
			margin-right: 0.05rem;
		}
	}
	
	.register_btn {
		max-width: 2.9rem;
		margin: 0.2rem auto 0;
	}
	
	.register_btn .btn {
		display: block;
		width: 100%;
		height: 0.44rem;
		line-height: 0.44rem;
		-webkit-border-radius: 0.05rem;
		border-radius: 0.05rem;
		text-align: center;
		font-size: 0.16rem;
		color: #fff;
		background-color: #CCCCCC;
		padding: 0;
	}
	
	.input-group {
		display: flex;
		.checkoutCode {
			width: 2rem;
			letter-spacing: 0.05rem;
			line-height: 0.46rem;
			background: #fff;
			padding: 0 0.1rem;
		}
	}
	
	.codeNum {
		margin-right: 0.1rem;
	}
	.agreement {
	    position: relative;
	    max-width: 2.9rem;
	    height: 0.3rem;
	    margin: 0.1rem auto 0;
	    font-size: 0.12rem;
	   	label {
		    display: inline-block;
		    height: 0.3rem;
		    line-height: 0.3rem;
		    margin-left: 0.05rem;
		    vertical-align: middle;
		    color: #666;
		}
	}
</style>