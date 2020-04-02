import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterContainerComponent } from './containers/register-container/register-container.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';

const routes: Routes = [
    { path: 'register', component: RegisterContainerComponent },
    { path: 'login', component: LoginContainerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
