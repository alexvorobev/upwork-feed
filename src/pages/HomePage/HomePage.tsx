import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import { HeaderButton } from 'components/Header/types';
import ReloadIcon from 'icons/ReloadIcon';
import SettingsIcon from 'icons/SettingsIcon';
import FeedSection from 'components/FeedSection';
import useUrls from 'controllers/urls/useUrls';

const HomePage = () => {
  const navigate = useNavigate();
  const { list } = useUrls();
  const buttonsConfig: HeaderButton[] = useMemo(
    () => [
      {
        label: 'Reload',
        onClick: () => {},
        icon: <ReloadIcon />,
      },
      {
        label: 'Setting',
        onClick: () => {
          navigate('settings');
        },
        icon: <SettingsIcon />,
      },
    ],
    [navigate],
  );

  const emptyState = list.length === 0 && (
    <div className='text-center py-24'>
      <p className='text-5xl font-bold text-gray-800 mt-10 mb-4 dark:text-slate-200'>You don't have any feeds</p>
      <p className='text-xl text-gray-400 mb-16'>Please go to settings page to add them</p>
      <Link
        to='/settings'
        className='rounded-md bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white px-5 py-3 font-bold'
      >
        Go to settings
      </Link>
    </div>
  );

  return (
    <div>
      <Header title='Upwork RSS' buttons={buttonsConfig} />
      {list.map(({ id }) => (
        <FeedSection key={id} id={id} />
      ))}
      {emptyState}
    </div>
  );
};

export default HomePage;
