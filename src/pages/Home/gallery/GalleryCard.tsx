import AOS from 'aos';
import { cn } from '@/lib/utils';
import { galleryFlexClassAdd } from '@/utils/galleryClassAdd';
import 'aos/dist/aos.css';

AOS.init();

type GalleryCardProps = {
  item: string;
  children: React.ReactNode;
};

const GalleryCard = ({ children, item }: GalleryCardProps) => {
  const className = galleryFlexClassAdd({ item });
  return (
    <div
      className={cn(
        'flex flex-col gap-[9.08px] md:gap-[11.82px]  xl:gap-4 ',
        className
      )}
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-duration="700"
    >
      {children}
    </div>
  );
};

export default GalleryCard;
