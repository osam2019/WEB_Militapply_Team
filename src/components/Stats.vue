<script>
import Chart from "chart.js";
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    groupId: Number,
    categoryId: Number,
    specialityId: Number
  },
  async mounted() {
    const data = await require("../../data/speciality_detail");

    data.stats.datasets[0].backgroundColor = "rgba(231, 76, 50, 0.8)";
    data.stats.datasets[0].borderWidth = 0;

    Chart.defaults.global.defaultFontSize = 15;
    this.renderChart(data.stats, {
      elements: {
        point: {
          radius: 0
        }
      },
      scale: {
        pointLabels: {
          fontSize: 13,
          fontWeight: "bold"
        },
        ticks: {
          beginAtZero: true,
          max: 10,
          min: 0,
          stepSize: 1
        }
      }
    });
  }
};
</script>

<style scoped></style>
