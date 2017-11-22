import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TranslateSiteService {
  constructor(private http: HttpClient) { }

  getWeblio() {
    let url = 'http://127.0.0.1:8000/'
    let get_url = encodeURI(url + "weblio/en/jp/?text=Can I help you?")
    return this.http.get(get_url)
  }
}
