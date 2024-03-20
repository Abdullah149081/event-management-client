import { arrowRightIcon } from '@/assets/icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TPlan } from '@/types';
import Features from './Features';

type PricingCardProps = {
  plan: TPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
  const { name, price, icon, features, description } = plan || {};

  return (
    <div className="relative py-[28px]   font-inter">
      {name === 'Premium' && (
        <div className="absolute top-0  w-full">
          <div className="  mx-auto flex w-1/2 flex-col items-center justify-center gap-2.5 rounded-tl-xl rounded-tr-xl bg-blue-600 px-4 py-[9px]">
            <div className="text-right font-['Inter'] text-sm font-medium uppercase leading-[14px] tracking-tight text-white">
              Recommended
            </div>
          </div>
        </div>
      )}
      <div className="relative h-full rounded-[20px] bg-white px-8 py-7 shadow">
        <div className="absolute left-0 top-0 w-full    ">
          <div
            className={cn(
              'mx-auto h-[5.8px] w-[calc(100%-10px)] rounded-t-[20px]  bg-pink-400 ',
              name === 'Premium' && 'bg-blue-600',
              name === 'Business' && 'bg-red-500'
            )}
          />
        </div>

        <div className="flex h-20  items-center justify-between">
          <div
            className={cn(
              'flex items-start justify-start gap-2.5 rounded-lg bg-pink-50 p-5',
              name === 'Premium' && 'bg-blue-50',
              name === 'Business' && 'bg-red-50'
            )}
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <img src={icon} alt={name} className="relative h-10 w-10" />
            </div>
          </div>
          <div className="flex items-end justify-center">
            <div
              className={cn(
                'text-center font-inter text-5xl font-bold leading-[56px] text-pink-400',
                name === 'Premium' && 'text-blue-600',
                name === 'Business' && 'text-red-500'
              )}
            >
              ${price}
            </div>
          </div>
        </div>
        {/* name  */}
        <div className="mt-7 max-w-[360px] ">
          <div className=" text-2xl font-semibold leading-loose text-slate-900">
            {name}
          </div>
          <div className="  text-base font-normal leading-normal text-slate-600">
            {description}
          </div>
        </div>
        {/* button  */}
        <Button
          type="button"
          className="mt-8 flex h-12 max-w-[237px] items-center justify-center gap-3 rounded-[7px] border border-blue-600 bg-white px-8 text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <span className="  text-base font-bold capitalize leading-[48px] ">
            Get this package
          </span>
          <figure className="flex h-6 w-6 items-center justify-center">
            <img src={arrowRightIcon} alt="icon" className="relative h-6 w-6" />
          </figure>
        </Button>
        {/* features  */}
        <ul className="mt-14">
          {features?.map((feature, index) => (
            <Features key={index} feature={feature} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
