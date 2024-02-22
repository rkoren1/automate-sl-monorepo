import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { AddSubscriptionForm } from 'main/@shared/Models/forms.model';
import { Package } from 'main/@shared/Models/package.model';
import { SubscriptionPopupService } from './subscription-popup.service';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { NgFor, NgIf } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
    selector: 'app-subscription-popup',
    templateUrl: './subscription-popup.component.html',
    styleUrls: ['./subscription-popup.component.scss'],
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatSelect,
        NgFor,
        MatOption,
        MatInput,
        NgIf,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class SubscriptionPopupComponent implements OnInit {
  subscriptionForm: FormGroup<AddSubscriptionForm>;
  packages: Package[] = [];

  constructor(
    private subscriptionPopupService: SubscriptionPopupService,
    @Inject(MAT_DIALOG_DATA)
    public currentPackage: {
      packageId: number;
      package: string;
      botId: number;
    },
    private dialogRef: MatDialogRef<SubscriptionPopupComponent>,
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.subscriptionPopupService.getPackages().subscribe((packages) => {
      this.packages = packages;
      this.packages = this.packages.filter(
        (ele) => ele.packageName !== 'Free Trial',
      );
    });
  }
  private initForm() {
    this.subscriptionForm = new FormGroup<AddSubscriptionForm>({
      packageName: new FormControl(null, {
        nonNullable: true,
      }),
      dateUnit: new FormControl('Week', {
        nonNullable: true,
      }),
      quantityOfDateUnits: new FormControl(1, {
        nonNullable: true,
      }),
    });
    if (this.currentPackage.packageId > 1) {
      this.subscriptionForm.controls.packageName.disable();
      this.subscriptionForm.controls.packageName.setValue(
        this.currentPackage.packageId,
      );
    }
  }
  confirmClicked() {
    const formData = this.subscriptionForm.value;
    this.subscriptionPopupService
      .payForPackage({
        packageId: formData.packageName || this.currentPackage.packageId,
        dateUnit: formData.dateUnit!,
        amountOfDateUnits: formData.quantityOfDateUnits!,
        botId: this.currentPackage.botId,
      })
      .subscribe((res) => {
        this.dialogRef.close();
      });
  }
  getQuantityOfDateUnits() {
    return this.subscriptionForm.get('quantityOfDateUnits')?.value;
  }
  getPackageName() {
    return this.subscriptionForm.get('packageName')?.value;
  }
  getDateUnit() {
    return this.subscriptionForm.get('dateUnit')?.value;
  }
  getPackagePrice() {
    const selectedPackage = this.subscriptionForm.get('packageName')?.value;
    const dateUnit = this.subscriptionForm.get('dateUnit')?.value;
    const numberOfDateUnits = this.subscriptionForm.get('quantityOfDateUnits')
      ?.value;
    const packageInformation: Package[] = this.packages.filter(
      (pack) => pack.id == selectedPackage,
    );
    if (packageInformation[0] && dateUnit === 'Week') {
      return (numberOfDateUnits || 0) * packageInformation[0].pricePerWeek;
    }
    if (packageInformation[0] && dateUnit === 'Month') {
      return (numberOfDateUnits || 0) * packageInformation[0].pricePerMonth;
    }
    return '';
  }
}
