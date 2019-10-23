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
      :class="['btn-search', { red }]"
      :disabled="selectedSpeciality < 0"
      @click="
        $emit('search', selectedGroup, selectedCategory, selectedSpeciality)
      "
    >
      <i :class="buttonIcon" style="margin-right: 5px"></i>
      <span>{{ buttonTxt }}</span>
    </button>
  </header>
</template>

<script>
import FilterList from "./FilterList.vue";

export default {
  name: "SearchFilter",
  components: {
    FilterList
  },
  props: {
    red: {
      type: Boolean,
      default: false
    },
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
    },
    buttonTxt: {
      type: String,
      default: "검색"
    },
    buttonIcon: {
      type: String,
      default: "icofont-search-1"
    }
  },
  data() {
    return {
      groups: [],
      categories: [],
      specialities: [],
      selectedGroup: this.groupId,
      selectedCategory: this.categoryId,
      selectedSpeciality: this.specialityId
    };
  },
  mounted() {
    this.getGroups();
    if (this.categoryId >= 0) {
      this.getCategories(this.groupId);
      if (this.specialityId >= 0) {
        this.getSpecialities(this.categoryId);
      }
    }
  },
  methods: {
    getGroups() {
      // Get Group Data
      this.$http.get("/groups").then(response => {
        this.groups = response.data;
      });
    },
    getCategories(groupId) {
      // Get Categories
      this.$http.get(`/groups/${groupId}/categories`).then(response => {
        this.categories = response.data;
      });
    },
    getSpecialities(categoryId) {
      // Get Specialities
      this.$http
        .get(`/categories/${categoryId}/specialities`)
        .then(response => {
          this.specialities = response.data;
        });
    },
    onGroupChanged(groupId) {
      this.selectedSpeciality = -1;
      this.selectedCategory = -1;
      this.specialities = [];

      this.selectedGroup = groupId;

      this.getCategories(groupId);
    },
    onCategoryChanged(categoryId) {
      if (this.selectedGroup < 0) return;

      this.selectedSpeciality = -1;
      this.selectedCategory = categoryId;

      this.getSpecialities(categoryId);
    },
    onSpecialityChanged(specialityId) {
      if (this.selectedGroup < 0 || this.selectedCategory < 0) return;

      this.selectedSpeciality = specialityId;
    }
  }
};
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
  cursor: pointer;
  width: 900px;
  line-height: 2rem;
  display: block;
  margin: 15px auto 0;
  color: white;
  background-color: #1565c0;
}

button[disabled] {
  opacity: 0.4;
}

.list-disabled {
  opacity: 0.3;
}

.btn-search {
  border: 0;
}

button.red {
  background-color: rgb(231, 76, 60);
}
</style>
