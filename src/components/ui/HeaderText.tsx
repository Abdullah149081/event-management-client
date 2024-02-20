import { cn } from '@/lib/utils';
import { TChildren } from '@/types';

const HeaderText = ({ children, className }: TChildren) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-[701px] text-center  text-lg font-normal leading-[28.80px] text-slate-500',
        className
      )}
    >
      {children}
    </div>
  );
};

export default HeaderText;
