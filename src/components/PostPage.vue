<template>
  <el-main>
    <el-page-header @back="goBack" title="이전으로" :content="postData.title" />
    <MarkdownViewer
      :src="postData.contentSrc ? postData.contentSrc : '/md/no-data.md'"
    />
  </el-main>
</template>

<script>
import MarkdownViewer from "./MarkdownViewer";

export default {
  name: "PostPage",
  components: {
    MarkdownViewer
  },
  data() {
    return {
      postId: {
        type: Number,
        default: -1
      },
      postData: {
        type: Object,
        default: {}
      }
    };
  },
  mounted() {
    this.postId = this.$route.params.id ? parseInt(this.$route.params.id) : -1;
  },
  watch: {
    postId() {
      this.getPost();
    },
    $route(to) {
      // 경로 변경에 반응하여...
      this.postId = to.params.id ? parseInt(to.params.id) : -1;
    }
  },
  methods: {
    getPost() {
      // Get Post
      this.$http.get(`/posts/${this.postId}`).then(response => {
        this.postData = response.data;
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.el-main {
  width: 1000px;
  margin: 0 auto;
}

    .el-page-header {
        padding: 15px;
        margin-bottom: 30px;
        border: 1px solid #dedede;
    }

    .markdown-body {
        min-height: 500px;
    }
</style>
