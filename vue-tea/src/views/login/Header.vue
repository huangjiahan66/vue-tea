<template>
  <header>
    <div>
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div>
      <slot>
        <span>登录</span>
      </slot>
    </div>
    <div>
      <i class="iconfont icon-kefu"></i>
    </div>
  </header>
</template>

<script></script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.173333rem;
  color: #fff;
  background-color: #b0352f;
  span {
    font-size: 0.48rem;
  }
  i {
    padding: 0 0.4rem;
    font-size: 0.586666rem;
  }
}
</style>
