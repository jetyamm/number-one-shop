<template>
	<div class="swiper-container swiper3 container">

		<div class="product-title">
			<h4>超级单品<countdown></countdown>
			</h4><span style="color: red;">爆款超值款》</span>
		</div>
		<div class="product-list swiper-wrapper">
			<div class="product-item swiper-slide" v-for="(gl,index) in goodList" :key='index'>
				<a class="product-box" href="//yrt.m.yhd.com/supersale/superproduct/1-46179183" :title="gl.name">
					<div class="pic-wrap">
						<img class="lazyload" :src="gl.imageUrl" :alt="gl.name" width="90px" height="90px">
					</div>
					<div class="item-tit" v-text="gl.name"></div>
					<div class="price-box">
						<div class="now-price" v-text="gl.price"></div>
						<del>
							<div class="old-price" v-text="gl.jdPrice"></div>
						</del>
					</div>
				</a>
			</div>
			<div class="look-more-wrap">
				<a href="javascript:" title="更多超级单品" class="look-more" @click="getMore">查看更多<i class="moreB"></i></a>
			</div>

		</div>
	</div>

</template>
<!--<script src="../lib/countDown/jquery.flipcountdown.js"></script>-->
<script>
import Axios from "axios";
import Swiper from "swiper";
import countdown from "./CountDown.vue";
import "../../node_modules/swiper/dist/css/swiper.css";
import $ from "jquery";

export default {
    data() {
        return {
            page: 1,
            goodList: []
        };
    },
    components: {
        countdown
    },
    methods: {
        getMore() {
            this.page = this.page + 1;
            var self = this;
            Axios.get("http://10.3.135.40:3002/getIndexGood", {
                params: {
                    siteType: this.page
                }
            })
                .then(function(response) {
                    self.goodList = self.goodList.concat(response.data);
                    self.goodList.map(function(e, i) {
                        if (e.id === "") {
                            self.goodList.splice(i, 1);
                        }
                    });

                    console.log(self.goodList);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    mounted() {
        var self = this;
        Axios.get("http://10.3.135.40:3002/getIndexGood", {
            params: {
                siteType: this.page
            }
        })
            .then(function(response) {
                self.goodList = self.goodList.concat(response.data);
                self.goodList.map(function(e, i) {
                    if (e.id === "") {
                        self.goodList.splice(i, 1);
                    }
                });

                //					console.log(self.goodList);
            })
            .catch(function(error) {
                console.log(error);
            });
        var mySwiper = new Swiper(".swiper3", {
            initialSlide: 0, //从0开始
            slidesPerView: 3,
            paginationClickable: true,
            freeMode: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true //修改swiper的父元素时，自动初始化swiper
        });
    }
};
</script>

<style lang="scss" scoped>
.product-title {
    display: flex;
    line-height: 0.39rem;
    justify-content: space-between;
    text-align: center;
    h4 {
        display: flex;
        margin-left: 0.05rem;
        font-weight: 999;
    }
}
.product-list {
    display: flex;
    .product-item {
        width: 0.9rem;
        flex: 1;
        margin: 0 0.1rem;
        .pic-wrap {
            width: 0.9rem;
        }
        .item-tit {
            width: 0.9rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #000000;
        }
    }
}

.old-price {
    font-size: 0.12rem;
    color: #122b40;
}

.now-price {
    font-size: 0.12rem;
    color: red;
}

.now-price::before,
.old-price::before {
    content: "￥";
}

.price-box {
    display: flex;
    justify-content: space-around;
}

.look-more-wrap {
    padding: 0.2rem 0 0 0.1rem;
    .look-more {
        color: #000000;
    }
}
</style>