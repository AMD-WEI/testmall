<template>
  <tab-bar>
    <tabbar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home-filling.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tabbar-item>
    <!-- <tabbar-item path="/category" activeColor="blue"> -->
    <tabbar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/modular.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/modular-filling.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tabbar-item>
    <!-- <tabbar-item path="/cart" activeColor="blue"> -->
    <tabbar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/Shopping-cart.svg" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/Shopping-cart-filling.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/user-filling.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  name: "MainTabBar",
  components: { TabBar, TabbarItem },
};
</script>

<style>
</style>
