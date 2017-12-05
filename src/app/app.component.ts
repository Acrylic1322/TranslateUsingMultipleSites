import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'app';
  input: string = '';
  searchTimer: any = null;

  searchText: string = '';
  langFrom: string = '';
  langTo: string = '';

  layoutMode: string = 'line';

  sites: string[] = [
    'weblio',
    'excite',
    'dictionary-com'
  ];

  constructor() {
    this.langFrom = 'en';
    this.langTo = 'ja';
  }

  inputSearch(input: string) {
    if(typeof this.searchTimer != null)
      clearTimeout(this.searchTimer);

    this.searchTimer = setTimeout(() => {
      this.searchText = input;
    }, 1000)
  }

  changeLanguage(langFrom: string, langTo: string) {
    this.langFrom = langFrom;
    this.langTo = langTo;

    this.inputSearch(this.searchText);
  }

  changeLayout(layout) {
    switch(layout) {
      case 'grid':
      case 'line':
        this.layoutMode = layout
        break;
    }
    console.log(this.layoutMode)
  }
}
