import { createContext } from 'react';

import { FeedData } from './types';

export interface UrlsListContextValue {
  list: FeedData[];
  push: (data: Omit<FeedData, 'id' | 'period'>) => void;
  update: (data: FeedData) => void;
  remove: (id: number) => void;
}

const noop = () => {};

const UrlsListContext = createContext<UrlsListContextValue>({
  list: [],
  push: noop,
  update: noop,
  remove: noop,
});

export default UrlsListContext;
