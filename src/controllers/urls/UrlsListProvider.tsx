import { FC, useCallback, useEffect, useState } from 'react';

import { WithChildren } from 'types/WithChildren';
import getUniqId from 'utils/getUniqId';

import { FeedData, PERIOD } from './types';
import UrlsListContext from './UrlsListContext';
import useDatabase from './useDatabase';

const ID_LENGTH = 10;

const UrlsListProvider: FC<WithChildren> = ({ children }) => {
  const [list, setList] = useState<FeedData[]>([]);
  const { feeds, putFeed } = useDatabase();

  useEffect(() => {
    if(feeds) {
      setList(feeds);
    }
  }, [feeds])

  const push = useCallback(
    (data: Omit<FeedData, 'id' | 'period'>) => {
      const newItem = { id: getUniqId(ID_LENGTH), period: PERIOD.THIRTY, ...data };
      putFeed(newItem);
      setList([...list, newItem]);
    },
    [list, putFeed],
  );

  const update = useCallback((data: FeedData) => {
    console.log(data);
    putFeed(data);
  }, [putFeed]);
  const remove = useCallback(() => {}, []);

  return <UrlsListContext.Provider value={{ list, push, update, remove }}>{children}</UrlsListContext.Provider>;
};

export default UrlsListProvider;
