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
          src: "https://picsum.photos/id/884/1000/200",
          alt: "wide1"
        },
        {
          src: "https://picsum.photos/id/123/1000/200",
          alt: "wide2"
        }
      ],
      posts: require("../../data/post")
    };
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
