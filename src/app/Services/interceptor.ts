import { HttpErrorResponse, HttpEvent } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenInfo = this.authService.getCurrentUserInfo();
        if (tokenInfo != null) {
            req = req.clone({
                setHeaders: { Authorization: `Bearer ${tokenInfo.token}` }
            });
        }

        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    //this.errorHandler.handleError(error);
                    //return throwError(() => err);
                    debugger;
                    var errorResponse = {
                        'Status': error.status,
                        'ErrorMessage': error.error
                    }
                    return throwError(() => errorResponse);

                })
            );
    }
}