import { FC, useCallback, useEffect, useState } from 'react';

import { WithChildren } from 'types/WithChildren';
import getUniqId from 'utils/getUniqId';

import { FeedData, PERIOD } from './types';
import UrlsListContext from './UrlsListContext';
import useDatabase from './useDatabase';
import getNextDate from './utils/getNextDate';

const ID_LENGTH = 10;

const UrlsListProvider: FC<WithChildren> = ({ children }) => {
  const [list, setList] = useState<FeedData[]>([]);
  const { feeds, putFeed, putSchedule } = useDatabase();

  console.log(getNextDate(PERIOD.FIVE));

  useEffect(() => {
    if (feeds) {
      setList(feeds);
    }
  }, [feeds]);

  const push = useCallback(
    (data: Omit<FeedData, 'id' | 'period'>) => {
      const newItem = { id: getUniqId(ID_LENGTH), period: PERIOD.THIRTY, ...data };
      putFeed(newItem);
      setList([...list, newItem]);
    },
    [list, putFeed],
  );

  const update = useCallback(
    (data: FeedData, updateSchedule?: boolean) => {
      putFeed(data);

      if (updateSchedule) {
        putSchedule({ feed: data.id, date: getNextDate(data.period) });
      }
    },
    [putFeed, putSchedule],
  );
  const remove = useCallback(() => {}, []);

  return <UrlsListContext.Provider value={{ list, push, update, remove }}>{children}</UrlsListContext.Provider>;
};

export default UrlsListProvider;
