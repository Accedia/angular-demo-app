import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ums-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
    @Input() isLoggedIn: boolean;

    @Output() logout = new EventEmitter<any>();

    public onLogout(): void {
        this.logout.emit();
    }
}
