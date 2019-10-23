import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ElementUI from "element-ui";
import DashBoard from "./components/DashBoard.vue";
import SearchPage from "./components/SearchPage.vue";
import Schedule from "./components/Schedule.vue";
import Information from "./components/Information";
import StatisticsPage from "./components/StatisticsPage";
import 'reset-css';
import axios from 'axios';
import MyApply from "./components/MyApply";
//
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const jsonRouter = jsonServer.router('../data/db.json');
// const middlewares = jsonServer.defaults();
//
// server.use(middlewares);
// server.use(jsonRouter);
// server.listen(3000, () => {
//     console.log('JSON Server is running')
// });


axios.defaults.baseURL = "http://localhost:3000";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
    { path: "/", component: DashBoard },
    { path: "/search", component: SearchPage },
    { path: "/search/group/:group", component: SearchPage },
    { path: "/search/group/:group/category/:category", component: SearchPage },
    { path: "/search/group/:group/category/:category/speciality/:speciality", component: SearchPage },
    { path: "/info", component: Information },
    { path: "/info/:id", component: Information },
    { path: "/stats", component: StatisticsPage },
    { path: "/apply", component: DashBoard },
    { path: "/schedule", component: Schedule },
    { path: "/myapply", component: MyApply }

];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
