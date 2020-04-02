import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ums-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteUserDialogComponent {
    constructor(private dialogRef: MatDialogRef<DeleteUserDialogComponent>) { }

    public onCancelClick(): void {
        this.dialogRef.close();
    }

    public onDeleteClick(): void {
        this.dialogRef.close(true);
    }
}
