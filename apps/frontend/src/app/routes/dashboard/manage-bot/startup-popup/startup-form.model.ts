import { FormControl } from '@angular/forms';

export interface StartupFormModel {
  loginSpawnLocation: FormControl<string | undefined>;
  loginRegion: FormControl<string | undefined>;
  startupObject: FormControl<string>;
}
