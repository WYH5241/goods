//对axios二次封装


import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import 'nprogress/nprogress.css';
//引入store
import store from '@/store'

//创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径
    baseURL: '/api',
    timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
    //config：配置对象，有header属性（请求头）
    if(store.state.detail.uuid_token){
        //给请求头添加字段
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    //将token携带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
    nprogress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调
    //进度条结束
    nprogress.done();
    return res.data;
},(err) => {
    //响应失败的回调
    return Promise.reject(new Error('响应失败'));
});


//对外暴露
export default requests;