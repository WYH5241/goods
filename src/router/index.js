//配置路由的文件

//引入
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route';
import store from '@/store';
Vue.use(VueRouter);

//备份push
let originPush = VueRouter.prototype.push;
//备份replace
let originReplace = VueRouter.prototype.replace;
//重写push | replace
//location:跳转的地址(往哪里跳转),res成功回调,rej失败回调
VueRouter.prototype.push = function(location,res,rej) {
    if(res && rej){
        originPush.call(this,location,res,rej);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function(location,res,rej) {
    if(res && rej){
        originReplace.call(this,location,res,rej);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

//配置路由
let router =  new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 };
      },
     
})

router.beforeEach(async (to,from,next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if(token){
        //已经登陆后不能再去登陆页面(login)
        if(to.path == '/login'){
            next('/home');
        }else{
            //登陆后如果已有用户名
            if(name){
                next();
            }else{
                //如果没有用户信息，派发action后获取用户信息再跳转
                try {
                    //获取用户信息
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效,获取不到用户信息，需要重新登录
                    //清除token
                    await store.dispatch('userOutLogin');
                    next('/login');
                }
            }
        }
    }else{
        //未登录
        if(to.path.indexOf('/trade')!=-1 || to.path.indexOf('/pay')!=-1
        || to.path.indexOf('/center')!=-1){
            next('/login?redirect='+to.path);
        }else{
            next();
        }
    }
});


export default router;