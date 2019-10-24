import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ElementUI from "element-ui";
import DashBoard from "./components/DashBoard.vue";
import SearchPage from "./components/SearchPage.vue";
import Schedule from "./components/Schedule.vue";
import Information from "./components/InformationPage";
import StatisticsPage from "./components/StatisticsPage";
import 'reset-css';
import axios from 'axios';
import MyApply from "./components/MyApply";
import PostPage from "./components/PostPage";

axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
    { path: "/", component: DashBoard },
    { path: "/search", component: SearchPage, props : {auth : false} },
    { path: "/search/group/:group", component: SearchPage, props : {auth : false} },
    { path: "/search/group/:group/category/:category", component: SearchPage, props : {auth : false} },
    { path: "/search/group/:group/category/:category/speciality/:speciality", component: SearchPage, props : {auth : false} },
    { path: "/info", component: Information },
    { path: "/info/:id", component: PostPage },
    { path: "/stats", component: StatisticsPage },
    { path: "/schedule", component: Schedule },
    { path: "/apply", component: MyApply },
    { path: "/myapply", component: MyApply, props : {auth : false} }

];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
