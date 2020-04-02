import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackgroundImageDirective } from './directives/background-image.directive';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BackgroundImageDirective,
        FilterPipe
    ],
    exports: [
        BackgroundImageDirective,
        FilterPipe
    ]
})
export class SharedModule { }
