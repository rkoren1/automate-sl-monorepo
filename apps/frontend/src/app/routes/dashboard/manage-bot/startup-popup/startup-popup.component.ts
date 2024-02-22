import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBotConfiguration } from 'main/@shared/Models/bot.model';
import { StartupFormModel } from './startup-form.model';
import { StartupPopupService } from './startup-popup.service';

@Component({
  selector: 'app-startup-popup',
  templateUrl: './startup-popup.component.html',
  styleUrls: ['./startup-popup.component.scss'],
})
export class StartupPopupComponent implements OnInit {
  startupForm: FormGroup<StartupFormModel>;
  selectedSpawnLocation?: string;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public inputParams: IBotConfiguration,
    private startupPopupService: StartupPopupService,
    private dialogRef: MatDialogRef<StartupPopupComponent>,
  ) {}

  ngOnInit() {
    this.selectedSpawnLocation = this.inputParams.loginSpawnLocation;
    this.initForm();
  }

  validateForm() {
    if (this.startupForm.value.loginSpawnLocation !== 'region')
      this.startupForm.controls.loginRegion.disable();
    else this.startupForm.controls.loginRegion.enable();
    if (this.startupForm.valid) {
      const formData = this.startupForm.value;
      this.startupPopupService
        .setBotConfiguration({
          botId: this.inputParams.botId,
          loginRegion: formData.loginRegion,
          loginSpawnLocation: formData.loginSpawnLocation,
        })
        .subscribe(() => {
          this.dialogRef.close();
        });
    }
  }

  private initForm() {
    this.startupForm = new FormGroup<StartupFormModel>({
      loginSpawnLocation: new FormControl(this.inputParams.loginSpawnLocation, {
        nonNullable: true,
      }),
      loginRegion: new FormControl(this.inputParams.loginRegion, {
        nonNullable: true,
        validators: [
          Validators.pattern(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
          ),
        ],
      }),
      startupObject: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}
