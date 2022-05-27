export enum PERIOD {
  ONE,
  FIVE,
  TEN,
  THIRTY,
}

export interface FeedData {
  id: string;
  title: string;
  url: string;
  period: PERIOD;
}
