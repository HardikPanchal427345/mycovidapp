import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidapp';

  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  tohome() {
    document.getElementById('home').scrollIntoView({behavior: 'smooth'});
  }

  toaboutcorona() {
    document.getElementById('aboutcorona').scrollIntoView({behavior: 'smooth'});
  }

  tostat() {
    document.getElementById('stat').scrollIntoView({behavior: 'smooth'});
  }

  tocontact() {
    document.getElementById('corona').scrollIntoView({behavior: 'smooth'});
  }
  toprevention() {
    document.getElementById('prevention').scrollIntoView({behavior: 'smooth'});
  }
  toappointment() {
    document.getElementById('appointment').scrollIntoView({behavior: 'smooth'});

  }
}
