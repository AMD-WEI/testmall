<template>
  <div class="recommend">
    <div v-for="(item, key) in recommends" :key="key" class="recommend-item">
      <a :href="item.link">
        <img :src="item.recommend_url" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 1.3rem;
  padding: 2rem 0 3rem;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 4rem;
  flex-wrap: nowrap;
}
</style>
