import { v4 as uuidv4 } from 'uuid';
export const getUUID = () => {
    //先从本地存储获取uuid（本地存储是否有）
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    //如果没有则生成
    if(!uuid_token){
        uuid_token = uuidv4();
        //本地存储
        localStorage.setItem('UUIDTOKEN',uuid_token);
    }
    return uuid_token;
}