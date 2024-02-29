import { checkIcon } from '@/assets/icon';
import { cn } from '@/lib/utils';

type FeaturesProps = {
  feature: {
    text: string;
    value: boolean;
  };
};

const Features = ({ feature }: FeaturesProps) => {
  const { text, value } = feature || {};
  return (
    <div className="inline-flex max-w-[360px] flex-col items-start justify-center gap-5 pt-5">
      <div
        className={cn(
          'inline-flex items-start justify-start gap-3',
          !value && 'opacity-30'
        )}
      >
        <div className="flex items-start justify-start gap-2.5 rounded-[100px] bg-green-100 p-[5px]">
          <div className="flex size-[14px] items-center justify-center">
            <img
              src={checkIcon}
              alt="checkIcon"
              className="relative size-[14px]"
            />
          </div>
        </div>
        <div
          className={cn(
            'text-base  font-normal leading-normal text-slate-600 lg:w-[324px]',
            !value && ' font-light  line-through'
          )}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Features;