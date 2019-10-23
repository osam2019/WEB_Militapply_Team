<template>
  <section>
    <el-row v-if="hasData" type="flex" align="middle">
      <el-col :span="11">
        <h1><u>업무 특성</u></h1>
        <Stats
          :chartData="selectedUnit"
          style="width: 400px; margin: 0 auto;"
        />
        <el-select v-model="selectedUnitIdx" placeholder="Select" value="">
          <el-option
            v-for="(item, idx) in units"
            :key="item.label"
            :label="item.label"
            :value="idx"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-divider direction="vertical"></el-divider>
      </el-col>
      <el-col :span="11">
        <h1><u>복무자 한줄평</u></h1>
        <div class="quote-container" v-for="item in comments" :key="item">
          <i class="icofont-quote-left" style="float: left;"></i>
          <i class="icofont-quote-right" style="float: right;"></i>
          <blockquote>
            {{ item }}
          </blockquote>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="specialityId >= 0">
      <MarkdownViewer
        :src="specialityData.detail ? specialityData.detail : '/md/no-data.md'"
      />
    </el-row>
  </section>
</template>

<script>
import Stats from "./Stats.vue";
import MarkdownViewer from "./MarkdownViewer";

export default {
  name: "SearchResult",
  components: {
    Stats,
    MarkdownViewer
  },
  props: {
    specialityId: Number
  },
  data() {
    return {
      hasData: false,
      specialityData: {},
      selectedUnitIdx: 0
    };
  },
  mounted() {
    if(this.specialityId >= 0) {
      this.getSpecialities();
    }
  },
  watch: {
    specialityId() {
      this.getSpecialities();
    }
  },
  methods: {
    getSpecialities() {
      // TODO: 중복 코드 (SearchFilter.vue)
      // Get Specialities
      this.$http.get(`/specialities/${this.specialityId}`).then(response => {
        this.specialityData = response.data;
        this.hasData =
          Object.keys(this.specialityData).length > 0 &&
          this.specialityData.hasOwnProperty("stats") &&
          this.specialityData.hasOwnProperty("comments");
      });
    }
  },
  computed: {
    comments() {
      if (!this.specialityData.hasOwnProperty("comments")) return [];

      return this.specialityData.comments;
    },
    units() {
      if (!this.specialityData.hasOwnProperty("stats")) return [];

      return this.specialityData.stats.datasets;
    },
    selectedUnit() {
      if (!this.specialityData.hasOwnProperty("stats")) return {};

      const data = { ...this.specialityData.stats };
      data.datasets = [data.datasets[this.selectedUnitIdx]];

      data.datasets.forEach(d => {
        d.backgroundColor = "rgba(231, 76, 50, 0.8)";
        d.borderWidth = 0;
      });
      return data;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  width: 1000px;
  margin: 0 auto;
}

.stats-container {
  width: 400px;
  margin: 0 auto;
}

.el-row {
  margin: 30px auto;
}

.el-divider--vertical {
  height: 400px;
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
}

.quote-container {
  margin: 80px auto;
}

.quote-container > i {
  color: #cecece;
  font-size: 1.5rem;
}

.quote-container blockquote {
  margin: 10px auto;
  font-size: 1.2rem;
  width: 80%;
}
</style>
