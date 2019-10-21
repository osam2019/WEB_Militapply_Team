<template>
  <main>
    <SearchFilter @search="doSearch" />
    <SearchResult
      :groupId="groupId"
      :categoryId="categoryId"
      :specialityId="specialityId"
    />
  </main>
</template>

<script>
import SearchFilter from "./SearchFilter.vue";
import SearchResult from "./SearchResult.vue";

export default {
  name: "SearchPage",
  components: {
    SearchFilter,
    SearchResult
  },
  data() {
    return {
      groupId: -1,
      categoryId: -1,
      specialityId: -1
    };
  },
  methods: {
    doSearch(groupId, categoryId, specialityId) {
      this.groupId = groupId;
      this.categoryId = categoryId;
      this.specialityId = specialityId;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
