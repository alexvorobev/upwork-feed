import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import Header from 'components/Header';
import { HeaderButton } from 'components/Header/types';
import BackIcon from 'icons/BackIcon';
import SaveIcon from 'icons/SaveIcon';
import DarkModeIcon from 'icons/DarkModeIcon';
import LightModeIcon from 'icons/LightModeIcon';
import { useTheme } from 'controllers/theme/useTheme';

import FeedsForm from './components/FeedsForm';

enum Tabs {
  FEEDS,
  FETCHING,
}

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.FEEDS);
  const { isThemeDark, toggleTheme } = useTheme();
  const menuList = useMemo(
    () => [
      { label: 'Feeds', key: Tabs.FEEDS },
      { label: 'Fetching', key: Tabs.FETCHING },
    ],
    [],
  );

  const buttonsConfig: HeaderButton[] = useMemo(
    () => [
      {
        label: 'Back',
        onClick: () => {
          navigate('/');
        },
        icon: <BackIcon />,
      },
      {
        label: 'Toggle theme',
        onClick: toggleTheme,
        icon: isThemeDark ? <DarkModeIcon /> : <LightModeIcon />,
      },
      {
        label: 'Save',
        onClick: () => {
          navigate('/');
        },
        icon: <SaveIcon />,
      },
    ],
    [isThemeDark, navigate, toggleTheme],
  );

  const renderMenuButton = (label: string, key: Tabs) => (
    <button
      onClick={() => setActiveTab(key)}
      key={label}
      className={classNames(
        'rounded-full w-full px-4 py-2 text-left text-gray-900 font-bold hover:bg-gray-100 active:bg-gray-200 active:border-gray-200 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 mb-2',
        {
          'bg-gray-100 hover:bg-gray-100 dark:bg-slate-600': activeTab === key,
        },
      )}
    >
      {label}
    </button>
  );
  const renderedMenuButtons = menuList.map(({ label, key }) => renderMenuButton(label, key));

  return (
    <div>
      <Header title='Settings' buttons={buttonsConfig} />
      <div className='flex gap-8'>
        <div className='w-1/6'>{renderedMenuButtons}</div>
        <div className='w-5/6'>{activeTab === Tabs.FEEDS && <FeedsForm />}</div>
      </div>
    </div>
  );
};

export default SettingsPage;
