<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">女人街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tabcontrol"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        ref="swiper"
        @swiperImgHeight="swiperImgHeight"
      />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowbackTop" />
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "views/home/childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll.vue";
// import BackTop from "components/content/backTop/BackTop.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";
import { itemListenerMixin, backTopMixin } from "components/common/mixin/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      // isShowbackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveScrollY: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin],
  created() {
    //1.请求good原始数据
    this.getHomeMultidata();
    // this.$store.dispatch("getHomeMultidata");

    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("sell");
  },
  mounted() {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    // banners() {
    //   return this.$store.state.banners;
    // },
    // recommends() {
    //   return this.$store.state.recommends;
    // },
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    /**
     * 网络请求的方法
     */
    getHomeMultidata() {
      //1.请求多个数据
      getHomeMultidata().then((res) => {
        res = res.data;
        //2.请求商品数据
        this.banners = res.data.banner_list;
        this.recommends = res.data.recommend_list;
      });
    },

    getHomeGoods(type) {
      // 设置时间间隔，反爬
      setTimeout(3000);
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        res = res.data;
        this.goods[type].list.push(...res.goodslist);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    // backClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
    contentScroll(position) {
      //判断BackTop
      this.listenShowBackTop(position);

      //决定tabControl是否吸顶
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
    },
    swiperImgHeight() {
      //获取tabControl的offsetTop
      //所有的组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  deactivated() {
    this.saveScrollY = this.$refs.scroll.scroll.y;
    //取消全局事件的监听
    this.$bus.$off("imageLoadSuccess", this.itemListener);
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveScrollY, 0);
    this.refresh();
    // this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
#home {
  /* min-height: 20rem; */
  height: 100vh;
  position: relative;
}
.nav-bar {
  background: var(--color-tint);

  /*  在使用浏览器原生滚动时，为了让导航不跟随一起滚动才使用以下样式
   position: fixed;
  z-index: 9;
  right: 0;
  left: 0; */
}

.content {
  position: absolute;
  overflow: hidden;
  top: 4rem;
  bottom: 4.2rem;
  left: 0;
  right: 0;
}
.tabcontrol {
  position: relative;
  z-index: 9;
}
</style>
