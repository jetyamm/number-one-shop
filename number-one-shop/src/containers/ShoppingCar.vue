<template>
	<div> 
		<!--头部开始-->
		<div class="header">
			<h1>购物车</h1>
			<a href="/#/index" class="back" @click="goIndex"><span></span></a>
			<a href="#" class=""></a>
		</div>
		<!--头部结束-->
		<div class="shopping">

			<div class="shop-group-item" v-for="(gl,index) in goodlist">
				<div class="shop-name">
					<input type="checkbox" class="check goods-check shopCheck" v-model="gl.this_all" @change="check_list(index)">>
					<h4><a href="#" v-text="gl.oname"></a></h4>
					<div class="coupons"><span>领券</span><em>|</em><span>编辑</span></div>
				</div>
				<ul>
					<li v-for="(nl,nindex) in gl.newlist" :key="nindex">
						<div class="shop-info">
							<input type="checkbox" class="check goods-check goodsCheck"  v-model="nl.check_one" @change="click_input(index,nindex)"/>
							<div class="shop-info-img">
								<a href="#"><img :src="nl.img" /></a>
							</div>
							<div class="shop-info-text">
								<h4 v-text="nl.name"></h4>
								<div class="shop-brief"><span>重量:3.3kg</span>颜色:<span v-text="nl.color"></span><span>版本:13.3英寸</span></div>
								<div class="shop-price">
									<div class="shop-pices">￥<b class="price" v-text="nl.price"></b></div>
									<div class="shop-arithmetic">
										<a href="javascript:;" class="minus" @click="minus(index,nindex)">-</a>
										<input class="num" :value="nl.num" style="border: 0.01rem solid #CCCCCC;" oninput="value=value.replace(/[^\d]/g,'')" maxlength="2"/>
										<a href="javascript:;" class="plus" @click="plus(index,nindex)">+</a>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="shopPrice">本店总计：￥<span class="shop-total-amount" v-text="money(index)">0.00</span></div>
			</div>

		</div>

		<div class="payment-bar">
			<div class="all-checkbox"><input type="checkbox" class="check goods-check" id="AllCheck" v-model="checkall" @change="check_all()">全选</div>
			<div class="shop-total">
				<strong>总价：<i class="total" id="AllTotal" v-text="allMoney">0.00</i></strong>
				<span>减免：123.00</span>
			</div>
			<a href="#" class="settlement">结算</a>
		</div>
		<ffooter></ffooter>

	</div>
</template>

<script>
	import ffooter from '../components/Ffooter.vue';
	import "../lib/shoppingCart/shoppingCar/css/base.css"
	import "../lib/shoppingCart/shoppingCar/css/module.css"
	export default {
		data() {
			return {
				goodlist: [],
				checkall: false,
				allPrice: 0,
				cpgoodlist: []
			}
		},
		components: {
			ffooter
		},
		computed:{
			allMoney(){
				var allPrice = 0;
				this.goodlist.forEach(item2=> {
					item2.newlist.forEach(item1=>{
						if(item1.check_one){
							allPrice += item1.price * item1.num;
						}
					})
				});
				return allPrice.toFixed(2)
			}
		},
		methods: {
			goIndex(){
				this.$store.dispatch('setfootPage','Home');
			},
			goodDelete() {
				confirm('是否确认删除该商品');
			},
			plus(index,nindex) {
				if(this.goodlist[index].newlist[nindex].num < 100) {
					this.goodlist[index].newlist[nindex].num = this.goodlist[index].newlist[nindex].num + 1;
				} else {
					this.goodlist[index].newlist[nindex].num = 99;
				}
			},
			minus(index,nindex) {
				if(this.goodlist[index].newlist[nindex].num > 1) {
					this.goodlist[index].newlist[nindex].num = this.goodlist[index].newlist[nindex].num - 1;
				} else {
					this.goodlist[index].newlist[nindex].num = 1;
				}
			},
			money(index) {
				var self = this;
				var shopPrice = 0;
				self.goodlist[index].newlist.forEach(item2=> {
					if(item2.check_one == true) {
						shopPrice += item2.price*item2.num;
					}
				});
				return shopPrice.toFixed(2)
			},
			check_all() {
				var that = this;
				that.goodlist.forEach(item1 => {
					item1.this_all = that.checkall;
					item1.newlist.forEach(item2 => {
						item2.check_one = that.checkall
					})
				});
//				that.allMoney();
			},
			// 判断是否单选后全选按钮的状态
			abc() {
				var that = this;
				var aaa = that.goodlist.filter(item2 => {
					return item2.this_all == true
				})
				aaa.length == that.goodlist.length ? that.checkall = true : that.checkall = false
//				that.allMoney();
			},
			check_list(i) {
				var that = this;
				that.goodlist[i].newlist.forEach(item1 => {
					item1.check_one = that.goodlist[i].this_all
				})
				that.abc();

			},

			click_input(i, j) {
				var that = this;
				var checklist = that.goodlist[i].newlist.filter(item1 => {
					return item1.check_one == true
				})

				checklist.length == that.goodlist[i].newlist.length ? that.goodlist[i].this_all = true : that.goodlist[i].this_all = false
				that.abc();

			}
		},
		mounted() {
			var self = this;
			$.ajax({
				type: "post",
				url: "http://10.3.135.40:3003/shoppingcar",
				async: true,
				success(data) {
					//					console.log(data);
					self.goodlist = data;
					
					console.log(self.goodlist);
				}
			});
//			this.allMoney();
		}

	}
</script>

<style scoped lang="scss">

</style>