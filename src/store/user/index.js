//登录与注册
import { reqGetCode, reqUserRegister,reqUserLogin,reqUserInfo,reqOutLogin } from '@/api';
const state = {
    code: '',
    token: localStorage.getItem('TOKEN'),
    userInfo: {},
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let res = await reqGetCode(phone);
        if (res.code == 200) {
            commit('GETCODE', res.data)
            return 'ok';
        } else {
            return Promise.reject(new Error('获取注册验证码失败'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let res = await reqUserRegister(user);
        if(res.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('注册失败'));
        }
    },
    //用户登录
    async reqUserLogin({commit},data){
        let res = await reqUserLogin(data);
        if(res.code == 200){
            commit('USERLOGIN',res.data.token);
            //持久化存储token
            localStorage.setItem('TOKEN',res.data.token);
            return 'ok';
        }else{
            return Promise.reject(new Error('登陆失败'));
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let res = await reqUserInfo();
        if(res.code == 200){
            commit('GETUSERINFO',res.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('获取用户信息失败'));
        }
    },
    //退出登录
    async userOutLogin({commit}){
        let res = await reqOutLogin();
        if(res.code == 200){
            commit('CLEARALL');
            return 'ok';
        }else{
            return Promise.reject(new Error('推出失败'));
        }
    }
};
const mutations = {
    GETCODE(state, value) {
        state.code = value;
    },
    USERLOGIN(state,value){
        state.token = value;
    },
    GETUSERINFO(state,value){
        state.userInfo = value;
    },
    CLEARALL(state){
        state.token = '';
        state.userInfo = {};
        localStorage.removeItem('TOKEN');
    }
};
const getters = {};

export default {
    state, actions,
    mutations, getters,
}