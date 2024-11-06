import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const getConcatenatedUrl = (urlFragment: string): string => {
  return `${baseUrl}/${urlFragment}`;
};

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private httpClient = inject(HttpClient);

  get<TRes>(urlFragment: string): Observable<TRes> {
    return this.httpClient.get<TRes>(getConcatenatedUrl(urlFragment));
  }

  post<TReq, TRes>(urlFragment: string, data: TReq): Observable<TRes> {
    return this.httpClient.post<TRes>(getConcatenatedUrl(urlFragment), data);
  }

  put<TReq, TRes>(urlFragment: string, data: TReq): Observable<TRes> {
    return this.httpClient.put<TRes>(getConcatenatedUrl(urlFragment), data);
  }

  patch<TReq, TRes>(urlFragment: string, data: TReq): Observable<TRes> {
    return this.httpClient.patch<TRes>(getConcatenatedUrl(urlFragment), data);
  }

  delete<TRes>(urlFragment: string): Observable<TRes> {
    return this.httpClient.delete<TRes>(getConcatenatedUrl(urlFragment));
  }
}
