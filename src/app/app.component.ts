import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'th']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  foo() {
    console.log(this.translate.currentLang);
    if (this.translate.currentLang == 'th') {
      this.translate.use('en');
      return;
    }
    if (this.translate.currentLang == 'en') {
      this.translate.use('th');
      return;
    }
  }

}
