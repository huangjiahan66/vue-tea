<template>
  <div class="search">
    <Header></Header>
    <section>
      <div class="search-history">
        <div class="history">
          <h2>历史搜索</h2>
          <span class="history-clear">清空历史 记录</span>
        </div>
        <ul>
          <li>茶叶</li>
          <li>茶叶</li>
          <li>茶叶</li>
          <li>茶叶</li>
          <li>茶叶</li>
        </ul>
      </div>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/search/header";
import Like from "@/components/home/Like";
import Tabbar from "@/common/Tabbar/Tabbar.vue";
export default {
  components: {
    Tabbar,
    Header,
    Like,
  },
};
</script>

<style scoped>
.search-index {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
section {
  flex: 1;
  background-color: #f5f5f5;
  overflow: hidden;
  height: 100vh;
}
.history {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.history-clear {
  font-size: 0.4267rem;
  margin-right: 1.3333rem;
}
.search-history h2 {
  position: relative;
  padding: 0.533333rem;
  font-weight: 400;
  font-size: 0.48rem;
}
.search-history h2 i {
  padding-right: 0.08rem;
  color: red;
  font-size: 0.48rem;
}
.search-history h2 span:last-child {
  position: absolute;
  right: 0.533333rem;
}
.search-history ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.266666rem;
}
.search-history ul li {
  margin: 0.266666rem;
  padding: 0.08rem 0.16rem;
  font-size: 0.373333rem;
  border: 1px solid #ccc;
}
</style>
