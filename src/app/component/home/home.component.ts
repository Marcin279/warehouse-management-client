import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js'

@Component({
  selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("WarehouseFlow", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {label: "Packages", data: ['467', '576', '572', '79', '92', '574', '573', '576'], backgroundColor: 'blue'},
          {label: "Products", data: ['542', '542', '536', '327', '17', '0.00', '538', '541'], backgroundColor: 'limegreen'}
        ]
      }, options: {aspectRatio: 2.5}
    });
  }
}
