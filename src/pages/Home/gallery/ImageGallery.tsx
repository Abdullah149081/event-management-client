import { cn } from '@/lib/utils';
import { galleryImgClassAdd } from '@/utils/galleryClassAdd';

type ImageGalleryProps = {
  src: string;
  img: string;
};

const ImageGallery = ({ src, img }: ImageGalleryProps) => {
  const className = galleryImgClassAdd({ img });

  return (
    <img className={cn('rounded-[5px] shadow', className)} src={src} alt="" />
  );
};

export default ImageGallery;
