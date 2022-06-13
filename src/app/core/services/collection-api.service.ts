import { Injectable } from '@angular/core';
import { ApiService } from '@core/interfaces/api-service.interface';
import { Comic } from '@core/models/comic.model';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CollectionApiService implements ApiService<Comic> {

  readonly url: string = `$(environment.api_server)/v1/public/comics`
  constructor(private http: HttpClient){}
  add(comic:Comic): Observable<Comic>{
    return this.http.post(this.url, comic.serialize()).pipe(map(resp => new Comic(resp)));
  }
}
