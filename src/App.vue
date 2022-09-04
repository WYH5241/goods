<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在Home、Search中显示，在登录、注册中隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入Header
import Header from './components/Header';
//引入Foote
import Footer from './components/Footer';

export default {
  // name: ' ',
  components: {
    Header,
    Footer,
  },
  mounted () {
    //发送action请求，获取商品分类的三级列表数据
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>