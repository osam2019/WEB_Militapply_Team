<template>
  <section>
    <article class="stats">
      <Stats
        :groupId="groupId"
        :categoryId="categoryId"
        :specialityId="specialityId"
      />
    </article>
  </section>
</template>

<script>
import Stats from "./Stats.vue";

export default {
  name: "SearchResult",
  components: {
    Stats
  },
  props: {
    groupId: Number,
    categoryId: Number,
    specialityId: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats {
  width: 40%;
  margin: 0 auto;
  max-width: 400px;
}
</style>
