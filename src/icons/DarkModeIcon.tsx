import { FC } from 'react';

interface Props {
  size?: number;
}

const DEFAULT_SIZE = 16;

const DarkModeIcon: FC<Props> = ({ size = DEFAULT_SIZE }) => (
  <svg width={size} height={size} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 10.48C10.8383 10.4729 9.69946 10.157 8.70014 9.56463C7.70083 8.97228 6.87703 8.12482 6.31321 7.10913C5.7494 6.09345 5.46585 4.94609 5.49164 3.78469C5.51743 2.6233 5.85164 1.48965 6.45999 0.5C4.85717 0.781382 3.41649 1.64934 2.41859 2.9348C1.42069 4.22026 0.937035 5.83116 1.06185 7.4537C1.18666 9.07624 1.91099 10.5942 3.09375 11.7119C4.27651 12.8297 5.83299 13.4671 7.45999 13.5C8.57312 13.5028 9.66809 13.218 10.6387 12.6731C11.6094 12.1282 12.4228 11.3418 13 10.39C12.6693 10.4446 12.3351 10.4747 12 10.48V10.48Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default DarkModeIcon;
