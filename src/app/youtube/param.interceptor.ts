import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

Injectable();
export class ParamInterceptor implements HttpInterceptor {

  protected url: string = 'https://www.googleapis.com/youtube/v3/';
  protected apiKey: string = 'AIzaSyD1Yy7Rns_9xdWm9AF2GlRR20mIdSAbavE';

  constructor() {}
  public intercept(req: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
    const reqCloned: HttpRequest<object> = req.clone({
      url: this.url + req.url,
      params: req.params.set('key', this.apiKey)
    });
    return next.handle(reqCloned);
  }
}
