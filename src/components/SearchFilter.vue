<template>
  <header>
    <div class="filter-container">
      <FilterList :items="groups" :selected="groupId"/>
      <FilterList v-if="groupId" :items="categories" :selected="categoryId"/>
    </div>
    <button>
      <i class="icofont-search-1"></i>
      <span>검색</span>
    </button>
  </header>
</template>

<script>
import FilterList from "./FilterList.vue";

const groups = getGroupData();

export default {
  name: "SearchFilter",
  components: {
    FilterList
  },
  data() {
    return {
      groups,
      groupId: 1,
      categoryId: null
    };
  },
  computed: {
    categories() {
      return getCategoryData(this.groupId);
    }
  }
};

// 군별
function getGroupData() {
  // Dummy Data
  return [{
    name: "육군",
    id: 0
  },
  {
    name: "해군",
    id: 1
  },
  {
    name: "공군",
    id: 2
  },
  {
    name: "해병대",
    id: 3
  }];
}

function getCategoryData(groupId) {
  if(groupId === null) return null;

  return [{
    name: "기술행정병",
    id: 1
  },
  {
    name: "전문특기병",
    id: 2
  },
  {
    name: "아따따따따",
    id: 3
  }];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-container {
  width: 90%;
  height: 300px;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

button {
  width: 80%;
  line-height: 2rem;
  display: block;
  margin: 15px auto 0;
  color: white;
  background-color: #1565C0;
}
</style>
