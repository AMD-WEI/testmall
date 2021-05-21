<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/backword-line-d.png" alt="" class="title-img" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in title"
          :key="index"
          @click="titleClick(index)"
          class="title-item"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar.vue";
export default {
  name: "DetailsNavBar",
  components: { NavBar },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back(-1);
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
  color: black;
  font-size: 1.5rem;
}
.title-img {
  width: 2rem;
  height: 2rem;
  position: absolute;
  margin: 0.8rem -1rem;
}
.active {
  color: var(--color-high-text);
}
</style>
