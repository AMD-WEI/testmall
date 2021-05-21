<template>
  <div id="detail">
    <details-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      ref="scroll"
      class="content"
      :probeType="3"
      @scrollPosition="scrollPosition"
    >
      <detail-swiper :top-images="goods.topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @detailGoodsImgLoad="detailGoodsImgLoad"
      />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-commment-info :comment-info="commentInfo" ref="comment" />
    </scroll>

    <detail-bott-bar @addCart="addCart" />
    <back-top @click.native="backClick" v-show="isShowbackTop" />
  </div>
</template>

<script>
import DetailsNavBar from "views/detail/childComps/DetailsNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import { getGoodsDetails, Goods, Shop, ParamInfo } from "network/detail";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommmentInfo from "./childComps/DetailCommmentInfo.vue";
import { itemListenerMixin, backTopMixin } from "components/common/mixin/mixin";
import { debounce } from "components/common/util/utils";
import DetailBottBar from "./childComps/DetailBottBar.vue";

export default {
  name: "Detail",
  components: {
    DetailsNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommmentInfo,
    DetailBottBar,
  },
  data() {
    return {
      iid: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: [],
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: 0,
      topImages: {},
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    this.iid = this.$route.params.tradeItemId;

    //用的是vuex发起网络请求
    // this.$store.dispatch("GoodsDetails", this.iid);

    //发送网络请求;
    //商品详情
    getGoodsDetails(this.iid).then((res) => {
      console.log(res);
      res = res.data;
      const data = res.data.result;
      this.topImages = data.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.rateInfo,
        data.skuInfo,
        data.priceInfo,
        data.shopInfo,
        data.topImages
      );
      //商家详情
      this.shop = new Shop(data.shopInfo);
      //商品详情图
      this.detailInfo = data.detailInfo;
      //获取参数信息
      this.paramInfo = new ParamInfo(data.itemParams.info);
      //获取评论信息
      if (data.rateInfo.cRate !== 0) {
        this.commentInfo = data.rateInfo.list;
      }
    });
    //这里不是进行方法的执行，而是将debounce方法进行赋值操作
    this.getThemeTopY = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(
        this.$refs.params.$el ? this.$refs.params.$el.offsetTop : 0
      );
      this.themeTopY.push(
        this.$refs.comment.$el ? this.$refs.comment.$el.offsetTop : 0
      );
      this.themeTopY.push(Number.MAX_VALUE);
      // console.log("Detail getThemeTopY:", this.themeTopY);
    }, 200);
  },
  computed: {
    //state在使用的时候一般被挂载到子组件的computed计算属性上,这样有利于state的值发生改变的时候及时响应给子组件
    // goods() {
    //   return this.$store.state.goods;
    // },
    // shop() {
    //   return this.$store.state.shop;
    // },
  },
  methods: {
    detailGoodsImgLoad() {
      this.refresh();
      //调用获取相应组件的高度
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, 44 - this.themeTopY[index], 400);
    },
    scrollPosition(position) {
      this.listenShowBackTop(position);
      // console.log("detail scrollPosition:", position);
      const positionY = -position.y;
      let length = this.themeTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopY[i] &&
          positionY < this.themeTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.detailInfo.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      this.$store.dispatch("addCart", product);
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 4rem - 4rem);
  overflow: hidden;
}
</style>
