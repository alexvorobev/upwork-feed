import { FC } from 'react';

import { HeaderButton } from './types';

interface Props {
  title: string;
  buttons?: HeaderButton[];
}

const Header: FC<Props> = ({ title, buttons }) => {
  const renderedButtons = buttons && (
    <div>
      {buttons.map(({ label, icon, onClick }) => (
        <button
          key={label}
          className={`
            ml-4
            border-2
            rounded-full
            p-2
            text-gray-400
            border-gray-400
            hover:text-gray-900
            hover:border-gray-900
            hover:bg-gray-100
            active:bg-gray-300
            dark:text-slate-400
            dark:border-slate-400
            dark:hover:bg-slate-600
            dark:hover:text-white
            dark:hover:border-white
            dark:active:bg-slate-800
          `}
          onClick={onClick}
        >
          {icon ?? label}
        </button>
      ))}
    </div>
  );

  return (
    <div className='w-full mb-8 flex align-center justify-between'>
      <h1 className='text-4xl font-black dark:text-slate-300'>{title}</h1>
      {renderedButtons}
    </div>
  );
};

export default Header;
