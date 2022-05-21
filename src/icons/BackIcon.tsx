import { FC } from 'react';

interface Props {
  size?: number;
}

const DEFAULT_SIZE = 16;

const BackIcon: FC<Props> = ({ size = DEFAULT_SIZE }) => (
  <svg width={size} height={size} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_17_93)'>
      <path d='M14 7.5H1' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4.5 4L1 7.5L4.5 11' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
    </g>
    <defs>
      <clipPath id='clip0_17_93'>
        <rect width='14' height='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default BackIcon;
