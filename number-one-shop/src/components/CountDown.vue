<template>
	<count-down class="daojishi" v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime="1481450106" :startTime="1481450106" :endTime="1481460000" :tipText="'距离开始文字'" :tipTextEnd="'距离结束文字'" :endText="'结束自定义文字2'" :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down>
	<!--<div id="flipcountdownbox1"></div>-->
</template>

<script>
import CountDown from "vue2-countdown";

import $ from "jquery";
//	console.log($)
//	import '../lib/countDown/jquery.flipcountdown.css'
//	import '../lib/countDown/jquery.flipcountdown.js'

export default {
    data() {
        return {
            //				startTime:( new Date() ).getTime()+(100*300),
            //              endTime:( new Date() ).getTime()+(500*500)
        };
    },
    components: {
        CountDown
    },
    methods: {
        countDownS_cb: function(x) {
            //				console.log(x)
        },
        countDownE_cb: function(x) {
            //				console.log(x)
        }
    }
    //		mounted(){
    //			$(function(){
    //			    $('#flipcountdownbox1').flipcountdown();
    //			})
    //		}
};
</script>

<style scoped>
.daojishi {
    color: red;
    font-size: 0.12rem;
    line-height: 0.2rem;
    margin: 0 0.05rem;
}
</style>