import { cn } from '@/lib/utils';
import { TChildren } from '@/types';

const BannerCard = ({ children, className }: TChildren) => {
  return (
    <div className=" flex h-[194px] w-56 flex-col items-start justify-start gap-2 rounded-[32px] border-2  border-white px-4 py-6">
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="flex items-center justify-start gap-[194px]">
          <div className="relative h-12 w-12">
            <div
              className={cn(
                'absolute left-0 top-0 h-12 w-12 rounded-full bg-indigo-500 bg-opacity-30',
                className
              )}
            />
            <div className="absolute left-[12px] top-[12px] h-6 w-6">
              {(children as React.ReactNode[])[0]}
            </div>
          </div>
        </div>
        <div className="w-48 font-lato text-base font-light leading-snug text-zinc-800">
          {(children as React.ReactNode[])[1]}
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
