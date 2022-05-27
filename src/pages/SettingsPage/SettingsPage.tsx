import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import { HeaderButton } from 'components/Header/types';
import BackIcon from 'icons/BackIcon';
import DarkModeIcon from 'icons/DarkModeIcon';
import LightModeIcon from 'icons/LightModeIcon';
import { useTheme } from 'controllers/theme/useTheme';
import FeedsForm from 'components/FeedsForm';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { isThemeDark, toggleTheme } = useTheme();

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
    ],
    [isThemeDark, navigate, toggleTheme],
  );

  return (
    <div>
      <Header title='Settings' buttons={buttonsConfig} />
      <div className='flex gap-8'>
        <div className='w-full'>
          <FeedsForm />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
