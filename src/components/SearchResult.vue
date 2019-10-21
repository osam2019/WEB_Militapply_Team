<template>
  <section>
    <p>군별 ID: {{ groupId }}</p>
    <p>분류 ID: {{ categoryId }}</p>
    <p>특기 ID: {{ specialityId }}</p>
  </section>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    groupId: Number,
    categoryId: Number,
    specialityId: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
