import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { RoutingService } from '../../../core/services/routing.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(
        public authService: AuthService,
        public routingService: RoutingService
    ) { }

    public canActivate(): boolean {
        if (!this.authService.isAuthenticated()) {
            this.routingService.navigateToLogin();

            return false;
        }

        return true;
    }
}
