import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError , retry } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const globalHttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastrService)
  return next(req).pipe(
    
    catchError((error : HttpErrorResponse) => {
      switch (error.status){
        case 401 :
            toast.error(error.message, "error 401");
            localStorage.removeItem('accessToken');
            window.location.href = '/login';
            break;
        case 403 :
            toast.warning(error.message, "error 403");
            break;
        default : 
            toast.error(error.message, "error")
            break;
      }
      return throwError(() => error)
    })
  );
};
