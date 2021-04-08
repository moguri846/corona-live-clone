<script>
import { Bar } from 'vue-chartjs';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
let day = now.getDate();

const toDay = `${year}${month < 10 ? `0${month}` : `${month}`}${day < 10 ? `0${day}` : `${day}`}`;

console.log(toDay);

export default {
  extends: Bar,
  props: {
    chartData: Array,
  },
  data() {
    return {
      datacollection: {
        labels: ['04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08'],
        datasets: [
          {
            label: '하루 확진자',
            backgroundColor: '#5673ea',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'black',
            data: [
              this.chartData[6] ? this.chartData[6] : '0',
              this.chartData[5] ? this.chartData[5] : '0',
              this.chartData[4] ? this.chartData[4] : '0',
              this.chartData[3] ? this.chartData[3] : '0',
              this.chartData[2] ? this.chartData[2] : '0',
              this.chartData[1] ? this.chartData[1] : '0',
              this.chartData[0] ? this.chartData[0] : '0',
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
