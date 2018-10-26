<template>
	<div>
		<fheader></fheader>
		<fsearch></fsearch>
		<fbanner></fbanner>
		<fadvertise></fadvertise>
		<fnav></fnav>
		<fsuperGood></fsuperGood>
		<fmaingoods></fmaingoods>
		<ffooter></ffooter>
	</div>
</template>

<script>
//	import $ from 'jquery'
	import fheader from '../components/Fheader.vue';
	import fsearch from '../components/Fsearch.vue';
	import fbanner from '../components/Fbanner.vue';
	import fadvertise from '../components/Fadvertise.vue';
	import fnav from '../components/Fnav.vue';
	import fsuperGood from '../components/Fsuper_good.vue';
	import ffooter from '../components/Ffooter.vue';
	import fmaingoods from '../components/FmainGoods.vue';
	import adresschose from '../components/AdressChose.vue';
	import test from '../components/test.vue';
	export default {
		components: {
			fheader,
			fsearch,
			fbanner,
			fadvertise,
			fnav,
			fsuperGood,
			ffooter,
			fmaingoods,
			adresschose,
		}
	}
</script>

<style>

</style>