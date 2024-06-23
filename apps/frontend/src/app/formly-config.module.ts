import { ModuleWithProviders, NgModule, Provider } from '@angular/core';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldComboboxComponent } from './formly-templates';
import { FormlyValidations } from './formly-validations';
import { FormlyWrapperCardComponent } from './formly-wrappers';

/**
 * Formly global configuration
 */
const formlyModuleProviders = FormlyModule.forRoot({
  types: [
    {
      name: 'combobox',
      component: FormlyFieldComboboxComponent,
      wrappers: ['form-field'],
    },
  ],
  wrappers: [
    {
      name: 'card',
      component: FormlyWrapperCardComponent,
    },
  ],
  validationMessages: [],
}).providers as Provider[];

@NgModule({
  imports: [FormlyFieldComboboxComponent, FormlyWrapperCardComponent],
  providers: [FormlyValidations],
})
export class FormlyConfigModule {
  constructor(formlyValidations: FormlyValidations) {
    formlyValidations.init();
  }

  static forRoot(): ModuleWithProviders<FormlyConfigModule> {
    return {
      ngModule: FormlyConfigModule,
      providers: [formlyModuleProviders],
    };
  }
}
