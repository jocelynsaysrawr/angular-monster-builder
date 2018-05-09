import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    const authService = this.injector.get(AuthenticationService);
    const tokenizedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        `bearer ${authService.getToken()}`
      )
    });
    return next.handle(tokenizedReq);
  }
}
