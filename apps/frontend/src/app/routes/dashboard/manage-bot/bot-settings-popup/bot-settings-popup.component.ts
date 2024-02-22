import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
    selector: 'app-bot-settings-popup',
    templateUrl: './bot-settings-popup.component.html',
    styleUrls: ['./bot-settings-popup.component.scss'],
    standalone: true,
    imports: [
        MatDialogContent,
        FormsModule,
        ReactiveFormsModule,
        MatCheckbox,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class BotSettingsPopupComponent implements OnInit {
  botSettingsForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.initForm();
  }
  validateForm() {}
  private initForm() {
    this.botSettingsForm = new FormGroup({
      acceptinventory: new FormControl(false, {
        nonNullable: true,
      }),
      acceptGroupInvitations: new FormControl(false, {
        nonNullable: true,
      }),
      acceptAnimations: new FormControl(false, {
        nonNullable: true,
      }),
    });
  }
}
