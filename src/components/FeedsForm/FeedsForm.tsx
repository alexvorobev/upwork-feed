import classNames from 'classnames';

import IntervalSelector from 'components/IntervalSelector';
import { PERIOD } from 'controllers/urls/types';
import DeleteIcon from 'icons/DeleteIcon';
import EditIcon from 'icons/EditIcon';

interface FeedItem {
  id: string;
  title: string;
  url: string;
}

const FeedsForm = () => {
  const rowActionClasses = classNames(
    'p-3',
    'rounded-full',
    'border-2',
    'text-gray-400',
    'border-gray-400',
    'hover:text-gray-900',
    'hover:border-gray-900',
    'hover:bg-gray-100',
    'active:bg-gray-300',
    'dark:text-slate-400',
    'dark:border-slate-400',
    'dark:hover:bg-slate-600',
    'dark:hover:text-white',
    'dark:hover:border-white',
    'dark:active:bg-slate-800',
  );

  const renderRow = ({ title, url, id }: FeedItem) => (
    <div
      key={id}
      className='flex p-4 pl-8 items-center gap-4 border-2 border-transparent hover:border-gray-100 rounded-full dark:hover:border-slate-800'
    >
      <p className='w-52 shrink-0 font-bold w-32 overflow-hidden text-ellipsis whitespace-nowrap'>{title}</p>
      <div className='w-full shrink-1 h-6 overflow-hidden text-ellipsis whitespace-nowrap'>{url}</div>
      <IntervalSelector value={PERIOD.ONE} />
      <div className='shrink-0 flex gap-4'>
        <button className={rowActionClasses} onClick={() => console.log('Edit', id)}>
          <EditIcon />
        </button>
        <button className={rowActionClasses} onClick={() => console.log('Remove', id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className='bg-gray-100 dark:bg-slate-800 w-full p-4 flex gap-4 mb-8 rounded-full'>
        <input
          placeholder='Title'
          type='text'
          className={classNames(
            'py-2',
            'px-4',
            'rounded-full',
            'dark:ring-2',
            'dark:ring-slate-400',
            'dark:bg-transparent',
            'dark:text-white',
            'dark:focus:ring-slate-500',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-gray-300',
          )}
        />
        <input
          placeholder='URL'
          type='text'
          className={classNames(
            'w-full',
            'py-2',
            'px-4',
            'rounded-full',
            'dark:ring-2',
            'dark:ring-slate-400',
            'dark:bg-transparent',
            'dark:text-white',
            'dark:focus:ring-slate-500',
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-gray-300',
          )}
        />

        <button
          className={classNames(
            'py-2',
            'px-8',
            'rounded-full',
            'border-2',
            'bg-gray-500',
            'border-gray-500',
            'text-gray-100',
            'dark:text-slate-600',
            'dark:border-slate-600',
            'font-bold',
            'w-32',
            {
              // Add valid state
            },
          )}
          disabled
        >
          Save
        </button>
        <button
          className={classNames(
            'py-2',
            'px-8',
            'rounded-full',
            'border-2',
            'border-gray-900',
            'text-gray-900',
            'hover:bg-gray-300',
            'active:bg-gray-400',
            'dark:text-slate-200',
            'dark:border-slate-400',
            'dark:hover:bg-slate-600',
            'dark:active:bg-slate-700',
            'font-bold',
            'w-32',
          )}
        >
          Cancel
        </button>
      </div>
      <div className='flex flex-col'>
        {renderRow({
          id: '1asddfg9d9789df7gdsf9',
          title: 'Feed 1',
          url: 'http://ffff.cc',
        })}
        {renderRow({
          id: '1asddfg9d9789df7gdsf8',
          title: 'Feed 2',
          url: 'http://ffff.cc',
        })}
        {renderRow({
          id: '1asddfg9d9789df7gdsf7',
          title: 'Feed 3',
          url: 'http://ffff.cc',
        })}
      </div>
    </>
  );
};

export default FeedsForm;
