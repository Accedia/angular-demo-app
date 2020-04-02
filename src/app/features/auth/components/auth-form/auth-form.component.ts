import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ValidationConstants } from 'src/app/shared/constants/validation.constants';

@Component({
    selector: 'ums-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent implements OnInit {
    @Output() submitForm = new EventEmitter<any>();

    public authForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.authForm = this.formBuilder.group({
            email: [
                null,
                [
                    Validators.required,
                    Validators.pattern(ValidationConstants.emailRegexPattern)
                ]
            ],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(ValidationConstants.passwordMinLength)
                ]
            ]
        });
    }

    public onSubmit(): void {
        if (this.authForm.invalid) {
            return;
        }

        const formData = { ...this.authForm.value };
        this.submitForm.emit(formData);
    }
}
