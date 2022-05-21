import { FC } from 'react';

interface Props {
  size?: number;
}

const DEFAULT_SIZE = 16;

const LightModeIcon: FC<Props> = ({ size = DEFAULT_SIZE }) => (
  <svg width={size} height={size} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.5 7L11.16 8.72L11.6 11.6L8.72 11.16L7 13.5L5.28 11.16L2.4 11.6L2.84 8.72L0.5 7L2.84 5.28L2.4 2.4L5.28 2.84L7 0.5L8.72 2.84L11.6 2.4L11.16 5.28L13.5 7Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default LightModeIcon;
