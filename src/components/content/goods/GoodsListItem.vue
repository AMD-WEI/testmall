<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="goodsItem.img" alt="" @load="imageLoad" />
    <div class="goods-list-text">
      <span class="goods-list-title">
        <p>{{ goodsItem.title }}</p>
      </span>
      <span class="goods-list-price">￥{{ goodsItem.price }}</span>
      <span class="goods-list-orgprice">
        <s>{{ goodsItem.orgPrice }}</s>
      </span>
      <span class="goods-list-collect">
        <i class="collect-icon"></i>{{ goodsItem.cfav }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: [Object, Array],
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageLoadSuccess");
    },
    goodsItemClick() {
      this.$router.push("/detail" + this.goodsItem.tradeItemId);
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 17rem;
  position: relative;
  padding-bottom: 4rem;
  align-items: center;
}
.goods-item img {
  height: 25rem;
  width: 100%;
  border-radius: 0.4rem;
  object-fit: cover;
}
.goods-list-text {
  position: absolute;
}
.goods-list-title {
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1.3rem;
}
.goods-list-price {
  font-size: 1.4rem;
  font-weight: bold;
  color: red;
}
.goods-list-orgprice {
  padding-left: 0.5rem;
}
.goods-list-collect {
  float: right;
  font-size: 1.3rem;
  color: #999999;
}
.collect-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  background: url(~assets/img/home/collect_icon.png) no-repeat;
  background-size: cover;
  vertical-align: bottom;
}
</style>
