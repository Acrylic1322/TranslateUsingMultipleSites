import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TranslateSiteService {
  constructor(private http: HttpClient) { }

  getWeblio(langFrom: string, langTo: string, text: string) {
    let url = 'http://127.0.0.1:8000/'
    let get_url = encodeURI(url + "weblio/" + langFrom + "/" + langTo + "/?text=" + text)
    return this.http.get(get_url)
  }
}
