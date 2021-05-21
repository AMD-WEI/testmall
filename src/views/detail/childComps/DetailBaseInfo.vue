<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="title">
      {{ goods.title }}
    </div>
    <div class="price-wrap">
      <div class="new-price">
        <b>{{ goods.realPrice }}</b>
      </div>
      <div class="old-price">{{ goods.oldPrice }}</div>
      <div
        class="priceTagestext"
        v-if="goods.priceTagestext"
        :style="{ color: goods.textColor, backgroundColor: goods.bgColor }"
      >
        {{ goods.priceTagestext }}
      </div>
    </div>
    <div class="other-info">
      <div>销量 {{ goods.sales }}</div>
      <div class="totalStock">收藏:{{ goods.totalStock }}</div>
      <div class="services_1">{{ goods.services[2].name }}</div>
    </div>
    <div class="serves-wrap">
      <div v-for="(index, key) in goods.services.length - 1" :key="key">
        <img :src="goods.services[index - 1].icon" alt="" />
        {{ goods.services[index - 1].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  components: {},
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.title {
  margin: 1rem 0;
  padding: 0 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
}
.price-wrap {
  display: flex;
  padding: 0 1rem 1.5rem;
}
.new-price {
  color: var(--color-high-text);
  font-size: 2.3rem;
}
.old-price {
  color: #999;
  font-size: 1.3rem;
  margin: 0 1rem 0 0.5rem;
  padding: 1rem 0 0 0.5rem;
  text-decoration: line-through;
}
.priceTagestext {
  font-size: 0.5rem;
  padding: 0.7rem 0.5rem;
  text-align: center;
}
.other-info {
  display: flex;
  color: #999;
  font-size: 1.3rem;
  border-bottom: 0.1rem solid #ededed;
  padding: 1rem 1rem;
}
.other-info div {
  flex: 1;
}
.totalStock {
  text-align: center;
}
.services_1 {
  text-align: right;
}
.serves-wrap {
  display: flex;
  font-size: 1.3rem;
  color: #333;
  border-bottom: 1rem solid #f9f9f9;
  justify-content: space-between;
  padding: 2rem 1rem;
}
.serves-wrap img {
  width: 1.3rem;
  height: 1.3rem;
}
</style>
