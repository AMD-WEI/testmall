<template>
  <div class="flex bot-bar-wrap">
    <div class="bot-bar-item">
      <p><img src="~assets/img/detail/icon01.png" alt="" /></p>
      <p>客服</p>
    </div>
    <div class="bot-bar-item">
      <p><img src="~assets/img/detail/icon02.png" alt="" /></p>
      <p>店铺</p>
    </div>
    <div class="bot-bar-item">
      <p><img src="~assets/img/detail/icon03.png" alt="" /></p>
      <p>收藏</p>
    </div>
    <div class="btn cart-btn" @click="addCart">加入购物车</div>
    <div class="btn buy-btn">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottBar",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.bot-bar-wrap {
  height: 4rem;
  position: relative;
  background: #fff;
}
.bot-bar-item {
  width: 16%;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
}
.bot-bar-item img {
  width: 2rem;
  height: 2rem;
  margin: 0.3rem 0;
  vertical-align: middle;
}
.btn {
  width: 26%;
  font-size: 1.5rem;
  line-height: 4.5rem;
  text-align: center;
}
.cart-btn {
  background-color: #f9cd0b;
}
.buy-btn {
  color: #fff;
  background-color: var(--color-high-text);
}
</style>
