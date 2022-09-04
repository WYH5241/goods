//home模块的小仓库

import {reqCategoryList, reqGetBannerList,reqFloorList} from '@/api';
const state = {
    //三级菜单的数据
    categoryList: [],
    //轮播图数据
    bannerList:[],
    //floor数据
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state,value){
        state.categoryList = value;
    },
    GETBANNERLIST(state,value){
        state.bannerList = value;
    },
    GETFLOORLIST(state,value){
        state.floorList = value;
    }
};
const actions = {
    //通过API接口函数调用，向服务器发请求，获取服务器数据
    async categoryList(context,value){
        let res = await reqCategoryList();
        value = res.data;
        if(res.code == 200){
            context.commit('CATEGORYLIST',value);
        }
    },
    //获取首页轮播图数据
    async getBannerList(context,value){
        let res = await reqGetBannerList();
        value = res.data;
        if(res.code == 200){
            context.commit('GETBANNERLIST',value);
        }
    },
    //获取floor数据
    async getFloorList(context,value){
        let res = await reqFloorList();
        value = res.data;
        if(res.code == 200){
            context.commit('GETFLOORLIST',value);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}