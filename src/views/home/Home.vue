<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">女人街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";

import { getHomeMultidata } from "network/home";
import RecommendView from "./childComps/RecommendView.vue";

export default {
  name: "Home",
  components: { NavBar, HomeSwiper, RecommendView },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res);
      // this.banners = res.data.bannerManageList;
      // this.recommends = res.data.details;
      this.banners = res.data.banner_list;
      this.recommends = res.data.recommend_list;
    });
  },
};
</script>

<style>
.nav-bar {
  background: var(--color-tint);
}
</style>
