import Login from "@/views/Login";
import Reg from "@/views/Reg";
import Forget from "@/views/Forget";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/login', component: Login, name: 'login'},
    {path: '/reg', component: Reg, name: 'reg'},
    {path: '/forget', component: Forget, name: 'forget'},
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;