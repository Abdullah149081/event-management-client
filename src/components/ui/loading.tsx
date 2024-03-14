import { cn } from '@/lib/utils';

const Loading = ({ error }: { error?: boolean }) => {
  return (
    <div className="flex  items-center justify-center gap-1 font-plus text-4xl font-black uppercase tracking-wider">
      <p className=" ">L</p>
      <div
        className={cn(
          ' size-10 animate-spin rounded-full border-[5px] border-dashed border-primary',
          error && 'border-red-500'
        )}
      />
      <p className="">ading</p>

      <p className={cn('text-primary', error && 'text-red-500')}>
        <span className="animate-fade animate-delay-[1ms] animate-reverse animate-fill-both animate-infinite animate-ease-in">
          .
        </span>
        <span className="animate-fade animate-delay-[2ms]  animate-infinite animate-ease-in ">
          .
        </span>
        <span className="animate-fade animate-delay-[3ms] animate-infinite animate-ease-in ">
          .
        </span>
      </p>
    </div>
  );
};

export default Loading;
