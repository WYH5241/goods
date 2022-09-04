<template>
  <dir>
    <!-- 三级联动的全局组件 -->
    <TypeNav/>
    <ListContain/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </dir>
</template>

<script>
//引入其余组件
import ListContain from './ListContain';
import Recommend from './Recommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
import {mapState} from 'vuex';

export default {
  components: {
    ListContain,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted () {
    //发送请求，获取floor数据
    this.$store.dispatch('getFloorList');
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
};
</script>

<style>
</style>