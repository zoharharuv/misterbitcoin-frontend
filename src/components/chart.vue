<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["data"],
  data() {
    return {
      chartData: {
        labels: this.data.values.map((v) =>
          new Date(v.x * 1000).toLocaleDateString("he-IL")
        ),
        datasets: [
          {
            label: this.data.unit,
            data: this.data.values,
            fill: false,
            borderColor: "#2554FF",
            backgroundColor: "#2554FF",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    labelsToShow() {
      return this.data.values.map;
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>