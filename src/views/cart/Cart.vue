<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list />
    <cart-button-bar />
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList.vue";
import CartButtonBar from "./childComps/CartButtonBar.vue";
export default {
  name: "Cart",
  components: { NavBar, CartList, CartButtonBar },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style>
.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>
