<template>
  <tab-bar>
    <!-- 传入 activeColor=""可以改变颜色 -->
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/首页.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/首页2.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/分类.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类2.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车2.jpg">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/我的.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/我的2.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>

</style>
