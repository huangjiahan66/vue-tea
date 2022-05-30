<template>
  <header>
    <div class="search-return" @click="goBack">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="search-main">
      <i class="iconfont icon-fangdajing"></i>
      <form action="" onsubmit="return false" @keyup.enter="goSearchList">
        <input
          type="search"
          placeholder="搜索您喜欢的产品..."
          v-model="searchVal"
        />
      </form>
    </div>
    <div class="serach-btn" @click="goSearchList">搜索</div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchVal: this.$route.query.key || "", //用户输入的
      searchArr: [],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goSearchList() {
      // 如果为空 什么都不要做
      if (!this.searchVal) {
        return;
      }
      // 如果本地存储没东西 就设置  有就获取
      if (!localStorage.getItem("searchList")) {
        localStorage.setItem("searchList", "[]");
      } else {
        this.searchArr = JSON.parse(localStorage.getItem("searchList"));
      }

      this.searchArr.unshift(this.searchVal); //增加数据
      let newArr = new Set(this.searchArr); // arrray.from new set 数组去重
      localStorage.setItem("searchList", JSON.stringify(Array.from(newArr)));

      if (this.searchVal === this.$route.query.key) return; //路径如果没有变化 别跳
      this.$router.push({
        name: "list",
        query: {
          key: this.searchVal,
        },
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
}
.serach-btn {
  font-size: 0.426666rem;
}
</style>
