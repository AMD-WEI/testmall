<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
    <div
      v-for="(value, name, index) in paramInfo.set"
      :key="index"
      class="flex info-list-wrap"
    >
      <div class="info-list-tit">{{ name }}</div>
      <div class="info-list-tits">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  components: {},
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-wrap {
  border-top: 1rem solid #ececec;
  border-bottom: 1rem solid #ececec;
}
.info-list-wrap {
  font-size: 1.5rem;
  border-bottom: 0.2rem solid #ececec;
  padding: 0rem 3rem;
  line-height: 3rem;
}
.info-list-tit {
  width: 34%;
}
.info-list-tits {
  width: 66%;
}
</style>
