<template>
	<div class='cart'>
		这是购物车
		<Tabbar></Tabbar> 
	</div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: "Cart",
  components:{
  	Tabbar
  }
};
</script>