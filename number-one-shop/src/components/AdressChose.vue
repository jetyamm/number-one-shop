<template>
		<input type="text" class="cityinput" id="citySelect" placeholder="广州市" />
</template>

<script>

	import Vcity from "../lib/cityChoose/js/cityselect.js"
	//	console.log('Vcity',Vcity.Vcity)
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {
			var city = Vcity.Vcity;
			var test = new city.CitySelector({
				input: 'citySelect'
			});
		}
	}
</script>

<style scoped>
	.cityinput{
		width: 0.4rem;
		line-height: 0.39rem;
		border: 0 none;
		color: #FFF;
		overflow: hidden;
		text-overflow: ellipsis;  
		-webkit-line-clamp: 2;     
		white-space: nowrap;       
	}
	input::-webkit-input-placeholder{
		color: #fff;
	}
</style>