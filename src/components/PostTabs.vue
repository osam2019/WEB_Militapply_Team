<template>
  <section class="page-tabs-container">
    <el-tabs style="min-height: 350px" v-model="activeName" class="tabs" @tab-click="handleClick">
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
    <el-pagination layout="prev, pager, next"
                   v-if="pagination"
                   :total="itemTotal"/>
  </section>
</template>
<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  props: {
    max: {
      type: Number,
      required: true
    },
    posts: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeName: "all",
      currentPage: 0,
      itemTotal: this.posts.length
    };
  },
  computed: {
    allPosts() {
      return [...this.posts]
        .sort((v1, v2) => new Date(v1.time) - new Date(v2.time))
        .slice(this.currentPage * this.max, this.max);
    },
    noticePosts() {
      return [...this.posts]
        .filter(v => v.type === "notice")
        .sort((v1, v2) => new Date(v1.time) - new Date(v2.time))
        .slice(this.currentPage * this.max, this.max);
    },
    informationPosts() {
      return [...this.posts]
        .filter(v => v.type === "information")
        .sort((v1, v2) => new Date(v1.time) - new Date(v2.time))
        .slice(this.currentPage * this.max, this.max);
    }
  },
  methods: {
    handleClick(tab) {
      switch (tab.name) {
        case "all":
          this.itemTotal = this.posts.length;
          break;
        case "notice":
          this.itemTotal = this.noticePosts.length;
          break;
        case "info":
          this.itemTotal = this.informationPosts.length;
          break;
      }
    }
  }
};
</script>

<style scoped>
.page-tabs-container {
  border: 1px solid #aaa;
  padding: 0 15px;
}

.post-item {
  text-align: left;
  padding: 10px 5px;
  border-bottom: 1px solid #eee;
}
</style>
