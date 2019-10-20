<template>
  <header>
    <div class="filter-container">
      <FilterList :items="groups" :selectedItem="groupId" @itemClicked="onGroupChanged"/>
      <FilterList v-if="groupId >= 0" :items="categories" :selectedItem="categoryId" @itemClicked="onCategoryChanged"/>
        <FilterList v-if="categoryId >= 0" :items="specialities" :selectedItem="specialityId" @itemClicked="onSpecialityChanged"/>
    </div>
    <button :disabled="specialityId < 0">
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
      groupId: -1,
      categoryId: -1,
      specialityId: -1
    };
  },
  methods: {
    onGroupChanged(groupId) {
      this.specialityId = -1;
      this.categoryId = -1;
      this.groupId = groupId;
    },
    onCategoryChanged(categoryId) {
      this.specialityId = -1;
      this.categoryId = categoryId;
    },
    onSpecialityChanged(specialityId) {
      this.specialityId = specialityId;
    }
  },
  computed: {
    categories() {
      return getCategoryData(this.groupId);
    },
    specialities() {
      return getSpecialityData(this.groupId, this.categoryId);
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
  if(groupId === -1) return null;
  
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

function getSpecialityData(groupId, categoryId) {
  if(groupId < 0 || categoryId < 0) return null;

  return [{
    name: "SW 개발병",
    id: 0
  },
  {
    name: "지식재산관리병",
    id: 1
  },
  {
    name: "어학병",
    id: 2
  },
  {
    name: "정보보호병",
    id: 3
  }]
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

button[disabled] {
  background-color: #1565C055;
}
</style>
