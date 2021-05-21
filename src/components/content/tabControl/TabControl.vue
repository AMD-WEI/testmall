<template>
  <div class="tab-control">
    <div
      v-for="(item, key) in titles"
      :key="key"
      class="tab-control-item"
      :class="{ active: key === currentIndex }"
      @click="tab_control_click(key)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {},
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    offsetTop: 0,
  },
  methods: {
    tab_control_click(key) {
      this.currentIndex = key;
      this.$emit("tabClick", key);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  font-size: 1.3rem;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 0.5rem;
}
.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 0.3rem solid var(--color-tint);
}
</style>
