import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor', req);

  if (req.method == "POST"){
    const newReq = req.clone({
      headers: new HttpHeaders({token:'123224234vdfv'}),
    });
    return next(newReq);
  }
  return next(req);
};
 