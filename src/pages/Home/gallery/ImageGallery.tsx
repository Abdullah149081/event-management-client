import { cn } from '@/lib/utils';
import { galleryImgClassAdd } from '@/utils/galleryClassAdd';

type ImageGalleryProps = {
  src: string;
  img: string;
};

const ImageGallery = ({ src, img }: ImageGalleryProps) => {
  const className = galleryImgClassAdd({ img });

  return (
    <img
      className={cn(
        'rounded-[2.84px] object-cover shadow md:rounded-[5px]',
        className
      )}
      src={src}
      alt=""
    />
  );
};

export default ImageGallery;
