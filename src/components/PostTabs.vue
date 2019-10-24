<template>
  <section class="page-tabs-container">
    <el-tabs
      style="min-height: 350px"
      v-model="activeName"
      class="tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="전체" name="all">
        <ul>
          <router-link
            :to="`/info/${post.id}`"
            v-for="post in slicedAllPosts"
            :key="post.id"
            class="post-item"
          >
            <li>
              {{ post.title }}
            </li>
          </router-link>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="공지" name="notice">
        <ul>
          <router-link
            :to="`/info/${post.id}`"
            v-for="post in slicedNoticePosts"
            :key="post.id"
            class="post-item"
          >
            <li>
              {{ post.title }}
            </li>
          </router-link>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="정보" name="info">
        <ul>
          <router-link
            :to="`/info/${post.id}`"
            v-for="post in slicedInformationPosts"
            :key="post.id"
            class="post-item"
          >
            {{ post.title }}
          </router-link>
        </ul>
      </el-tab-pane>
    </el-tabs>
    <el-pagination
      layout="prev, pager, next"
      v-if="pagination"
      :page-size="max"
      :total="itemTotal"
      :current-page="currentPage + 1"
      @current-change="handleCurrentChange"
    />
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
      required: true
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
      return [...this.posts];
    },
    noticePosts() {
      return [...this.posts]
        .filter(v => v.type === "notice");
    },
    informationPosts() {
      return [...this.posts]
        .filter(v => v.type === "information");
    },
    slicedAllPosts() {
      const start = this.currentPage * this.max;
      return [...this.allPosts].slice(start, start + this.max);
    },
    slicedNoticePosts() {
      const start = this.currentPage * this.max;
      return [...this.noticePosts].slice(start, start + this.max);
    },
    slicedInformationPosts() {
      const start = this.currentPage * this.max;
      return [...this.informationPosts].slice(start, start + this.max);
    }
  },
  watch: {
    posts() {
      this.itemTotal = this.posts.length;
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

      this.currentPage = 0;
    },
    handleCurrentChange(page) {
      this.currentPage = page - 1;
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
  display: block;
  text-decoration: none;
  color: black;
  text-align: left;
  padding: 10px 5px;
  border-bottom: 1px solid #eee;
}
</style>
