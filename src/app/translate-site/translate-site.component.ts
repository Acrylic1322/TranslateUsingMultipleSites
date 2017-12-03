import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { TranslateSiteService } from './translate-site.service'

@Component({
  selector: 'app-translate-site',
  templateUrl: './translate-site.component.html',
  styleUrls: ['./translate-site.component.css']
})
export class TranslateSiteComponent implements OnInit {
  private results:any = []
  private last = ''
  private siteName = ''
  private loading = false;

  @Input() searchText: string;
  @Input() langFrom: string;
  @Input() langTo: string;
  @Input() site: string;

  constructor(private translateSiteService: TranslateSiteService) { }

  ngOnInit() {
    this.loading = false;
    this.siteName = this.site.charAt(0).toUpperCase() + this.site.slice(1);
  }

  ngOnChanges() {
    this.results = []
    this.translate(this.langFrom, this.langTo, this.searchText)
  }

  private translate(langFrom:string, langTo:string, text: string) {
    this.loading = true;
    this.translateSiteService.getTranslate(langFrom, langTo, text, this.site).subscribe(json => {
      for(let i of <any>json) {
        this.results.push(i)
        this.last = i
      }
      this.loading = false;
    })
  }
}
