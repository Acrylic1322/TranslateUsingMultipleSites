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
  private siteName = 'weblio'

  @Input() searchText: string;
  @Input() langFrom: string;
  @Input() langTo: string;

  constructor(private translateSiteService: TranslateSiteService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.results = []
    this.translate(this.langFrom, this.langTo, this.searchText)
  }

  private translate(langFrom:string, langTo:string, text: string) {
    this.translateSiteService.getWeblio(langFrom, langTo, text).subscribe(json => {
      for(let i of <any>json) {
        this.results.push(i)
        this.last = i
      }
    })
  }
}
