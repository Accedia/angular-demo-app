import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './features/auth/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./features/home/home.module')
                            .then(m => m.HomeModule)
    },
    {
        path: 'users',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./features/users/users.module')
                            .then(m => m.UsersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
