import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'main/@env/environment';
import { ILinkAccData } from 'main/@shared/Models/bot.model';
import { Package } from 'main/@shared/Models/package.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionPopupService {
  constructor(private http: HttpClient) {}

  linkAcctoBot(botId: number, data: ILinkAccData) {
    const params = new HttpParams().append('botId', botId);
    return this.http.put(
      environment.apiUrl + '/bot/linkacctobot',
      {
        loginFirstName: data.loginFirstName,
        loginSpawnLocation: data.loginSpawnLocation,
        loginRegion: data.loginRegion,
      },
      { params }
    );
  }
  getPackages() {
    return this.http.get<Package[]>(environment.apiUrl + '/bot/getpackages');
  }
  payForPackage(data: {
    packageId: number;
    dateUnit: string;
    amountOfDateUnits: number;
    botId: number;
  }) {
    return this.http.post(environment.apiUrl + '/payment/payforpackage', {
      packageId: data.packageId,
      dateUnit: data.dateUnit,
      amountOfDateUnits: data.amountOfDateUnits,
      botId: data.botId,
    });
  }
}
