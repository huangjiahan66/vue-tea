<template>
  <div class="my container">
    <header>
      <div class="login" @click="goLogin">登录/注册</div>
    </header>
    <section>
      <ul>
        <li>地址管理</li>
      </ul>
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  name: "My",
  components: {
    Tabbar,
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.266666rem;
  background-color: #b0352f;
  .login {
    padding: 0.16rem 0.4rem;
    font-size: 0.426666rem;
    color: #fff;
    background-color: #f6ab32;
    border-radius: 6px;
  }
}
section {
  flex: 1;
  overflow: hidden;
  ul li {
    padding: 0.4rem;
    font-size: 0.426666rem;
  }
}
</style>
