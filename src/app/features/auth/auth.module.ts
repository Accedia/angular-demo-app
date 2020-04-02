import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RegisterContainerComponent } from './containers/register-container/register-container.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        AuthRoutingModule
    ],
    declarations: [
        RegisterContainerComponent,
        LoginContainerComponent,
        AuthFormComponent
    ]
})
export class AuthModule { }
