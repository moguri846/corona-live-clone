<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: {
    chartData: Array,
  },
  data() {
    return {
      datacollection: {
        labels: [
          this.chartData[6] ? this.chartData[6].stdDay : '0',
          this.chartData[5] ? this.chartData[5].stdDay : '0',
          this.chartData[4] ? this.chartData[4].stdDay : '0',
          this.chartData[3] ? this.chartData[3].stdDay : '0',
          this.chartData[2] ? this.chartData[2].stdDay : '0',
          this.chartData[1] ? this.chartData[1].stdDay : '0',
          this.chartData[0] ? this.chartData[0].stdDay : '0',
        ],
        datasets: [
          {
            label: '하루 확진자',
            backgroundColor: '#5673ea',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'black',
            data: [
              this.chartData[6] ? this.chartData[6].incDec : '0',
              this.chartData[5] ? this.chartData[5].incDec : '0',
              this.chartData[4] ? this.chartData[4].incDec : '0',
              this.chartData[3] ? this.chartData[3].incDec : '0',
              this.chartData[2] ? this.chartData[2].incDec : '0',
              this.chartData[1] ? this.chartData[1].incDec : '0',
              this.chartData[0] ? this.chartData[0].incDec : '0',
            ],
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
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              barPercentage: 0.6,
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
