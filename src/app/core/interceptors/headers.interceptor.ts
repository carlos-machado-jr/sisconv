import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/utils/services/storage.service';
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let localUser = this.storage.getLocalUser();
    let N = API_CONFIG.baseurl.length;
    let requestToAPI = request.url.substring(0, N) == API_CONFIG.baseurl;
    if (requestToAPI){
      const authReq = request.clone({
        headers: request.headers
        .set('Authorization', `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyMjYzMTg2MH0.67c0EVxuLYNx5UVAhKJz8sP46xjnHDjCjewhQJd72oQE0sbylJ8O9y_S5lRrrNtB6A-QGDXc-PsPilyGSbUAFw`)
        .append('Content-Type', 'application/json')
        .append( 'Access-Control-Allow-Origin','http://localhost:4200/*')
        .append('Access-Control-Allow-Methods','GET,POST')
        .append('Access-Control-Allow-Headers', '*')
        .append( 'Access-Control-Max-Age', '86400')

      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
    
  }
}
export const HeadersInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeadersInterceptor,
  multi: true,
};
