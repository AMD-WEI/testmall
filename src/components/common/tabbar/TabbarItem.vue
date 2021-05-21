<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- <div :class="{ active: isActive }"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      //isActive: true,
    };
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  padding: 0.5rem 0 0.5rem 0;
}
.tab-bar-item img {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>

