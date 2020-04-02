import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private router: Router) { }

    public navigateToHome(): Promise<boolean> {
        return this.router.navigate(['/home']);
    }

    public navigateToLogin(): Promise<boolean> {
        return this.router.navigate(['/login']);
    }

    public navigateToUsers(pageIndex = 0, showCached = false): Promise<boolean> {
        if (showCached) {
            return this.router.navigate(['/users'], { queryParams: { showCached, pageIndex } });
        } else {
            return this.router.navigate(['/users']);
        }
    }
}
