<template>
  <header>
    <h1><img src="../../assets/image/logo.png" alt="" /></h1>
    <div class="search" @click="handleSearch">
      <i class="iconfont icon-Magnifier"></i>
      <span class="placeholder">搜你喜欢的</span>
    </div>
    <div class="kefu">
      <i class="iconfont icon--kefu"></i>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleSearch() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.1733rem;
  background-color: #b0352f;
}
img {
  width: 1.8667rem;
  height: 1.6133rem;
}

.search {
  display: flex;
  align-items: center;
  width: 6.56rem;
  height: 0.8rem;
  background: #ffffff;
  border-radius: 0.1333rem;
}
.search i {
  padding: 0 0.4rem;
  font-size: 0.48rem;
}
.search .placeholder {
  font-size: 0.3733rem;
  color: #ccc;
}
.kefu i {
  font-size: 0.96rem;
  color: #fff;
}
</style>
