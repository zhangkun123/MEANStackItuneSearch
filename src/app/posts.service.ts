import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }


  getAllSearch(searchObj: {}) {
    return this.http.post('/api/search', searchObj)
      .map(res => res.json());
  }
}
