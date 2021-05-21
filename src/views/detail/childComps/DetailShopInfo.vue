<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="flex shop-name-info">
      <img :src="shop.logo" alt="" class="shop-img" />
      <div>{{ shop.name }}</div>
    </div>
    <div class="flex shop-other-info">
      <div class="flex shop-other-item shop-other-sell">
        <div>
          <p class="f16">
            <b>{{ shop.sells | saveNum }}</b>
          </p>
          <p>总销量</p>
        </div>
        <div>
          <p class="f16">
            <b>{{ shop.goodsCount }}</b>
          </p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div v-for="(item, key) in shop.score" :key="key">
          {{ item.name }}&ensp;
          <span class="score" :class="{ active: item.isBetter }">
            {{ item.score }}
          </span>
          <span class="score-bg" :class="{ active: item.isBetter }">
            {{ item.isBetter ? "低" : "高" }}
          </span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  components: {},
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    saveNum(value) {
      if (isNaN(value) || value < 10000) {
        return value;
      } else {
        return (value / 10000).toFixed(1) + "万";
      }
    },
  },
};
</script>

<style scoped>
.f16 {
  font-size: 1.5rem;
}
.shop-name-info {
  align-items: center;
  margin: 2.5rem 1.5rem;
}
.shop-name-info div {
  font-size: 1.5rem;
}
.shop-img {
  border-radius: 100%;
  width: 5rem;
  height: 5rem;
  margin-right: 2rem;
  vertical-align: middle;
}
.shop-other-info {
  font-size: 1.3rem;
  align-items: center;
  line-height: 3rem;
}
.shop-other-item {
  flex: 1;
}
.shop-other-sell {
  border-right: 0.2rem solid #ececec;
  font-size: 2rem;
}
.shop-other-sell div {
  flex: 1;
  text-align: center;
}
.shop-other-right {
  padding-left: 5.5rem;
}
.score {
  display: inline-block;
  width: 3rem;
  color: #ff3b53;
}
.active {
  color: #ff3b53;
}
.score-bg {
  background-color: #ff3b53;
  color: #fff;
  padding: 0.2rem 0.2rem;
  text-align: center;
}
.enter-shop-wrap {
  text-align: center;
}
.enter-shop {
  display: inline-block;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  border-radius: 5rem;
  margin: 1.5rem;
  background-color: #f2f2f2;
}
</style>
