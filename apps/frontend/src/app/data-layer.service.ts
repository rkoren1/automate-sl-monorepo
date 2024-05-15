import { Injectable } from '@angular/core';
import { WindowReferenceService } from './window-reference.service';

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  private window;

  constructor(private _windowRef: WindowReferenceService) {
    this.window = _windowRef.nativeWindow; // intialise the window to what we get from our window service
  }

  private pingHome(obj: object) {
    if (obj) this.window.dataLayer.push(obj);
  }

  //list of all our dataLayer methods

  logPageView(url: string) {
    const hit = {
      event: 'content-view',
      pageName: url,
    };
    this.pingHome(hit);
  }

  logEvent(event: string, category: any, action: any, label: any) {
    const hit = {
      event: event,
      category: category,
      action: action,
      label: label,
    };
    this.pingHome(hit);
  }

  // .. add more custom methods as needed by your app.
}
