<template>
	<mt-tabbar v-model="selected" style="position: fixed;z-index: 3; font-size: 0.12rem">
		<mt-tab-item v-for="(tap,i) in taps" :id="tap.id" :key="i">  
			<div class="options" @click="transformPage(i,tap.id)" :key='i' >
				<i slot="icon" :class="tap.imgUrl"></i> <span v-text="tap.title"></span>
			</div>
			
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
	import { Tabbar, TabItem } from 'mint-ui';
	import '../../node_modules/mint-ui/lib/style.css'
	export default{
		data(){
			return{
				selected: 'Classify',
				taps: [{
					id: 'Home',
					title:'首页',
					imgUrl: 'glyphicon glyphicon-home',
				},{
					id: 'Classify',
					title:'分类',
					imgUrl: 'glyphicon glyphicon-th-large',
				},{
					id: 'OneHall',
					title:'一品堂',
					imgUrl: 'glyphicon glyphicon-off',
				},{
					id: 'ShoppingCar',
					title:'购物车',
					imgUrl: 'glyphicon glyphicon-shopping-cart',
				},{
					id: 'My',
					title:'我的',
					imgUrl: 'glyphicon glyphicon-user',
				},]
			}
		},
		components:{
			Tabbar,
			TabItem
		},
		methods:{
			changeActiveState(i){
//				for(var j=0;j<this.taps.length;j++){
//					this.taps[j].isActive = false;
//				}
//				this.$router.$store.state.footPage = i;
//				console.log(this.$router);
//				this.taps[this.$router.$store.state.footPage].isActive = true;

			},
			transformPage(i,id){
				this.$store.dispatch('setfootPage',id);
				switch(i){
					case 0: this.$router.push('/Index');break;
					case 1: this.$router.push('/Classify');break;
					case 2: this.$router.push('/OneShop');break;
					case 3: this.$router.push('/ShoppingCar');break;
					case 4: this.$router.push('/Login');break;
				}
			}
		},
		mounted(){
			this.selected = this.$store.state.footPage;
		}
	}
</script>

<style scoped>
	.options{
		display: flex;
		flex-direction: column;
		height: 0.3rem;
		justify-content: space-between;
	}
</style>