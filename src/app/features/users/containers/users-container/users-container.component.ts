import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { UserModel } from '../../models/user.model';
import { SearchUserModel } from '../../models/search-user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ums-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {
    private userPerPageDefault = 6;
    private totalUsersDefault = 12;
    private lastPageIndex = this.totalUsersDefault / this.userPerPageDefault - 1;

    public totalUsers$: Observable<number>;
    public usersPerPage$: Observable<number>;
    public users$: Observable<UserModel[]> = this.userService.users$;
    public pageIndex = 0;
    public searchCriteria: string;
    public searchText: string;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        this.usersPerPage$ = combineLatest([
            this.userService.userAdded$,
            this.userService.userDeleted$
        ]).pipe(
            switchMap(_ => this.users$),
            map(users => this.pageIndex === this.lastPageIndex && users.length < this.userPerPageDefault ?
                this.userPerPageDefault :
                users.length)
        );

        this.totalUsers$ = combineLatest([
            this.userService.userAdded$,
            this.userService.userDeleted$
        ]).pipe(
            switchMap(_ => this.users$),
            map(users => users.length + this.userPerPageDefault)
        );

        if (this.route.snapshot.queryParams.showCached) {
            this.pageIndex = +this.route.snapshot.queryParams.pageIndex;

            return;
        }

        this.userService.getUsers(this.pageIndex);
    }

    public onPagination(event: any): void {
        this.userService.getUsers(event.pageIndex);
    }

    public onSearch(event: SearchUserModel): void {
        this.searchCriteria = event.searchCriteria;
        this.searchText = event.searchText;
    }

    public onSortData(event: any): void {
        const sortBy = event.active;
        const sortDirection = event.direction;

        if (!sortDirection) {
            this.userService.getUsers(this.pageIndex);
        } else {
            this.userService.sortUsers(sortBy, sortDirection);
        }
    }
}
