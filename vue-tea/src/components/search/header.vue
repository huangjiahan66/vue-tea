<template>
  <header>
    <div class="search-return" @click="handelBack">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="search-main">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false">
        <input type="search" placeholder="搜索您喜欢的产品..." />
      </form>
    </div>
    <div class="serach-btn" @click="goSearchList">搜索</div>
  </header>
</template>

<script>
export default {
  methods: {
    handelBack() {
      this.$router.back();
    },
    goSearchList() {
      this.$router.push({
        path: "/search/list",
      });
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.173333rem;
  color: #fff;
  background-color: #b0352f;
}
.search-return,
.serach-btn {
  padding: 0 0.266666rem;
}
.search-return i {
  font-size: 0.746666rem;
}
.search-main {
  display: flex;
  align-items: center;
  width: 6.933333rem;
  height: 0.8rem;
  border-radius: 12px;
  background-color: #ffffff;
}
.search-main i {
  padding: 0 0.266666rem;
  color: #666666;
}
.search-main form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.search-main form input {
  width: 100%;
  font-size: 0.4267rem;
  color: #666666;
}
.serach-btn {
  font-size: 0.426666rem;
}
</style>
