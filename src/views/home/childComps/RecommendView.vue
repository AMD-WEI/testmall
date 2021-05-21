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
  font-size: 1rem;
  padding: 1rem 0 2rem;
  border-bottom: 1rem solid #eee;
  flex-wrap: wrap;
}
.recommend-item {
  flex: 1;
  padding: 0.5rem 0 0.5rem 0;
}
.recommend-item img {
  width: 5rem;
  padding: 0 1rem 0.2rem 1rem;
}
</style>
