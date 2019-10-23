<template>
  <main>
    <SearchFilter
            :groupId="groupId"
            :categoryId="categoryId"
            :specialityId="specialityId" />
    <SearchResult
      :specialityId="specialityId" />
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
      groupId: this.$route.params.group ? parseInt(this.$route.params.group) : -1,
      categoryId: this.$route.params.category ? parseInt(this.$route.params.category) : -1,
      specialityId: this.$route.params.speciality ? parseInt(this.$route.params.speciality) : -1
    };
  },
  watch: {
    '$route' (to) {
      // 경로 변경에 반응하여...
      this.groupId = to.params.group ? parseInt(to.params.group) : -1;
      this.categoryId = to.params.category ? parseInt(to.params.category) : -1;
      this.specialityId = to.params.speciality ? parseInt(to.params.speciality) : -1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
