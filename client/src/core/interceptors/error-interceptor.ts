import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ToastService } from '../services/toast-service';
import { NavigationExtras, Router } from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService)
  const router = inject(Router)
  return next(req).pipe(
    catchError(error => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              const modelStaterrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modelStaterrors.push(error.error.errors[key])
                }
              }
              throw modelStaterrors.flat()

            } else {
              toast.error(error.error)
            }
            break;
          case 401:
            toast.error("Unauthorized")
            break
          case 404:
            router.navigateByUrl("/not-found")
            break
          case 500:
            const navigateionExtra: NavigationExtras = { state: { error: error.error } }
            router.navigateByUrl("/server-error", navigateionExtra)
            break
          default:
            toast.error("Something went wrong");
        }
      }

      throw error
    })
  )
};
