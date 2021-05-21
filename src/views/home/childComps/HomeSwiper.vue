<template>
  <div>
    <swiper class="swiper_1" v-if="banners.length">
      <swiper-item v-for="(item, key) in banners" :key="key">
        <a href="">
          <img :src="item.banner_url" alt="" @load="swiperImgHeight" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: true,
    };
  },
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
  methods: {
    swiperImgHeight() {
      if (this.isLoad) {
        this.$emit("swiperImgHeight");
        this.isLoad = false;
      }
    },
  },
};
</script>

<style>
</style>
