import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
    selector: 'ums-header-container',
    templateUrl: './header-container.component.html',
    styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent {
    public isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;

    constructor(private authService: AuthService) { }

    public onLogout(): void {
        this.authService.logout();
    }
}
