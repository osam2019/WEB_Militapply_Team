<template>
  <Markdown class="markdown-body" :source="markdownContent" />
</template>

<script>
import Markdown from "vue-markdown";
import "github-markdown-css";

const host = "http://localhost";
const port = "8080";

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
  },
    data() {
      return {
          markdownContent: ''
      };
    },
    mounted() {
      this.updateMarkdownData();
    },
  watch: {
    src() {
        this.updateMarkdownData();
    }
  },
    methods: {
      updateMarkdownData() {
          if(this.src === '') return;
          this.$http.get(`${host}:${port}` + this.src).then((v) => {
              this.markdownContent = v.data;
          })
      }
    }
};
</script>

<style scoped>
.markdown-body {
  text-align: left;
}
</style>
