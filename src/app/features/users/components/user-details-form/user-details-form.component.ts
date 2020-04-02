import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserModel } from '../../models/user.model';
import { UserInfoModel } from '../../models/user-info.model';
import { ValidationConstants } from '../../../../shared/constants/validation.constants';

@Component({
    selector: 'ums-user-details-form',
    templateUrl: './user-details-form.component.html',
    styleUrls: ['./user-details-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsFormComponent implements OnChanges {
    @Input() user: UserModel;

    @Output() saveUser = new EventEmitter<UserInfoModel>();
    @Output() addUser = new EventEmitter<UserInfoModel>();

    public userDetailsForm: FormGroup;
    public updatedAt: Date;
    public isInEditMode = false;

    constructor(private formBuilder: FormBuilder) {
        this.initiateUserDetailsForm();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.user && changes.user.currentValue) {
            if (this.user.id) {
                this.toggleFormControls();
            }

            this.setUserDetailsValues();
        }
    }

    public onEditUser(): void {
        if (this.userDetailsForm.invalid) {
            return;
        }

        if (!this.user.id) {
            this.onAddUser();
            return;
        }

        this.isInEditMode = !this.isInEditMode;

        if (!this.isInEditMode) {
            this.onSaveUser();
        } else {
            this.toggleFormControls();
        }
    }

    private initiateUserDetailsForm(): void {
        this.userDetailsForm = this.formBuilder.group({
            id: [null],
            name: [null, Validators.required],
            email: [null, [
                    Validators.required,
                    Validators.pattern(ValidationConstants.emailRegexPattern)
                ]
            ],
            job: [null, Validators.required]
        });
    }

    private setUserDetailsValues(): void {
        this.userDetailsForm.patchValue({
            id: this.user.id,
            name: this.user.name,
            email: this.user.email,
            job: this.user.job
        });

        this.updatedAt = this.user.updatedAt;
    }

    private toggleFormControls(): void {
        for (const control in this.userDetailsForm.controls) {
            if (this.isInEditMode && control !== 'id') {
                this.userDetailsForm.controls[control].enable();
            } else {
                this.userDetailsForm.controls[control].disable();
            }
        }
    }

    private onSaveUser(): void {
        this.saveUser.emit(this.getPopulatedUserInfo());
    }

    private onAddUser(): void {
        this.addUser.emit(this.getPopulatedUserInfo());
    }

    private getPopulatedUserInfo(): UserInfoModel {
        const updatedUser: UserInfoModel = {
            name: this.userDetailsForm.controls.name.value,
            email: this.userDetailsForm.controls.email.value,
            job: this.userDetailsForm.controls.job.value
        };

        return updatedUser;
    }
}
