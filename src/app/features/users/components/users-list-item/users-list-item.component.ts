import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { UserModel } from '../../models/user.model';

@Component({
    selector: 'ums-users-list-item',
    templateUrl: './users-list-item.component.html',
    styleUrls: ['./users-list-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListItemComponent {
    @Input() user: UserModel;
}
