/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';

import { FeedData } from './types';

const DB_NAME = 'UpworkFeeds';

const DB_STORES = ['feeds', 'posts', 'schedule'];

const createStores = (database_: IDBDatabase) => {
  const stores = database_?.objectStoreNames;

  if (stores) {
    // Check and create stores
    for (const item of DB_STORES) {
      console.log({ item, contains: !stores.contains(item) });
      if (!stores.contains(item)) {
        database_?.createObjectStore(item);
      }
    }
  } else {
    for (const item of DB_STORES) {
      database_?.createObjectStore(item, { keyPath: 'id', autoIncrement: true });
    }
  }
};

const useURLsDB = () => {
  const [database, setDatabase] = useState<IDBDatabase | null>(null);
  const [feeds, setFeeds] = useState<FeedData[]>();

  // Setup db
  useEffect(() => {
    if (database === null) {
      const openRequest = indexedDB.open(DB_NAME, 1);
      openRequest.addEventListener('error', function () {
        console.error('Error', openRequest.error);
      });

      openRequest.onsuccess = function () {
        setDatabase(openRequest.result);
      };

      openRequest.onupgradeneeded = () => {
        createStores(openRequest.result);
      };
    }
  }, [database]);

  const readFromDB = useCallback(() => {
    if (database) {
      const readingTransaction = database.transaction('feeds', 'readonly');
      const feedsList = readingTransaction.objectStore('feeds').getAll();
      feedsList.onsuccess = () => {
        setFeeds(feedsList.result.map((item: {data: FeedData}) => item.data));
      }
    }
  }, [database]);

  //Read from DB
  useEffect(() => {
    if (database) {
      readFromDB();
    }
  }, [database, readFromDB]);

  const putFeed = useCallback(
    ({ id, title, url, period }: FeedData) => {
      const transaction = database?.transaction(DB_STORES, 'readwrite').objectStore('feeds');
      transaction?.put({ data: { title, url, period, id } }, id).addEventListener('success', () => {
        readFromDB();
      });
    },
    [database, readFromDB],
  );

  return { feeds, putFeed };
};

export default useURLsDB;
