import { GlobalDataSummary } from './../models/globaldata';
import { DatafetchingService } from './../datafetching.service';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {



  pieChart: GoogleChartInterface = {
    chartType: 'GeoChart',
      };

      columnChart: GoogleChartInterface = {
        chartType: 'ColumnChart',
          };

// globaldata: GlobalDataSummary[] ;


  data: GlobalDataSummary[];
  countries: string[] = [];

  onetotalConfirmed = 0;
  onetotalDeaths = 0;
  onetotalActive = 0;
  onetotalRecovered = 0;
  constructor(private service: DatafetchingService) { }

  ngOnInit(): void {

    this.service.getGlobalData().subscribe(res => {
      this.data = res;
      this.data.forEach(cs => {
        this.countries.push(cs.country);
      });
      console.log('init');
      this.initChart('c');
      console.log('init');

    });
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


  initChart(caseType: string) {

    setTimeout(() => {

    const datatable = [];
    datatable.push(['Country' , 'Cases']);
    this.data.forEach(cs => {

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
        cs.country , value]
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
        colorAxis: {colors: ['#2081e0', '#0439a0']}

      },
    };

  }, 10);
  }
}
