import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    private configSuccess: MatSnackBarConfig = {
        duration: 5000,
        panelClass: ['snackbar-success']
    };

    private configError: MatSnackBarConfig = {
        duration: 5000,
        panelClass: ['snackbar-error']
    };

    constructor(private snackBar: MatSnackBar) { }

    public success(message: string): void {
        this.snackBar.open(message, 'Close', this.configSuccess);
    }

    public error(message: string): void {
        this.snackBar.open(message, 'Close', this.configError);
    }
}
