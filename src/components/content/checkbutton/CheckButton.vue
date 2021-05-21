<template>
  <div class="check-button">
    <img src="~assets/img/cart/True.svg" alt="" :class="{ check: isChecked }" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
}
.check-button img {
  width: 1.5rem;
}
.check {
  background: red;
  border-color: red;
  border-radius: 50%;
}
</style>
