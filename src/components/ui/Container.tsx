import { cn } from '@/lib/utils';
import { TChildren } from '@/types';

function Container({ children, className }: TChildren): JSX.Element {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 xl:px-0', className)}>
      {children}
    </div>
  );
}

export default Container;
