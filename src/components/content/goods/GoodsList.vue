<template>
  <div class="goods">
    <!-- <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
    /> -->
    <!-- {{ item }} -->
    <template v-for="(item, key) in goods">
      <goods-list-item :key="key" :goods-item="item" />
    </template>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem.vue";

export default {
  name: "GoodsList",
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
