import classNames from 'classnames';
import { FC, useCallback, useEffect, useState } from 'react';

import { PERIOD } from 'controllers/urls/types';

interface Props {
  value?: PERIOD;
  onChange?: (selected: PERIOD) => void;
}

const IntervalSelector: FC<Props> = ({ value = PERIOD.ONE, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const normalOptionClasses = classNames(
    'shrink-0',
    'w-1/4',
    'rounded-full',
    'font-semibold',
    'flex',
    'items-center',
    'cursor-pointer',
    'justify-center',
    'text-gray-900',
    'hover:text-slate-800',
    'dark:text-white',
  );

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const activeOptionClasses = classNames('bg-white', 'drop-shadow-sm', 'hover:text-gray-900', 'dark:bg-slate-700');

  const getOptionClasses = (optionPeriod: PERIOD) =>
    classNames(normalOptionClasses, {
      [`${activeOptionClasses}`]: optionPeriod === currentValue,
    });

  const onChangeHandler = useCallback(
    (selectedPeriod: PERIOD) => {
      setCurrentValue(selectedPeriod);
      onChange?.(selectedPeriod);
    },
    [onChange],
  );

  return (
    <div className='w-80 flex shrink-0 p-1 rounded-full bg-gray-100 h-12 dark:bg-slate-800'>
      <div className={getOptionClasses(PERIOD.ONE)} onClick={() => onChangeHandler(PERIOD.ONE)}>
        1 min
      </div>
      <div className={getOptionClasses(PERIOD.FIVE)} onClick={() => onChangeHandler(PERIOD.FIVE)}>
        5 min
      </div>
      <div className={getOptionClasses(PERIOD.TEN)} onClick={() => onChangeHandler(PERIOD.TEN)}>
        10 min
      </div>
      <div className={getOptionClasses(PERIOD.THIRTY)} onClick={() => onChangeHandler(PERIOD.THIRTY)}>
        30 min
      </div>
    </div>
  );
};

export default IntervalSelector;
