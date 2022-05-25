<template>
  <div>
    <van-tabbar
      v-model="active"
      fixed
      active-color="#ee0a24"
      inactive-color="#000"
    >
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/list">分类</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/cart">购物车 </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style></style>
