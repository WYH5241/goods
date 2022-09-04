import Vue from "vue";
import Vuex from 'vuex';
//使用插件
Vue.use(Vuex);
//引入小仓库
import home from "./home";
import search from "./search";
import detail from './detail';
import shopCart from "./shopCart";
import user from "./user";
import trade from "./trade";

//对外暴露
export default new Vuex.Store({
    //实现Vuex仓库模块化开发存储数据
    modules: {
        home,
        search,
        detail,
        shopCart,
        user,
        trade,
    }
})