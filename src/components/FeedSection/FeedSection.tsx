import { FC } from 'react';

import Slider from 'components/Slider';
import useUrls from 'controllers/urls/useUrls';

interface Props {
  id?: string;
}

const FeedSection: FC<Props> = ({ id }) => {
  const { list } = useUrls();
  const feedData = list.find((item) => item.id === id);

  const renderedParameter = (
    <div className='text-xs grid grid-cols-2'>
      <p className='text-gray-300 dark:text-slate-700'>Proposals</p>
      <p className='text-gray-900 dark:text-slate-400'>10-20</p>
    </div>
  );

  const renderedItem = (
    <div className='bg-white hover:bg-gray-100/40 dark:bg-slate-900 dark:hover:bg-slate-800/40 ring-gray-200 dark:ring-slate-800 ring-1 rounded-lg p-6 pb-4 w-30 cursor-pointer'>
      <p className='font-bold h-10 text-sm mb-4 text-gray-900 dark:text-slate-300 text-ellipsis overflow-hidden'>
        Create Add Campaign Page (Home Page Superadmin) in NextJS and MUI v5
      </p>
      <p className='text-xs mb-10 text-gray-700 dark:text-slate-400 h-8 text-ellipsis overflow-hidden'>
        I am looking to get frontend developer to make Add Campaign Page (Home Page Superadmin) in NextJS and MUI v5
      </p>
      <div className='grid grid-cols-2 gap-x-5 gap-y-2'>
        {renderedParameter}
        {renderedParameter}
        {renderedParameter}
        {renderedParameter}
        {renderedParameter}
      </div>
    </div>
  );

  return (
    <div className='w-fill mb-8'>
      <h4 className='text-xl font-bold dark:text-slate-300 mb-4'>{feedData?.title}</h4>
      <div className='w-fill'>
        <Slider>
          {renderedItem}
          {renderedItem}
          {renderedItem}
          {renderedItem}
          {renderedItem}
        </Slider>
      </div>
    </div>
  );
};

export default FeedSection;
