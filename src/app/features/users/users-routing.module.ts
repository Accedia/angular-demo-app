import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { UserContainerComponent } from './containers/user-container/user-container.component';

const routes: Routes = [
    {
        path: '',
        component: UsersContainerComponent
    },
    {
        path: 'add',
        component: UserContainerComponent,
        data: {
            isNewUser: true
        }
    },
    {
        path: ':id',
        component: UserContainerComponent,
        data: {
            isNewUser: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
