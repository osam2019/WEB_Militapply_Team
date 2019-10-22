<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
      :class="{ active: item.id === selectedItem }"
      @click="$emit('itemClicked', item.id)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "FilterList",
  props: {
    items: Array,
    selectedItem: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  box-sizing: border-box;
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
  color: rgb(231, 70, 64);
}
</style>
