//对所有的APi进行统一管理

import requests from "./request";
import mockRequests from './mockAjax';

//三级联动的接口
// /api/product/getBaseCategoryList   无参数get请求
export const reqCategoryList = () => {
    //发送axios请求返回结果
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    })
}

//获取banner（首页轮播图）数据
export const reqGetBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'get',
    })
}

//获取floor数据
export const reqFloorList = () => {
    return mockRequests({
        url: '/floor',
        method: 'get',
    })
}

//获取搜索模块数据  /api/list  POST
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params,
    })
}

//获取产品详情信息的数据 /api/item/{ skuId }  GET
export const reqGoodsInfo = (skuId) => {
    return requests({
        url: `/item/${skuId}`,
        method: 'get',
    })
}

//将产品添加到购物车中，获取更新产品的数量  /api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateShopCart = (skuId,skuNum) => {
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post',
    })
}

//获取购物车列表数据 /api/cart/cartList  get
export const reqCartList = () => {
    return requests({
        url: '/cart/cartList',
        method: 'get',
    })
}

//删除购物车数据   /api/cart/deleteCart/{skuId}   DELETE
export const reqDeleteCart = (skuId) => {
    return requests({
        url: `/cart/deleteCart/${skuId}`,
        method: 'DELETE',
    })
}

//修改购物车产品状态   /api/cart/checkCart/{skuId}/{isChecked}    get
export const reqUpdateCart = (skuId,isChecked) => {
    return requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get',
    })
}

//注册获取验证码   /api/user/passport/sendCode/{phone}     get
export const reqGetCode = (phone) => {
    return requests({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get',
    })
}

//用户注册   /api/user/passport/register   post
export const reqUserRegister = (data) => { 
    return requests({
        url: '/user/passport/register',
        data,
        method: 'post',
    })
}

//用户登录  /api/user/passport/login   post
export const reqUserLogin = (data) => {
    return requests({
        url: '/user/passport/login',
        data,
        method: 'post',
    })
}

//获取用户信息     /api/user/passport/auth/getUserInfo   get
export const reqUserInfo = () => {
    return requests({
        url: '/user/passport/auth/getUserInfo',
        method: 'get',
    })
}

//退出登录    /api/user/passport/logout   get
export const reqOutLogin = () => {
    return requests({
        url: '/user/passport/logout',
        method: 'get',
    })
}

//获取用户地址信息    /api/user/userAddress/auth/findUserAddressList    get
export const reqUserAddress = () => {
    return requests({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'get',
    })
}

//获取用户订单商品信息    /api/order/auth/trade     get
export const reqUserOrder = () => {
    return requests({
        url: '/order/auth/trade',
        method: 'get',
    })
}

//提交订单         /api/order/auth/submitOrder?tradeNo={tradeNo}      post
export const submitOrder = (tradeNo,data) => {
    return requests({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        data,
        method: 'post',
    })
}

//获取订单信息      /api/payment/weixin/createNative/{orderId}       get
export const reqPayInfo = (orderId) => {
    return requests({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get',
    })
}

//获取订单支付状态      /api/payment/weixin/queryPayStatus/{orderId}    get
export const reqPayStatus = (orderId) => {
    return requests({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get',
    })
}

//获取个人中心我的订单信息      /api/order/auth/{page}/{limit}      get
export const reqMyOrder = (page,limit) => {
    return requests({
        url: `/order/auth/${page}/${limit}`,
        method: 'get',
    })
}