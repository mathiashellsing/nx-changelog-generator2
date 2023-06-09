import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
  configUrl = 'https://ivarpivar.netlify.app/api';
  getConfig() {
    return this.http.get(this.configUrl);
  }
}
