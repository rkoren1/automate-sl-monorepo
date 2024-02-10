import { ExtensionPeriodUnit } from 'apps/backend/src/core/enums/enums';

export class PaySubscriptionDto {
  extensionTime: number;
  extensionTimeUnit: ExtensionPeriodUnit;
  packageId: number;
  botId: number;
}
