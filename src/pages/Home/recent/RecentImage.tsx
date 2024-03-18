import { cn } from '@/lib/utils';

type RecentImageProps = {
  src: string;
  className?: string;
};

const RecentImage = ({ src, className }: RecentImageProps) => {
  return (
    <img
      className={cn('h-[190px] w-[190px] object-cover ', className)}
      src={src}
      alt="Recent-Events-"
    />
  );
};

export default RecentImage;
