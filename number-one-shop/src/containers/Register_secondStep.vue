<template>
	<div>
		<registerHeader></registerHeader>
		<div class="register_box">
			<div class="input-group input-group-lg">
				<span class="input-group-addon glyphicon glyphicon-phone" id="sizing-addon1"></span>
				<input type="text" class="form-control username" maxlength="11" placeholder="请输入验证码" aria-describedby="sizing-addon1" style="border-bottom: 0.01rem solid #CCCCCC;"/>
				 <div class="input-group-addon" style="border-bottom: 0.01rem solid #CCCCCC;padding: 0;"><span class="getCode" @click="getCode">获取验证码</span></div>
			</div>
			<div class="input-group input-group-lg">
				<span class="input-group-addon glyphicon glyphicon-envelope" id="sizing-addon1"></span>
				<input :type="!isShowPw ? 'password' : 'text'" class="form-control pw" placeholder="6-20位字母，数字或符号组合" maxlength="20" minlength="6">
				<div class="input-group-addon" style="padding: 0;" @click="changColor"><span class="closePw" style="background: red;display: inline-block;width: 0.35rem;height: 0.2rem;" ></span><span class="showPw" style="background: #CCCCCC;display: inline-block;width: 0.35rem;height: 0.2rem;"></span></div>
			</div>
		</div>
		<div class="register_btn">
			<a id="register_btn-btn" href="javascript: void(0);" class="btn" @click="register">注册</a>
		</div>
	</div>
</template>

<script>
	import registerHeader from '../components/Register_header.vue'
	import common from '../html/js/common.js'
	export default {
		data() {
			return {
				isShowPw: false
			}
		},
		components: {
			registerHeader
		},
		methods:{
			// 获取验证码
			getCode(){
				$('.username').val(common.randomCode(4));
			},
			// 点击是否显示密码
			changColor(){
				this.isShowPw = !this.isShowPw;
				if(this.isShowPw){
					$('.closePw').css('background-color','#ccc');
					$('.showPw').css('background-color','green');
				}else{
					$('.closePw').css('background-color','red');
					$('.showPw').css('background-color','#ccc');
				}
			},
			// 点击注册
			register(){
				var self = this;
				// 获取session手机号
				var _username = sessionStorage.getItem('username');
				// 获取密码
				var _pw = $('.pw').val();
				// 密码正则
				if(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,\.#%'\+\*\-:;^_`]+$)[,\.#%'\+\*\-:;^_`0-9A-Za-z]{6,20}$/.test($('.pw').val())){
					console.log(666);
					$.ajax({
						type:"post",
						url:"http://10.3.135.40:3003/register_user",
						async:true,
						data:{
							username: _username,
							pw:_pw 
						},
						success(data){
							if(data == 'yes'){
								if(confirm('注册成功，马上去登陆看看吧！')){
									self.$router.push('/login');	
								}				
							}else{
								confirm('该用户手机账号已注册');
							}
						}
					});
				}else{
					confirm('密码请使用数字、字母或符号的两种结合');
				}
			}
			
		}
	}
</script>

<style scoped lang="scss">
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
		background-color: #ff3c3c;
		padding: 0;
	}
	.register_box {
		border-bottom: 0.01rem solid #CCCCCC;
		.input-group-addon {
			background-color: #FFF;
			border: 0 none;
			top: 0;
		}
		.form-control {
			background-color: none;
			border: 0 none;
			box-shadow: none;
			font-size: 0.14rem;
			border-radius: 0;
		}
		.getCode{
			display: inline-block;
			color: #FFF;
			background: red;
			font-size: 0.12rem;
			padding: 0.03rem 0.05rem;
		}
	}
</style>