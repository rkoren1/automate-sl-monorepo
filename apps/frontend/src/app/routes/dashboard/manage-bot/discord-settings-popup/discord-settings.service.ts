import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiscordSettingsService {
  constructor(private http: HttpClient) {}

  setDiscordSettings(data: any) {
    return this.http.post(environment.apiUrl + '/bot/setdiscordsettings', {
      id: data.id,
      botId: data.botId,
      discChannelId: data.discChannelId,
      webHookUrl: data.webHookUrl,
      slGroupUuid: data.slGroupUuid,
    });
  }
}
