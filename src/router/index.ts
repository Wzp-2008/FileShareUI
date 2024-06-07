import {createRouter, createWebHashHistory, RouteMeta, RouteRecordRaw} from "vue-router";
import {useUserStore} from "../store/UserStore.ts";
import {Component} from "vue";
import {HomeFilled} from "@element-plus/icons-vue";
declare module 'vue-router' {
    interface RouteMeta {
        authorizedRequired?: boolean;
        adminRequired?: boolean;
        menu: {
            name: string;
            icon?: Component;
        }
    }
}
const routes: RouteRecordRaw[] = [
    {name: "Home", component: () => import("../views/FileShare.vue"), path: "/", meta: {menu: {name: "文件分享站", icon: HomeFilled}}},
    {name: "OfflineDownload", component: () => import("../views/OfflineDownload.vue"), path: "/offline", meta: {authorizedRequired: true, menu: {name: "离线下载"}}},
    {name: "Transcoding", component: () => import("../views/VideoTranscoding.vue"), path: "/transcoding", meta: {authorizedRequired: true, menu: {name: "视频转码"}}},
    {name: "User", component: () => import("../views/UserManager.vue"), path: "/user", meta: {authorizedRequired: true, adminRequired: true, menu: {name: "用户管理"}}},
    {name: "Share", component: () => import("../views/ShareManager.vue"), path: "/share", meta: {authorizedRequired: true, adminRequired: true, menu: {name: "分享管理"}}}
];
const router = createRouter({history: createWebHashHistory(), routes});
export const isRouterAccessible = (meta?: RouteMeta) => {
    if (meta && meta.authorizedRequired){
        const {token, isAdmin} = useUserStore();
        if (token){
            if (meta.adminRequired){
                return isAdmin;
            }
            return !!token;
        }
        return false;
    }
    return true;
}
router.beforeEach((to) => {
    return isRouterAccessible(to.meta)
})
export default router;