<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        class="swiper-item"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img :src="item.imgUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: Array,
  },
  data() {
    return {};
  },
};
</script>

<style>
.swiper {
  height: 4.4rem;
  width: 100%;
}
.my-swipe {
  height: 4.4rem;
  width: 100%;
}
.swiper-item {
  height: 4.4rem;
  width: 100%;
}
.swiper-item img {
  height: 4.4rem;
  width: 100%;
}
</style>
