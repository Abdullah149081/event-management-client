import { cn } from '@/lib/utils';
import { galleryFlexClassAdd } from '@/utils/galleryClassAdd';

type GalleryCardProps = {
  item: string;
  children: React.ReactNode;
};

const GalleryCard = ({ children, item }: GalleryCardProps) => {
  const className = galleryFlexClassAdd({ item });
  return (
    <div className={cn('flex flex-col  gap-4 ', className)}>{children}</div>
  );
};

export default GalleryCard;