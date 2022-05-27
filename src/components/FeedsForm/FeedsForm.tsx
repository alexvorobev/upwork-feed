import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import IntervalSelector from 'components/IntervalSelector';
import { FeedData, PERIOD } from 'controllers/urls/types';
import DeleteIcon from 'icons/DeleteIcon';
import EditIcon from 'icons/EditIcon';
import useUrls from 'controllers/urls/useUrls';

import FeedsFormEmpty from './components/FeedsFormEmpty';

const URL_REGEXP = /^(http|https):\/\/www.upwork.com[^ "]+$/;

const rowActionClasses = classNames(
  'p-2',
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

const inputClasses = classNames(
  'py-2',
  'px-4',
  'rounded-full',
  'dark:ring-2',
  'dark:ring-slate-400',
  'dark:bg-transparent',
  'dark:text-white',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-gray-300',
  'dark:focus:ring-slate-300',
);

const FeedsForm = () => {
  const [editingID, setEditingID] = useState<string | null>();
  const { register, handleSubmit, watch, reset, setValue } = useForm<Omit<FeedData, 'id' | 'period'>>();
  const formDataTitle = watch('title') || '';
  const formDataURL = watch('url');
  const isValidURL = useMemo(() => URL_REGEXP.test(formDataURL), [formDataURL]);
  const isValidForm = useMemo(() => formDataTitle?.length > 3 && isValidURL, [formDataTitle?.length, isValidURL]);
  const { list, push, update } = useUrls();
  const editingItem = useMemo(() => list.find(({ id }) => id === editingID), [editingID, list]);

  // On editing
  useEffect(() => {
    if (editingID) {
      const item = list.find(({ id }) => id === editingID);
      if (item) {
        setValue('title', item.title);
        setValue('url', item.url);
      }
    }
  }, [editingID, list, setValue]);

  const renderRow = ({ title, url, id, period }: FeedData) => (
    <div
      key={id}
      className='flex p-4 pl-8 items-center gap-4 border-2 border-transparent hover:border-gray-100 rounded-full dark:hover:border-slate-800'
    >
      <p className='w-52 shrink-0 font-bold w-32 overflow-hidden text-ellipsis whitespace-nowrap text-gray-700 dark:text-slate-300'>
        {title}
      </p>
      <p className='w-full shrink-1 h-6 overflow-hidden text-ellipsis whitespace-nowrap text-gray-400 dark:text-slate-500'>
        {url}
      </p>
      <IntervalSelector
        value={period}
        onChange={(newPeriod: PERIOD) => update({ title, url, id, period: newPeriod }, true)}
      />
      <div className='shrink-0 flex gap-4'>
        <button className={rowActionClasses} onClick={() => setEditingID(id)}>
          <EditIcon />
        </button>
        <button className={rowActionClasses} onClick={() => console.log('Remove', id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );

  const onSubmit = useCallback(
    ({ title, url }: Omit<FeedData, 'id' | 'period'>) => {
      if (isValidForm) {
        if (editingItem) {
          update({
            ...editingItem,
            title,
            url,
          });
          setEditingID(null);
        } else {
          push({
            title,
            url,
          });
        }
        reset();
      }
    },
    [editingItem, isValidForm, push, reset, update],
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-gray-100 dark:bg-slate-800 w-full p-4 flex gap-4 mb-8 rounded-full'>
          <input placeholder='Title' autoComplete='off' type='text' className={inputClasses} {...register('title')} />
          <input
            placeholder='URL'
            autoComplete='off'
            type='text'
            className={classNames('w-full', inputClasses)}
            {...register('url')}
          />
          <button
            type='submit'
            className={classNames(
              'py-2',
              'px-8',
              'rounded-full',
              'bg-slate-900',
              'border-gray-500',
              'text-gray-100',
              'dark:text-slate-900',
              'dark:border-slate-200',
              'dark:bg-slate-200',
              'dark:hover:bg-slate-100',
              'font-bold',
              'w-32',
              'dark:disabled:text-slate-600',
              'dark:disabled:bg-slate-700',
              'disabled:bg-slate-500',
              'disabled:cursor-not-allowed',
            )}
            disabled={!isValidForm}
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
            onClick={() => reset()}
          >
            Cancel
          </button>
        </div>
      </form>
      <div className='flex flex-col'>{list.map(renderRow)}</div>
      {list.length === 0 && <FeedsFormEmpty />}
    </>
  );
};

export default FeedsForm;
