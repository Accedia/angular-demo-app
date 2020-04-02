import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersContainerComponent } from './containers/users-container/users-container.component';
import { UserContainerComponent } from './containers/user-container/user-container.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatListModule,
        MatPaginatorModule,
        MatRadioModule,
        MatInputModule,
        MatSortModule,
        UsersRoutingModule,
        SharedModule
    ],
    declarations: [
        UsersContainerComponent,
        UserContainerComponent,
        UsersListItemComponent,
        UsersSearchComponent,
        UserDetailsFormComponent,
        DeleteUserDialogComponent
    ]
})
export class UsersModule { }
