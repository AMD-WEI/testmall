<template>
  <div>
    <swiper class="swiper_1">
      <swiper-item v-for="(item, key) in banners" :key="key">
        <a href="">
          <!-- <img :src="item.photoPath" alt="" /> -->
          <img :src="item.banner_url" alt="" />
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
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
};
</script>

<style>
.swiper_1 {
  padding-top: 4.4rem;
}
</style>
