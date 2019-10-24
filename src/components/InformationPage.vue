<template>
  <main class="information-container">
    <Banner :height="200" :contents="bannerContents" />
    <PostTabs :max="15" :posts="posts" />
  </main>
</template>

<script>
import PostTabs from "./PostTabs";
import Banner from "./Banner";

export default {
  name: "Information",
  components: {
    PostTabs,
    Banner
  },
  data() {
    return {
      bannerContents: [
        {
          src: "/img/banner1.gif",
          alt: "wide1",
          url: "/info/1"
        },
        {
          src: "/img/banner2.jpg",
          alt: "wide2",
          url: "/info/2"
        }
      ],
      posts: []
    };
  },
  mounted() {
    this.$http.get(`/posts?_sort=time&_order=desc`).then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<style scoped>
.information-container {
  width: 1000px;
  margin: 0 auto;
}

.page-tabs-container {
  margin: 30px auto;
}
</style>
