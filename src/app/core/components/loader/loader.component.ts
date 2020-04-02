import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ums-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent { }
