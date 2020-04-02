import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'ums-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.css']
})
export class RegisterContainerComponent {
    constructor(private authService: AuthService) { }

    public onSubmit(formData: any): void {
        this.authService.register(formData.email, formData.password);
    }
}
