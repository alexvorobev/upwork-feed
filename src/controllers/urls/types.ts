/* eslint-disable no-magic-numbers */
export enum PERIOD {
  ONE = 1,
  FIVE = 5,
  TEN = 10,
  THIRTY = 30,
}

export interface FeedData {
  id: string;
  title: string;
  url: string;
  period: PERIOD;
}
