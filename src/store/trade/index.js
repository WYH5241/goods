import {reqUserAddress,reqUserOrder} from '@/api';

const state ={
    address:[],
    orderInfo:{},
};
const actions = {
    //获取用户地址信息
    async getUserAddressInfo({commit}){
        let res = await reqUserAddress();
        if(res.code == 200){
            commit('GETUSERADDRESSINFO',res.data);
        }
    },
    //获取订单商品数据
    async getUserOrder({commit}){
        let res = await reqUserOrder();
        if(res.code == 200){
            commit('GETUSERORDER',res.data);
        }
    }
};
const mutations = {
    GETUSERADDRESSINFO(state,value){
        state.address = value;
    },
    GETUSERORDER(state,value){
        state.orderInfo = value;
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters,
}