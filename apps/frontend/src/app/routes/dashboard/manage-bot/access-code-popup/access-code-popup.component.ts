import { Component, OnInit } from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
    selector: 'app-access-code-popup',
    templateUrl: './access-code-popup.component.html',
    styleUrls: ['./access-code-popup.component.scss'],
    standalone: true,
    imports: [
        MatDialogContent,
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        MatButton,
        CdkCopyToClipboard,
        MatDialogActions,
        MatDialogClose,
    ],
})
export class AccessCodePopupComponent implements OnInit {
  accessCodeValue = 'test';
  constructor() {}

  ngOnInit() {}
  confirm() {}
}
