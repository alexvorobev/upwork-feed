import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import { HeaderButton } from 'components/Header/types';
import ReloadIcon from 'icons/ReloadIcon';
import SettingsIcon from 'icons/SettingsIcon';

const HomePage = () => {
  const navigate = useNavigate();
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

  return (
    <div>
      <Header title='Upwork RSS' buttons={buttonsConfig} />
    </div>
  );
};

export default HomePage;
