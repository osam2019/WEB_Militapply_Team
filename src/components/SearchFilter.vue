<template>
  <header>
    <div class="filter-container">
      <FilterList
        :items="groups"
        :selectedItem="selectedGroup"
        @itemClicked="onGroupChanged"
      />
      <FilterList
        :class="{ 'list-disabled': selectedGroup < 0 }"
        :items="categories"
        :selectedItem="selectedCategory"
        @itemClicked="onCategoryChanged"
      />
      <FilterList
        :class="{ 'list-disabled': selectedCategory < 0 }"
        :items="specialities"
        :selectedItem="selectedSpeciality"
        @itemClicked="onSpecialityChanged"
      />
    </div>
    <button
            class="btn-search"
            :disabled="selectedSpeciality < 0"
      @click="onSearch"
    >
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
  props: {
    groupId: {
      type: Number,
      default: -1
    },
    categoryId: {
      type: Number,
      default: -1
    },
    specialityId: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      groups,
      selectedGroup: this.groupId,
      selectedCategory: this.categoryId,
      selectedSpeciality: this.specialityId
    };
  },
  computed: {
    categories() {
      return getCategoryData(this.selectedGroup);
    },
    specialities() {
      return getSpecialityData(this.selectedGroup, this.selectedCategory);
    }
  },
  methods: {
    onGroupChanged(groupId) {
      this.selectedSpeciality = -1;
      this.selectedCategory = -1;
      this.selectedGroup = groupId;
    },
    onCategoryChanged(categoryId) {
      if (this.selectedGroup < 0) return;

      this.selectedSpeciality = -1;
      this.selectedCategory = categoryId;
    },
    onSpecialityChanged(specialityId) {
      if (this.selectedGroup < 0 || this.selectedCategory < 0) return;

      this.selectedSpeciality = specialityId;
    },
    onSearch() {
      if(this.selectedGroup === this.groupId
      && this.selectedCategory === this.categoryId
      && this.selectedSpeciality === this.specialityId) return;

      this.$router.push(this.calcUrl());
    },
    calcUrl() {
      let url = '/search';
      if(this.selectedGroup < 0) return url;
      url += '/group/' + this.selectedGroup;

      if(this.selectedCategory < 0) return url;
      url += '/category/' + this.selectedCategory;

      if(this.selectedSpeciality < 0) return url;
      url += '/speciality/' + this.selectedSpeciality;

      return url;
    }
  }
};

// 군별
function getGroupData() {
  // Dummy Data
  return require("../../data/group.json");
}

function getCategoryData(groupId) {
  if (groupId === -1) return null;

  return require("../../data/category.json");
}

function getSpecialityData(groupId, categoryId) {
  if (groupId < 0 || categoryId < 0) return null;
  // Dummy Data
  return require("../../data/speciality.json");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-container {
  width: 1000px;
  height: 300px;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

button {
  width: 900px;
  line-height: 2rem;
  display: block;
  margin: 15px auto 0;
  color: white;
  background-color: #1565c0;
}

button[disabled] {
  background-color: #1565c055;
}

.list-disabled {
  opacity: 0.3;
}

  .btn-search {
    border: 0;
  }
</style>
