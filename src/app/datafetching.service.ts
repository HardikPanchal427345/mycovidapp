import { GlobalDataSummary } from './models/globaldata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatafetchingService {


  // tslint:disable-next-line: max-line-length
  // private dataurl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
  // private extension = '.csv';
  // tslint:disable-next-line: max-line-length
  // ext = '09-19-2020.csv';
  private dataurl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';



  month;
  date;
  year;
  // extension: any;
  constructor(private http: HttpClient) {
    const now = new Date();
    this.month = now.getMonth() + 1;
    if (this.month < 10) {
      this.month = '0' + this.month;
    } else {
      this.month = this.month;
    }
    this.date = now.getDate() - 1;
    if (this.date < 10) {
      this.date = '0' + this.date;
    } else {
      this.date = this.date;
    }
    this.year = now.getFullYear();
    this.dataurl = this.dataurl + this.month + '-' + this.date + '-' + this.year + '.csv';
  }

  getGlobalData() {
    // console.log(this.dataurl);


    // this.dataurl = `${this.dataurl}${this.month}-${this.date}-${this.year}${this.extension}`;
    // console.log(this.dataurl);
    return this.http.get(this.dataurl, {responseType: 'text'}).pipe(
      map(res =>  {

        const data: GlobalDataSummary[] = [];

        const raw = {};
        const rows = res.split('\n');
        // console.log(rows);
        rows.splice(0, 1);
        rows.forEach(row => {
          const cols = row.split(/,(?=\S)/);



          const cs = {
            country : cols[3],
            confirmed : +cols[7],
            deaths : +cols[8],
            recovered: +cols[9],
            active : +cols[10],
          };


          const temp: GlobalDataSummary = raw[cs.country];
          if (temp) {
            temp.active = cs.active + temp.active;
            temp.confirmed = cs.confirmed + temp.confirmed;
            temp.recovered = cs.recovered + temp.recovered;
            temp.deaths = cs.deaths + temp.deaths;

            raw[cs.country] = temp;
          } else {
            raw[cs.country] = cs;
          }
        });
        return  Object.values(raw) as GlobalDataSummary[];

      }
    ));
  }
}
