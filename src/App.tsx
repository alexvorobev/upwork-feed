import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'controllers/theme/useTheme';

import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <ThemeProvider>
      <div className='overflow-hidden'>
        <div className='mx-auto p-16 w-full h-full min-h-screen'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='settings' element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
