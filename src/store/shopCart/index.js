import { reqCartList, reqDeleteCart, reqUpdateCart } from '@/api';
const state = {
    cartlist: [],
};
const actions = {
    //获取购物车列表
    async getCarList({ commit }) {
        let res = await reqCartList();
        if (res.code == 200) {
            commit('GETCARLIST', res.data);
        }
    },
    //删除购物车
    async deleteCart({ commit }, skuId) {
        let res = await reqDeleteCart(skuId);
        if (res.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('删除购物车失败'));
        }
    },
    //修改购物车产品状态
    async upDataCart({ commit }, { skuId, isChecked }) {
        let res = await reqUpdateCart(skuId, isChecked);
        if (res.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('修改购物车产品状态失败'));
        }
    },
    //删除全部勾选的商品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartlist.cartInfoList.forEach(item => {
            let res = item.isChecked == 1 ? dispatch('deleteCart', item.skuId) : '';
            PromiseAll.push(res);
        });
        return Promise.all(PromiseAll);
    },
    //全部勾选
    upDateAllCartChecked({dispatch,state},isChecked){
        let promiseAll = [];
        state.cartlist[0].cartInfoList.forEach(item => {
            let res = dispatch('upDataCart',{skuId:item.skuId,isChecked});
            promiseAll.push(res);
        })
        return Promise.all(promiseAll);
    }
};
const mutations = {
    GETCARLIST(state, value) {
        state.cartlist = value;
    }
};
const getters = {
    cartlist(state) {
        return state.cartlist[0] || {};
    }
};

export default {
    state,
    actions,
    mutations,
    getters,
}