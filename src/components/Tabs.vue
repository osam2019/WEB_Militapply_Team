<template>
  <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
    <el-tab-pane label="전체" name="all">
      <ul>
        <li v-for="post in allPosts" :key="post.id" class="post-item">
          {{ post.title }}
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="공지" name="notice">
      <ul>
        <li v-for="post in noticePosts" :key="post.id" class="post-item">
          {{ post.title }}
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="정보" name="info">
      <ul>
        <li v-for="post in informationPosts" :key="post.id" class="post-item">
          {{ post.title }}
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  props: {
    max: {
      type: Number,
      default: 5
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeName: "all"
    };
  },
  computed: {
    allPosts() {
      return [...this.posts]
        .sort((v1, v2) => new Date(v1.time) - new Date(v2.time))
        .slice(0, this.max);
    },
    noticePosts() {
      return [...this.posts]
        .filter(v => v.type === "notice")
        .sort((v1, v2) => new Date(v1.time) - new Date(v2.time))
        .slice(0, this.max);
    },
    informationPosts() {
      return [...this.posts]
        .filter(v => v.type === "information")
        .sort((v1, v2) => new Date(v1.time) - new Date(v2.time))
        .slice(0, this.max);
    }
  },
  methods: {
    handleClick(tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.tabs {
  border: 1px solid #aaa;
  height: 350px;
  padding: 15px;
}

.post-item {
  text-align: left;
  padding: 10px 5px;
  border-bottom: 1px solid #eee;
}
</style>
