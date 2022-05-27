import { useContext } from 'react';

import UrlsListContext, { UrlsListContextValue } from './UrlsListContext';

const useUrls = (): UrlsListContextValue => useContext(UrlsListContext);

export default useUrls;
