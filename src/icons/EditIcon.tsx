import { FC } from 'react';

interface Props {
  size?: number;
}

const DEFAULT_SIZE = 16;

const EditIcon: FC<Props> = ({ size = DEFAULT_SIZE }) => (
  <svg width={size} height={size} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5 12.2399L0.5 13.4999L1.76 8.9999L10 0.799899C10.0931 0.704653 10.2044 0.628974 10.3271 0.577306C10.4499 0.525639 10.5818 0.499023 10.715 0.499023C10.8482 0.499023 10.9801 0.525639 11.1029 0.577306C11.2256 0.628974 11.3369 0.704653 11.43 0.799899L13.2 2.5799C13.2937 2.67286 13.3681 2.78346 13.4189 2.90532C13.4697 3.02718 13.4958 3.15789 13.4958 3.2899C13.4958 3.42191 13.4697 3.55262 13.4189 3.67448C13.3681 3.79633 13.2937 3.90694 13.2 3.9999L5 12.2399Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default EditIcon;
