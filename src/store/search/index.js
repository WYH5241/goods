import {reqGetSearchInfo} from '@/api';
//search模块的小仓库
const state = {
    searchList:{},
};
const mutations = {
    GETSEARCHLIST(state,value){
        state.searchList = value;
    }
};
const actions = {
    //获取search模块数据
    async getSearchList({commit},params){
        let res =  await reqGetSearchInfo(params);
        if(res.code == 200){
           commit('GETSEARCHLIST',res.data);
        }
    }
};
//可以把将来要用的数据简化，方便获取数据
const getters = {
    //state:当前仓库的state
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
}