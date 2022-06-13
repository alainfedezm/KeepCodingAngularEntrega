import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ControlatedError } from '@core/models/controlated-error.model';


@Injectable()
export class HTTPErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error:any) => {
      const controllatedError = new ControlatedError();

      switch(error.status){

        //User Errors
        case 400:
          controllatedError.message = "BAD REQUEST";
          break;

        case 401:
          controllatedError.message = "No authenticated";
          controllatedError.title = "Key error";
          break;
        case 404:
          controllatedError.message = "The webpage does not exits";
          break;

        case 405:
          controllatedError.message = "METHOD not allowed";
          break;

        //Web error
        case 302:
          controllatedError.message = "Resource changed temporally";
          break;
      }
      return throwError(() => controllatedError)
    }));
  }
}
