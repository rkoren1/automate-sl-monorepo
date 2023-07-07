import { ExtensionPeriodUnit } from 'apps/backend/src/core/constants/constants';

export class PaySubscriptionDto {
  extensionTime: number;
  extensionTimeUnit: ExtensionPeriodUnit;
  packageId: number;
  botId: number;
}
