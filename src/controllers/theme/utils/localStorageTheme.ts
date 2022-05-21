const LOCAL_STORAGE_KEY = 'isDarkTheme';

export const getLocalStorageTheme = (): boolean => {
  const isDarkTheme = localStorage.getItem(LOCAL_STORAGE_KEY);

  return isDarkTheme === 'true';
};

export const setLocalStorageTheme = (isDarkTheme: boolean) =>
  localStorage.setItem(LOCAL_STORAGE_KEY, isDarkTheme.toString());
