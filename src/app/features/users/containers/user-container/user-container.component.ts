import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ExternalLinksConstants } from '../../../../shared/constants/external-links.constants';
import { DeleteUserDialogComponent } from '../../components/delete-user-dialog/delete-user-dialog.component';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { UserInfoModel } from '../../models/user-info.model';

@Component({
    selector: 'ums-user-container',
    templateUrl: './user-container.component.html',
    styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
    private userId: number;

    public user: UserModel;
    public user$: Observable<UserModel>;

    constructor(
        private userService: UserService,
        private matDialog: MatDialog,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        const isNewUser: boolean = this.route.snapshot.data.isNewUser;

        if (isNewUser) {
            this.user$ = of({ avatar: ExternalLinksConstants.defaultUserImage } as UserModel);
        } else {
            this.userId = +this.route.snapshot.params.id;
            this.userService.getUser(this.userId);
            this.user$ = this.userService.user$;
        }
    }

    public onDeleteUser(): void {
        const dialogRef = this.matDialog.open(DeleteUserDialogComponent, { disableClose: true });

        dialogRef.afterClosed().subscribe((res: boolean) => {
            if (res) {
                this.userService.deleteUser(this.userId);
            }
        });
    }

    public onSaveUserInformation(user: UserInfoModel): void {
        this.userService.updateUser(this.userId, user);
    }

    public onAddUser(user: UserInfoModel): void {
        this.userService.addUser(user);
    }
}
