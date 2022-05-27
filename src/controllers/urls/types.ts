export enum PERIOD {
  ONE,
  FIVE,
  TEN,
  THIRTY,
}

export interface FeedData {
  id: number;
  title: string;
  url: string;
  period: PERIOD;
}
