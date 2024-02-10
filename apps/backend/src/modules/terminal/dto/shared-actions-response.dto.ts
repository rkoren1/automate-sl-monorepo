import { Result } from 'apps/backend/src/core/enums/enums';

export class SharedActionsResponseDto {
  result: Result;
  resulttext: string;
  custom: any;
}
