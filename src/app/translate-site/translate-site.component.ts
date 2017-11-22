import { Component, OnInit } from '@angular/core';
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

  constructor(private translateSiteService: TranslateSiteService) { }

  ngOnInit() {
    this.translateSiteService.getWeblio().subscribe(json => {
      for(let i of <any>json) {
        this.results.push(i)
        this.last = i
      }
      console.log(this.results)
    })
  }
}
