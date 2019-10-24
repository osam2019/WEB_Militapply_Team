<template>
  <div id="app">
    <router-link to="/">
      <img id="logo" src="/img/logo.png" alt="logo" />
    </router-link>
    <MenuBar :menu="menu" />
    <router-view />
    <el-footer>
      <p>© Copyright 2019. All Rights Reserved.</p>
    </el-footer>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";

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
    MenuBar
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

#logo {
  height: 150px;
}

.el-footer {
  margin-top: 50px;
  height: 60px;
  background-color: #2c3e50;
  color: white;
}

.el-footer > p {
  line-height: 60px;
  font-size: 0.8rem;
}
</style>
