import { cn } from '@/lib/utils';
import { TChildren } from '@/types';

const HeaderTitle = ({ children, className }: TChildren) => {
  return (
    <div className="mt-20">
      <h1
        className={cn(
          "text-black'  text-center  text-[32px]  font-extrabold capitalize leading-9 md:leading-normal  lg:text-[64px]",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export default HeaderTitle;
