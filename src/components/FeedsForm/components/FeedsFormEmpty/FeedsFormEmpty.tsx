import WateringPlantIllustration from './WateringPlantIllustration';

const FeedsFormEmpty = () => {
  return (
    <div className='w-full py-24'>
      <div className='flex mx-auto'>
        <div className='shrink-1'>
          <WateringPlantIllustration />
        </div>
        <div>
          <p className='text-5xl font-bold text-gray-800 mt-10 mb-4 dark:text-slate-200'>Your feeds list is empty</p>
          <p className='text-xl text-gray-400'>
            Grow your dashboard by filling up with Upwork feeds interesting to you
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedsFormEmpty;
