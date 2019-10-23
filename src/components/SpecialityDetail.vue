<template>
  <Markdown class="markdown-body" :source="this.src" />
</template>

<script>
import Markdown from "../../public/md/test.md";
import "github-markdown-css";

export default {
  name: "SpecialityDetail",
  components: {
    Markdown
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.markdown-body {
  text-align: left;
}
</style>
