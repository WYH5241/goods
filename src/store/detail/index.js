import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api";
import {getUUID} from '@/utils/uuid_token';
const state = {
    goodInfo:{},
    //游客临时身份
    uuid_token: getUUID(),
};
const actions = {
    //获取产品信息
    async getGoodInfo({commit},skuId){
        let res = await reqGoodsInfo(skuId);
        if(res.code == 200){
            commit('GETGOODINFO',res.data)
        }
    },
    //将产品添加到购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let res = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(res.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('加入购物车失败'));
        }
    }
};
const mutations = {
    //获取产品信息
    GETGOODINFO(state,value){
        state.goodInfo = value;
    }
};
const getters = {
    //简化路径导航的数据
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    //简化产品售卖属性的数据
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
};

export default{
    state,
    actions,
    mutations,
    getters
}