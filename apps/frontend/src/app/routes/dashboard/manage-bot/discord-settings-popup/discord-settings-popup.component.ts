import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { DiscordSettingsInput } from '../../../../shared/Models/discordSettings.model';
import { DiscSettingsForm } from '../../../../shared/Models/forms.model';
import { DiscordSettingsService } from './discord-settings.service';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatLabel, MatFormField } from '@angular/material/form-field';

@Component({
    selector: 'app-discord-settings-popup',
    templateUrl: './discord-settings-popup.component.html',
    styleUrls: ['./discord-settings-popup.component.scss'],
    standalone: true,
    imports: [
        MatDialogContent,
        FormsModule,
        ReactiveFormsModule,
        MatLabel,
        MatFormField,
        MatInput,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class DiscordSettingsPopupComponent implements OnInit {
  discordSettingsForm: FormGroup<DiscSettingsForm>;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public inputParams: DiscordSettingsInput,
    private discSettingsService: DiscordSettingsService,
    private dialogRef: MatDialogRef<DiscordSettingsPopupComponent>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  confirmClicked() {
    const formData = this.discordSettingsForm.value;
    this.discSettingsService
      .setDiscordSettings({
        id: this.inputParams.id,
        botId: this.inputParams.botId,
        discChannelId: formData.discChannelId,
        webHookUrl: formData.webhookUrl,
        slGroupUuid: formData.slGroupUuid,
      })
      .subscribe((res) => {
        this.dialogRef.close();
      });
  }

  private initForm() {
    this.discordSettingsForm = new FormGroup<DiscSettingsForm>({
      discChannelId: new FormControl(this.inputParams.discChannelId, {
        nonNullable: true,
      }),
      slGroupUuid: new FormControl(this.inputParams.slGroupUuid, {
        nonNullable: true,
      }),
      webhookUrl: new FormControl(this.inputParams.webHookUrl, {
        nonNullable: true,
      }),
    });
  }
}
