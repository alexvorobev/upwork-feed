import { FC } from 'react';

interface Props {
  size?: number;
}

const DEFAULT_SIZE = 16;

const EditIcon: FC<Props> = ({ size = DEFAULT_SIZE }) => (
  <svg width={size} height={size} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g clip-path='url(#clip0_50_12464)'>
      <path d='M11.5 5.5L10.5 13.5H3.5L2.5 5.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M1 3.5H13' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M4.46 3.20998V1.47998C4.46 1.21476 4.56536 0.96041 4.75289 0.772874C4.94043 0.585337 5.19478 0.47998 5.46 0.47998H8.46C8.72522 0.47998 8.97957 0.585337 9.16711 0.772874C9.35464 0.96041 9.46 1.21476 9.46 1.47998V3.47998'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_50_12464'>
        <rect width='14' height='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default EditIcon;
