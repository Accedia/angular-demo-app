import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
    declarations: [
        HeaderContainerComponent,
        NavigationComponent,
        LoaderComponent
    ],
    exports: [
        HeaderContainerComponent,
        LoaderComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ]
})
export class CoreModule { }
