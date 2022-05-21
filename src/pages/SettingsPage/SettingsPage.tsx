import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import { HeaderButton } from 'components/Header/types';
import BackIcon from 'icons/BackIcon';
import SaveIcon from 'icons/SaveIcon';
import DarkModeIcon from 'icons/DarkModeIcon';
import LightModeIcon from 'icons/LightModaIcon';
import { useTheme } from 'controllers/theme/useTheme';

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

  return (
    <div>
      <Header title='Settings' buttons={buttonsConfig} />
    </div>
  );
};

export default SettingsPage;
