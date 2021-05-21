<template>
  <div id="cartList">
    <scroll class="content">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: { Scroll, CartListItem },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
#cartList {
  height: 100vh;
}
.content {
  height: calc(100vh - 4rem - 4rem - 3rem);
  overflow: hidden;
}
</style>
