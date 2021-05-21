<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-text-wrap">
      <div class="text-top-style"></div>
      <div class="desc info-text-desc">{{ detailInfo.desc }}</div>
      <div class="text-bot-style"></div>
    </div>
    <div
      class="img-list-wrap"
      v-for="(item, index) in detailInfo.detailImage"
      :key="index"
    >
      <div class="desc">{{ item.key }}</div>
      <div v-for="(item, index) in item.list" :key="index">
        <img :src="item" alt="" class="img" @load="detailGoodsImgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  components: {},
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    detailGoodsImgLoad() {
      this.$emit("detailGoodsImgLoad");
    },
  },
};
</script>

<style scoped>
.info-text-wrap {
  position: relative;
}
.text-top-style {
  width: 30rem;
  height: 0.1rem;
  background-color: #333;
  margin-left: 4rem;
}
::before {
  position: absolute;
  left: 3rem;
  top: -1.5rem;
  display: block;
  content: "";
  width: 1rem;
  height: 1rem;
  background-color: #333;
}
.text-bot-style {
  position: absolute;
  width: 30rem;
  height: 0.1rem;
  background-color: #333;
  margin-left: 4rem;
  bottom: 0;
}
::after {
  position: absolute;
  right: 3rem;
  top: -1.5rem;
  display: block;
  content: "";
  width: 1rem;
  height: 1rem;
  background-color: #333;
}

.info-text-desc {
  padding: 5rem 7rem;
}
.desc {
  font-size: 1.5rem;
  padding-bottom: 6rem;
  line-height: 2rem;
  margin: 1rem 0;
  text-indent: 0;
}
.img {
  width: 100%;
}
</style>
