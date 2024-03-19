import Container from '@/components/ui/Container';
import Loading from '@/components/ui/loading';

import { useEvents, useRecent, useServices } from '@/hooks';
import ServicesItems from '../services/ServicesItems';
import GalleryCard from './GalleryCard';
import ImageGallery from './ImageGallery';

const Gallery = () => {
  const { eventData, isLoading, isError } = useEvents('');
  const { recentData, isLoading: recentLoading } = useRecent('');
  const { servicesData, isLoading: servicesLoading } = useServices('');

  if (isLoading || recentLoading || servicesLoading) return <Loading />;
  if (isError) return <Loading error />;

  return (
    <Container className="pb-16 xl:pb-28 ">
      <div className="flex flex-col items-center justify-start gap-[78px]   md:gap-[88.64px] lg:flex-row xl:gap-[120px]">
        <div className="flex flex-col items-start justify-start gap-[30px] md:gap-[25.85px] xl:gap-[35px] ">
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="flex h-[35px] flex-col items-start justify-start gap-2 self-stretch  md:h-[70px]">
              <div className="text-center  text-[32px] font-extrabold leading-9 text-black md:text-5xl md:leading-[52px] xl:text-[64px] xl:leading-[70.40px]">
                Gallery
              </div>
            </div>
          </div>
          <p className=" text-sm  font-normal leading-snug text-slate-500 md:w-[385.58px] md:text-sm md:leading-snug   xl:w-[522px] xl:text-lg xl:leading-[28.80px]">
            {servicesData[0]?.description}
          </p>
          <ul className="mt-3 flex flex-col items-start justify-start gap-4 ">
            {servicesData[0]?.services.map((item, index) => (
              <ServicesItems
                key={index}
                service={item}
                className="bg-black/10"
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-start gap-[9.08px]  md:gap-[11.82px] xl:gap-4">
          {/* 1 */}
          <GalleryCard item="1">
            <ImageGallery img="1" src={servicesData[0].img} />
            <ImageGallery img="2" src={servicesData[1].img} />
          </GalleryCard>

          {/* 2 */}
          <GalleryCard item="2">
            <ImageGallery img="3" src={servicesData[2].img} />
            <ImageGallery img="4" src={eventData[0].img} />
            <ImageGallery img="5" src={eventData[1].img} />
          </GalleryCard>
          {/* 3  */}
          <GalleryCard item="3">
            <ImageGallery img="6" src={recentData[0].img} />
            <ImageGallery img="7" src={eventData[2].img} />
            <ImageGallery img="8" src={eventData[3].img} />
          </GalleryCard>
          {/* 4 */}
          <GalleryCard item="4">
            <ImageGallery img="9" src={eventData[4].img} />
            <ImageGallery img="10" src={eventData[5].img} />
          </GalleryCard>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
