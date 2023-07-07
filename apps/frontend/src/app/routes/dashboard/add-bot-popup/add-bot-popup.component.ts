import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedBot } from 'main/@shared/Models/bot.model';
import { AddBotForm, AddSharedBotForm } from 'main/@shared/Models/forms.model';

@Component({
  selector: 'app-add-bot-popup',
  templateUrl: './add-bot-popup.component.html',
  styleUrls: ['./add-bot-popup.component.scss'],
})
export class AddBotPopupComponent implements OnInit {
  addBotForm: FormGroup<AddBotForm>;
  addSharedBotForm: FormGroup<AddSharedBotForm>;
  selectedSpawnLocation: string;
  botType = 'my';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: SharedBot[],
    private dialogRef: MatDialogRef<AddBotPopupComponent>
  ) {}
  ngOnInit() {
    this.addBotForm = new FormGroup<AddBotForm>({
      slUserName: new FormControl(null, {
        nonNullable: true,
      }),
      slPassword: new FormControl(null, {
        nonNullable: true,
      }),
      loginSpawnLocation: new FormControl('last', {
        nonNullable: true,
      }),
      loginRegion: new FormControl(null, {
        nonNullable: true,
      }),
    });
    this.addSharedBotForm = new FormGroup<AddSharedBotForm>({
      sharedBotId: new FormControl(null, {
        nonNullable: true,
      }),
    });
  }
  botTypeChanged(e: any) {
    this.botType = e.value;
  }

  validateForm() {
    if (this.botType === 'my') {
      this.addBotForm.markAllAsTouched();

      if (this.addBotForm.valid) {
        this.dialogRef.close({
          formValue: this.addBotForm.value,
          botType: 'my',
        });
      }
    } else {
      this.addSharedBotForm.markAllAsTouched();

      if (this.addSharedBotForm.valid) {
        this.dialogRef.close({
          formValue: this.addSharedBotForm.value,
          botType: 'shared',
        });
      }
    }
  }
}
