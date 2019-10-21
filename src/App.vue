<template>
  <div id="app">
    <router-link to="/">
      <img src="./assets/logo.png" alt="logo"/>
    </router-link>
    <MenuBar :menu="menu" />
    <router-view />

    <Schedule />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";
import Schedule from "./components/Schedule";

// Data for MenuBar
const menu = [
  {
    icon: "icofont-search-1",
    name: "특기 검색",
    url: "/search"
  },
  {
    icon: "icofont-info-circle",
    name: "군 지원정보",
    url: "/info"
  },
  {
    icon: "icofont-chart-bar-graph",
    name: "통계",
    url: "/stats"
  }
];

export default {
  name: "App",
  components: {
    MenuBar,
    Schedule
  },
  data() {
    return {
      menu: menu
    };
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
