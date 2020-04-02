import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderComponent } from '../components/loader/loader.component';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private dialog: MatDialog) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dialogRef = this.dialog.open(LoaderComponent);

        return next.handle(req).pipe(
            finalize(() => dialogRef.close())
        );
    }
}
