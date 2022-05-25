<template>
  <ul class="icons">
    <li v-for="(item, index) in iconsList" :key="index">
      <img :src="item.imgUrl" alt="" />
      <span>{{ item.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    iconsList: Array,
  },
  data() {
    return {};
  },
};
</script>

<style>
.icons {
  display: flex;
  justify-content: space-around;
}
ul li {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.4rem 0;
}
.icons img {
  width: 1.0133rem;
  height: 1.0133rem;
  margin-bottom: 0.1333rem;
}
.icons span {
  font-size: 0.4267rem;
}
</style>
