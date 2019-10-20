<template>
  <ul>
    <li 
      v-for="item in items"
      :key="item.id"
      :class="{active: item.id === selected}"
      @click="selected = this.key">
      {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "FilterList",
  props: {
    items: Array
  },
  data() {
    return {
      selected: 1
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: inline-block;
  width: 300px;
  height: 100%;
  padding: 5px;
  overflow-y: auto;
  border: 1px solid black;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 10px;
}

li {
  list-style: none;
  line-height: 2rem;
  border-bottom: 1px solid #bbb;
}

li:hover {
  background-color: #eee;
}

li.active {
  color: rgb(231,70,64);
}
</style>
