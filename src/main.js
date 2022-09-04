import Vue from 'vue'
import {MessageBox,} from 'element-ui';
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
//注册三级联动的全局组件
import TypeNav from '../src/components/TypeNav';
import Pagination from '@/components/Pagination';
Vue.component(TypeNav.name,TypeNav);
Vue.component(Pagination.name,Pagination);

//注册element-ui组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入路由
import router from '../src/router';
//引入仓库vuex
import store from './store';
//引入mock数据
import '@/mock/mockServer';
//引入swiper样式
import 'swiper/css/swiper.css';
// import {reqGetSearchInfo} from '@/api';
//引入表单验证插件
import '@/plugins/validate';

Vue.config.productionTip = false
//统一api接口 
import * as API from '@/api';

import xk from '@/assets/xk.png';
Vue.use(VueLazyload,{
  //懒加载默认图
  loading: xk,
})

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,//注册路由后，组件身上都有$route,$router属性
  store,//注册仓库后，组件实例身上都有$store属性
}).$mount('#app')
