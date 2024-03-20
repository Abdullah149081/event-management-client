import check from '@/assets/icon/fi-check.svg';
import { cn } from '@/lib/utils';
import { TService } from '@/types';

type ServiceItemsProps = {
  service: TService['services'][0];
  className?: string;
};

const ServicesItems = ({ service, className }: ServiceItemsProps) => {
  return (
    <div className="flex items-center justify-start gap-[18px]">
      <div className="relative h-5 w-5">
        <div
          className={cn(
            'absolute left-0 top-0 h-5 w-5 rounded-full bg-white',
            className
          )}
        />
        <img
          src={check}
          className="absolute left-[5px] top-[5px] "
          alt="check"
        />
      </div>
      <li className="font-plus  text-base font-normal capitalize leading-normal text-black md:text-sm md:leading-tight xl:text-lg xl:leading-[27px]">
        {service.label.charAt(0).toLocaleUpperCase() +
          service.label.slice(1).toLowerCase()}
      </li>
    </div>
  );
};

export default ServicesItems;
