import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DashBoard from "./components/DashBoard.vue";
import SearchPage from "./components/SearchPage.vue";
import Schedule from "./components/Schedule.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: "/", component: DashBoard },
    { path: "/search", component: SearchPage },
    { path: "/info", component: DashBoard },
    { path: "/stats", component: DashBoard },
    { path: "/apply", component: DashBoard },
    { path: "/schedule", component: Schedule }
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
