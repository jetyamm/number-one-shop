<template>
	<div>
		<div class="content content_word container">
	
			<div class="content_head">
				<img class="yhd_head" src="../assets/download_icon.png">
			</div>
			<div class="content_imgword">
				<span class="imgword_text">买生鲜进口，上1号店</span>
			</div>
			<div class="text">
				<p>新用户下载注册APP</p>
				<p>领<span class="text_red">188元</span>新人福利礼包</p>
			</div>
			<div class="button">
				<a class="btn_download_app btn_click" report-eventid="Mguidepage_download_clickYhd" expose-eventid="Mguidepage_download_expoYhd" data-advexp="1">
					点击下载APP享优惠</a>
			</div>
	
			<div class="keep">
				<a class="btn_back keeping" report-eventid="Mguidepage_continue_clickYhd" expose-eventid="Mguidepage_continue_expoYhd" data-advexp="1" @click="arriveIndex">
					继续浏览触屏版 > </a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			arriveIndex(){
				location.href = "/#/Index";
			}
		}
	}
</script>

<style scoped>

.content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: top;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url(../assets/home/download_bg_up.png);
}
.content::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: bottom;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-image: url(../assets/home/download_bg_down.png);
}
.content_head .yhd_head {
    width: 95px;
    height: 95px;
}
.content_word {
    height: 100%;
}
.content_head {
    padding-top: 30%;
    text-align: center;
}
.content_imgword {
    font-size: 0;
    text-align: center;
}
.imgword_text {
	    font-size: 14px;
	    color: #212121;
}
.text {
    font-size: 22px;
    line-height: 40px;
    bottom: 38.988%;
    position: absolute;
    width: 100%;
    text-align: center;
    color: #212121;
}
.button {
    position: absolute;
    bottom: 25.5456%;
    width: 100%;
    text-align: center;
}
.keep {
    position: absolute;
    bottom: 18.42546%;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.keeping {
    margin-right: 7.5px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #666;
    text-align: center;
}
.button .btn_click {
    width: 254px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
}
.btn_click {
    display: inline-block;
    vertical-align: middle;
    width: 230px;
    height: 45px;
    line-height: 45px;
    background: #ed1b23;
    box-shadow: 0 5px 10px 0 rgba(247,32,52,0.09);
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>