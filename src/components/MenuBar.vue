<template>
  <nav>
    <ul>
      <li v-for="item in menu" :key="item.name">
        <router-link :to="item.url">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
    <router-link to="/apply">
      <button>
        <i class="icofont-file-text"></i>
        <span>내 지원정보</span>
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    menu: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  font-size: 1rem;
  font-weight: 600;
  margin: 20px auto;
}
ul {
  display: inline-block;
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  font-weight: 600;
  display: inline-block;
  margin: 0 20px;
}

.router-link-active {
  color: rgb(231, 76, 60);
}

a {
  color: inherit;
  text-decoration: none;
}

li::after {
  content: "";
  display: block;
  margin: 10px auto 0;
  width: 20px;
  height: 3px;
}

li:hover::after {
  background-color: rgba(231, 76, 60, 1);
}

i {
  margin-right: 5px;
}

img {
  width: 1rem;
  margin-right: 5px;
}

button {
  box-sizing: border-box;
  cursor: pointer;
  width: 140px;
  height: 35px;
  background-color: rgb(231, 76, 60);
  color: white;
  border: 2px solid rgba(231, 76, 60, 0);
  line-height: 21px;
  margin-left: 30px;
  padding: 5px;
  font-size: 1rem;
}

button:hover,
.router-link-active > button {
  color: rgb(231, 76, 60);
  background-color: white;
  border: 2px solid rgba(231, 76, 60, 1);
}
</style>
