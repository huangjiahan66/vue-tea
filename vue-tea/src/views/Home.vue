<template>
  <div class="home">
    <div class="headers">
      <div class="headers-main">
        <Header></Header>

        <van-tabs v-model="active" class="ly-tabs" @change="handleTabChange">
          <div v-for="(item, index) in tabs" :key="index">
            <van-tab :title="item.label"></van-tab>
          </div>
        </van-tabs>
      </div>
    </div>

    <section ref="wrapper">
      <div>
        <div v-for="(item, index) in newData" :key="index">
          <Swiper
            v-if="item.type == 'swiperList'"
            :swiperList="item.data"
          ></Swiper>
          <Icon v-if="item.type == 'iconsList'" :iconsList="item.data"></Icon>
          <Recommend
            v-if="item.type == 'recommendList'"
            :recommendList="item.data"
          ></Recommend>
          <Like v-if="item.type == 'LikeList'" :adList="item.data"></Like>
          <Ad v-if="item.type == 'adList'" :likeList="item.data"></Ad>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import Swiper from "@/components/home/Swiper.vue";
import Icon from "@/components/home/Icon.vue";
import Recommend from "@/components/home/Recommend.vue";
import Like from "@/components/home/Like.vue";
import Ad from "@/components/home/Ad.vue";
// import LyTabs from "ly-tab";
import { LyTabs, LyTabBar, LyTabItem } from "ly-tab";
import BetterScroll from "better-scroll";

import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    Icon,
    Recommend,
    Like,
    Ad,

    LyTabs,
    LyTabBar,
    LyTabItem,
  },
  data() {
    return {
      active: "0",
      tabs: [], //tabs数据
      newData: [],
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    getData() {
      axios({
        url: "/api/index_list/0/data/1",
      }).then((res) => {
        this.tabs = res.data.data.topBar; //tabs数据
        this.newData = res.data.data.data;
      });

      this.$nextTick(() => {
        new BetterScroll(this.$refs.wrapper, {
          movable: true,
          zoom: true,
          click: true,
        });
      });
    },
    async addData(index) {
      let res = await axios({ url: `/api/index_list/${index}/data/1` });
      if (res.data.data.constructor !== Array) {
        this.newData = res.data.data.data;
      } else {
        this.newData = res.data.data;
      }
      console.log(res);
    },
    // 点击Tab
    handleTabChange(index) {
      this.addData(index);
    },
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.headers {
  width: 100%;
  height: 2.28rem;
}
.headers-main {
  position: fixed;
  left: 0;
  top: 0;
}
section {
  flex: 1;
  overflow: hidden;
}
.ly-tabs {
  width: 100%;
  /* margin-top: 1.2rem; */
  margin-top: 1.2rem;
}

.wrapper {
  height: 100vh;
  height: 14.6667rem;
  overflow: hidden;
}
</style>
