import { GlobalDataSummary } from './../models/globaldata';
import { DatafetchingService } from './../datafetching.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  totalConfirmed = 0;
  totalDeaths = 0;
  totalActive = 0;
  totalRecovered = 0;


  onetotalConfirmed = 0;
  onetotalDeaths = 0;
  onetotalActive = 0;
  onetotalRecovered = 0;

  pieChart: GoogleChartInterface = {
    chartType: 'GeoChart',
      };

      columnChart: GoogleChartInterface = {
        chartType: 'ColumnChart',
          };

globaldata: GlobalDataSummary[] = [];

data: GlobalDataSummary[];
countries: string[] = [];



  constructor(private dataservice: DatafetchingService) { }

  initChart(caseType: string) {

    setTimeout(() => {

    const datatable = [];
    datatable.push(['Country' , 'Confirmed' , 'Active']);
    this.globaldata.forEach(cs => {

      let value: number;

      if (caseType === 'c') {
        if (cs.confirmed > 0) {
          value = cs.confirmed;
        }
      }
      if (caseType === 'a') {
        if (cs.active > 100000) {
          value = cs.active;
        }
      }
      if (caseType === 'r') {
        if (cs.recovered > 100000) {
          value = cs.recovered;
        }
      }
      if (caseType === 'd') {
        if (cs.deaths > 100000) {
          value = cs.deaths;
        }
      }


      datatable.push([
        // tslint:disable-next-line: no-unused-expression
        cs.country , value , cs.active]
      );
    });

    // console.log(datatable);

    this.pieChart = {
      chartType: 'GeoChart',
      dataTable: datatable,
      // firstRowIsData: true,
      // tslint:disable-next-line: object-literal-key-quotes
      options: {
        // tslint:disable-next-line: object-literal-key-quotes
        'height': 500,
        colorAxis: {colors: ['#2081e0', '#0439a0']},
        tooltip: {textStyle: {color: '#0439a0'}, showColorCode: true}

      },
    };

    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: datatable,
      // firstRowIsData: true,
      // tslint:disable-next-line: object-literal-key-quotes
      options: {
        // tslint:disable-next-line: object-literal-key-quotes
        'height': 500
      },
    };
  }, 10);
  }

  ngOnInit(): void {

    this.dataservice.getGlobalData().subscribe(res => {
      this.data = res;
      this.data.forEach(cs => {
        this.countries.push(cs.country);
      });
      this.initChart('c');

    });

    // this.initChart('c');

    this.dataservice.getGlobalData().subscribe(
      {
        next: (res) => {

          this.globaldata = res;

          res.forEach(cs => {

          if (!Number.isNaN(cs.confirmed)) {
          this.totalConfirmed += cs.confirmed;
          this.totalActive += cs.active;
          this.totalRecovered += cs.recovered;
          this.totalDeaths += cs.deaths;
          }

        });

          this.initChart('c');
          this.updatevalue('India');
          // tslint:disable-next-line: semicolon
          // this.initChart('r');

        }
      } );

    this.initChart('c');


  }

  updateChart(input: HTMLInputElement) {

    this.initChart(input.value);

  }


  updatevalue(con: string) {

    this.data.forEach(cs => {
      if (cs.country === con) {

        this.onetotalConfirmed = cs.confirmed;
        this.onetotalDeaths = cs.deaths;
        this.onetotalActive = cs.active;
        this.onetotalRecovered = cs.recovered;

      }
    });

  }



}
