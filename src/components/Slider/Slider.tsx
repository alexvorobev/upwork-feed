import { Children, FC, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss'; // core Swiper
import { WithChildren } from 'types/WithChildren';

const Slider: FC<WithChildren> = ({ children }) => {
  const slides = useMemo(
    () => Children.map(children, (child) => <SwiperSlide className='!w-30'>{child}</SwiperSlide>) || [],
    [children],
  );

  return (
    <Swiper spaceBetween={26} slidesPerView='auto' className='!overflow-visible'>
      {slides}
    </Swiper>
  );
};

export default Slider;
