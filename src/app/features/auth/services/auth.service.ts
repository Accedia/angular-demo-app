import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NotificationsService } from '../../../core/services/notifications.service';
import { RoutingService } from '../../../core/services/routing.service';
import { ApiUrlsConstants } from '../../../shared/constants/api-urls.constants';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn$$ = new BehaviorSubject<boolean>(false);
    public isLoggedIn$ = this.isLoggedIn$$.asObservable();

    constructor(
        private httpClient: HttpClient,
        private routingService: RoutingService,
        private notificationsService: NotificationsService
    ) { }

    public login(email: string, password: string): void {
        this.httpClient.post(ApiUrlsConstants.loginUrl, { email, password })
            .pipe(catchError(resError => {
                this.notificationsService.error(resError.error.error);

                return of(null);
            }))
            .subscribe(res => {
                if (res) {
                    this.setAccessToken(res.token);
                    this.isLoggedIn$$.next(true);
                    this.routingService.navigateToHome();
                }
            });
    }

    public register(email: string, password: string): void {
        this.httpClient.post(ApiUrlsConstants.registerUrl, { email, password })
            .pipe(catchError(resError => {
                this.notificationsService.error(resError.error.error);

                return of(null);
            }))
            .subscribe(res => {
                if (res) {
                    this.setAccessToken(res.token);
                    this.isLoggedIn$$.next(true);
                    this.routingService.navigateToHome();
                }
            });
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.isLoggedIn$$.next(false);
        this.routingService.navigateToLogin();
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');

        if (token) {
            this.isLoggedIn$$.next(true);
            return true;
        } else {
            this.isLoggedIn$$.next(false);
            return false;
        }
    }

    private setAccessToken(token: string): void {
        localStorage.setItem('token', token);
    }
}
