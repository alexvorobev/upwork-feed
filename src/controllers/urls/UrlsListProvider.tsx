import { FC, useCallback, useState } from 'react';

import { WithChildren } from 'types/WithChildren';

import { FeedData } from './types';
import UrlsListContext from './UrlsListContext';

const UrlsListProvider: FC<WithChildren> = ({ children }) => {
  const [list, setList] = useState<FeedData[]>([]);

  const push = useCallback(
    (data: Omit<FeedData, 'id'>) => {
      setList([...list, { id: 1, ...data }]);
    },
    [list],
  );

  const update = useCallback(() => {}, []);
  const remove = useCallback(() => {}, []);

  return <UrlsListContext.Provider value={{ list, push, update, remove }}>{children}</UrlsListContext.Provider>;
};

export default UrlsListProvider;
