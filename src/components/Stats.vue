<script>
import Chart from "chart.js";
import { Radar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Radar,

  mixins: [reactiveProp],

  async mounted() {
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.elements.point.radius = 0;
    Chart.defaults.scale.ticks.beginAtZero = true;
    Chart.defaults.scale.ticks.max = 5;
    Chart.defaults.scale.ticks.min = 0;
    Chart.defaults.scale.ticks.stepSize = 1;
      Chart.defaults.global.legend.display = false;

    this.renderChart(this.chartData, {
      scale: {
        pointLabels: {
          fontSize: 13,
          fontStyle: "bold"
        }
      }
    });
  },

  watch: {
    chartData() {
      this.renderChart(this.chartData, {
        scale: {
          pointLabels: {
            fontSize: 13,
            fontStyle: "bold"
          }
        }
      });
    }
  }
};
</script>

<style scoped>
#radar-chart {
  margin: 15px auto;
}
</style>
