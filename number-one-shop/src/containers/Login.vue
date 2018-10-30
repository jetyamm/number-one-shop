<template>
	<div id="container">
		<fheader></fheader>
		<div class="touchweb-com_header " style="font-size: 0.12rem;">
			<!-- left start -->
			<a id="back" href="javascript: void(0);" class="left icon-back" @click="toIndex"></a>
			<h1>登录1号店</h1>

			<div class="rightBox">
				<a id="register_btn" href="javascript: void(0);" class="right rbtn" @click="toRegister">
					注册
				</a>
			</div>

		</div>
		<div class="touchweb_page-login">
			<div class="login_box">
				<div class="input-group input-group-lg">
					<span class="input-group-addon 
glyphicon glyphicon-user" id="sizing-addon1"></span>
					<input type="text" class="form-control username" placeholder="邮箱/手机/用户名" aria-describedby="sizing-addon1" style="border-bottom: 0.01rem solid #CCCCCC;">
				</div>
				<div class="input-group input-group-lg">
					<span class="input-group-addon glyphicon glyphicon-lock" id="sizing-addon1"></span>
					<input type="password" class="form-control password" placeholder="请输入密码" aria-describedby="sizing-addon1" >
				</div>
			</div>

			<div class="remember_login">
				<input id="touchweb_form-checkbox" type="checkbox" checked="">
				<label style="margin-bottom: 0.05rem;font-size: 0.12rem;" for="touchweb_form-checkbox">两周内记住登录</label>
				
				<a href="javascript: void(0);" class="forgot_password">忘记密码？</a>
			</div>
			<div class="login_btn">
				<a id="login-btn" href="javascript: void(0);" class="btn" @click="checkAndToIndex">登录</a>
			</div>
			<!-- 短信快捷登录 -->
			<div class="sms_login">
				<a href="javascript:;" class="btn" id="sms_fast_login_btn">短信快捷登录</a>
			</div>
			<div class="joint_login">
				<h2><span>合作账号登录</span></h2>
				<ul>
					<li>
						<a href="https://passport.yhd.com/m/sina/login.do" title="新浪微博" class="icon-weibo_round"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import fheader from '../components/Fheader.vue'
	export default {
		data(){
			return{
				
			}
		},
		components:{
			fheader
		},
		methods:{
			toRegister(){
				this.$router.push('/Register');
			},
			toIndex(){
				this.$store.dispatch('setfootPage','Home');
				this.$router.push('/Index');
			},
			checkAndToIndex(){
				var self = this;
				var _username = $('.username').val();
				var _pw = $('.password').val();
				$.ajax({
					type:"post",
					url:"http://10.3.135.40:3003/getLogin_user",
					async:true,
					data:{
						username: _username,
						pw: _pw
					},
					success(data){
						if(data == 'yes'){
							self.toIndex();
						}else{
							confirm('账号或密码有误，请确认输入的信息');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>

	/*登陆注册框*/
	.input-group-addon{
		background-color: #FFF;border: 0 none;top:0;
	}
	.form-control{
		background-color: none;border: 0 none; box-shadow: none;
		font-size: 0.14rem;
	}
	/*touchweb-com_header*/
	
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
			font-size:  0.18rem;
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
			font-size:  0.12rem;
			text-align: center;
			vertical-align: middle;
			color: #ff3c3c;
		}
		.icon-back:before {
			content: "<";
			font-size: 0.2rem;
		}
	}
	/*touchweb_page-login*/
	
	.touchweb_page-login {
		.login_box {
			margin-top: 0.44rem;
			border-top: 0.01rem solid #dcdcdc;
			border-bottom: 0.01rem solid #dcdcdc;
			background-color: #fff;
			.form_item {
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				width: 3.2rem;
				height: 0.44rem;
				margin: 0 auto;
				.input_box {
					position: relative;
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					-ms-flex: 1;
					flex: 1;
					width: auto;
					height: 0.43rem;
					border-bottom: 0.01rem solid #e5e5e5;

				}
			}
		}
		.remember_login {
			position: relative;
			max-width: 2.9rem;
			height: 0.3rem;
			margin: 0.2rem auto 0;
			.forgot_password {
				position: absolute;
				right: 0;
				top: 0;
				line-height: 0.3rem;
				font-size:  0.12rem;
				color: #07a5ff;
			}
		}
	}
	
	.touchweb_page-login .login_btn {
		max-width: 2.9rem;
		margin: 0.2rem auto 0;
	}
	.touchweb_page-login .login_btn .btn {
	    display: block;
	    width: 100%;
	    height: 0.44rem;
	    line-height: 0.44rem;
	    -webkit-border-radius: 0.05rem;
	    border-radius: 0.05rem;
	    text-align: center;
	    font-size:  0.16rem;
	    color: #fff;
	    background-color: #ff3c3c;
	    padding: 0;
	}
	.touchweb_page-login .sms_login {
	    margin-top: 0.25rem;
	    text-align: center;
	}
	.touchweb_page-login .sms_login .btn {
	    height: 0.2rem;
	    line-height: 0.2rem;
	    font-size:  0.12rem;
	    color: #07a5ff;
	}
	.touchweb_page-login .joint_login {
	    margin: 0.2rem 0;
	}
	.touchweb_page-login .joint_login h2 {
	    height: 0.2rem;
	    border-bottom: 0.01rem solid #d9d9d9;
	    text-align: center;
	}
	.touchweb_page-login .joint_login h2 span {
	    display: inline-block;
	    height: 0.2rem;
	    line-height: 0.2rem;
	    padding: 0 1em;
	    background-color: #f5f5f5;
	    color: #666;
	    font-size:  0.12rem;
	    -webkit-transform: translate3d(0,50%,0);
	    -ms-transform: translate3d(0,50%,0);
	    transform: translate3d(0,50%,0);
	}
</style>