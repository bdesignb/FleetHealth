import { FleetGeneralData } from 'src/app/models/fleetData';
import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-fleet-line-chart',
  templateUrl: './fleet-line-chart.component.html',
  styleUrls: ['./fleet-line-chart.component.css']
})
export class FleetLineChartComponent {
  @Input() fleetGeneralData?: FleetGeneralData;
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  constructor() {
    Chart.register(...registerables)
  }

  createChart() {
    this.chart = new Chart("canvas", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [
          {
            label: this.fleetGeneralData?.fleetChartData[0].label,
            data: this.fleetGeneralData?.fleetChartData[0].values,
            fill: false,
            borderWidth: 0.5,
            backgroundColor: 'gray',
            pointBackgroundColor: 'gray',
            pointBorderColor: 'gray',
            pointBorderWidth: 4
          },
          {
            label: this.fleetGeneralData?.fleetChartData[1].label,
            data: this.fleetGeneralData?.fleetChartData[1].values,
            fill: false,
            borderColor: '#cccfd0',
            borderWidth: 0.5,
            backgroundColor: '#ff6000',
            pointBackgroundColor: '#ff6000',
            pointBorderColor: '#ff6000',
            pointBorderWidth: 4
          },
          {
            label: this.fleetGeneralData?.fleetChartData[2].label,
            data: this.fleetGeneralData?.fleetChartData[2].values,
            fill: false,
            borderColor: '#BFC3C4',
            borderWidth: 0.5,
            backgroundColor: '#0043b0',
            pointBackgroundColor: '#0043b0',
            pointBorderColor: '#0043b0',
            pointBorderWidth: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              display: false,
              maxTicksLimit: 4,
              stepSize: 0
            },
            border: {
              display: false,
            },

          },
          x: {
            beginAtZero: true,

            grid: {
              display: false,

            },
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#868686',
              font: {
                family: 'Poppins',
                size: 12
              },
              padding: 60,
              boxWidth: 18,
              boxHeight: 18,
              generateLabels: function (chart) {
                let labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                for (let key in labels) {
                  labels[key].lineWidth = 0;
                  labels[key].borderRadius = 5;
                  if (chart.data.datasets[key].data.length === 0) {
                    labels[key].fillStyle = '#e6e6e6';
                    labels[key].fontColor = '#e6e6e6';
                  }
                }
                return labels;
              }
            }
          }
        }
      }
    });
  }
}

