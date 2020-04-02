import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { SearchUserModel } from '../../models/search-user.model';

@Component({
    selector: 'ums-users-search',
    templateUrl: './users-search.component.html',
    styleUrls: ['./users-search.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersSearchComponent {
    @Output() search = new EventEmitter<SearchUserModel>();

    private searchCriteria: 'name' | 'email' = 'name';
    private searchText: string;

    public onSearchCriteriaChange(event: any): void {
        this.searchCriteria = event.value;
        this.onSearch();
    }

    public onSearchTextChange(event: any): void {
        this.searchText = event.target.value;
        this.onSearch();
    }

    private onSearch(): void {
        const event = {
            searchCriteria: this.searchCriteria,
            searchText: this.searchText
        } as SearchUserModel;

        this.search.emit(event);
    }
}
