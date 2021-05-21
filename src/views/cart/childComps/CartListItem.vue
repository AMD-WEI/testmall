<template>
  <div id="cart-item">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">{{ product.price }}￥</div>
        <div class="item-count">X{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton.vue";
export default {
  name: "CartListItem",
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
#cart-item {
  width: 100%;
  display: flex;
  padding: 1rem;
  border-bottom: 0.3rem solid #ccc;
}
.item-selector {
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item.title .item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-img {
  padding: 1rem;
}
.item-img img {
  width: 10rem;
  height: 10rem;
  display: block;
  border-radius: 1rem;
  object-fit: cover;
}
.item-info {
  font-size: 1.4rem;
  color: #333;
  padding: 2rem 2rem;
  position: relative;
}
.item-desc {
  font-size: 1.3rem;
  color: #666;
}
.info-bottom {
  margin-top: 3rem;
  position: absolute;
  bottom: 3rem;
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.item-price {
  color: orangered;
}
</style>
