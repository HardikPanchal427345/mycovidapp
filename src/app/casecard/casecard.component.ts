import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-casecard',
  templateUrl: './casecard.component.html',
  styleUrls: ['./casecard.component.css']
})
export class CasecardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('totalConfirmed')
  totalConfirmed;
  // tslint:disable-next-line: no-input-rename
  @Input('totalActive')
  totalActive;
  // tslint:disable-next-line: no-input-rename
  @Input('totalRecovered')
  totalRecovered;
  // tslint:disable-next-line: no-input-rename
  @Input('totalDeaths')
  totalDeaths;

  constructor() { }

  ngOnInit(): void {
  }

}
