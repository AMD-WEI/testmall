<template>
  <swiper class="detail-swiper" v-if="topImages.length">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
      <!-- <div>{{ item }}</div> -->
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperItem },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail-swiper img {
  height: 40rem;
  object-fit: cover;
}
</style>
