import { PERIOD } from '../types';

const MILLISECONDS = 60000;

const getNextDate = (period: PERIOD) => {
  const currentDate = new Date();

  return new Date(currentDate.getTime() + period * MILLISECONDS);
};

export default getNextDate;
