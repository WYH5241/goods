//路由配置信息


//引入路由组件
// import Home from '../pages/Home';
// import Login from '@/pages/Login';
// import Regiser from '../pages/Regiser';
// import Search from '../pages/Search';
// import Detail from '@/pages/Detail';
// import AddCartSuccess from '@/pages/AddCartSuccess';
// import ShopCart from '@/pages/ShopCart';
// import Trade from '@/pages/Trade';
// import Pay from '@/pages/Pay';
// import PaySuccess from '@/pages/PaySuccess';
// import Center from '@/pages/Center';
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder';
// import GroupOrder from '@/pages/Center/groupOrder';


export default [
    {
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: { show: true },
        //二级路由
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component: () => import('@/pages/Center/groupOrder'),
            },
            {
                path: '/center',
                redirect: '/center/myorder',
            },
        ],
    },
    {
        path: '/paysuccess',
        component: () => import('@/pages/PaySuccess'),
        meta: { show: true }
    },
    {
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: { show: true },
        beforeEnter: (to, from,next) => {
            if(from.path == '/trade'){
                next();
            }else{
                next(flase);
            }
        }
    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: { show: true },
        beforeEnter: (to, from,next) => {
            if(from.path == '/shopcart'){
                next();
            }else{
                next(flase);
            }
        }
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: { show: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        meta: { show: true },
    },
    {
        path: '/login',
        component: () => import('@/pages/Login'),
    },
    {
        path: '/regiser',
        component: () => import('@/pages/Regiser'),
    },
    {
        path: '/detail/:skuId?',
        component: () => import('@/pages/Detail'),
        meta: { show: true }
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: { show: true }
    },
    //重定向，让页面默认/时访问首页
    {
        path: '/',
        redirect: '/home'
    }
]