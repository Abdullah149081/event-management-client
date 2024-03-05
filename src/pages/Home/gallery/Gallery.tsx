import { checkIcon } from '@/assets/icon';
import Container from '@/components/ui/Container';
import GalleryCard from './GalleryCard';
import ImageGallery from './ImageGallery';

const Gallery = () => {
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
          <div className=" text-sm  font-normal leading-snug text-slate-500 md:w-[385.58px] md:text-sm md:leading-snug   xl:w-[522px] xl:text-lg xl:leading-[28.80px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="flex items-center justify-start gap-[18px]">
                <div className="relative h-5 w-5">
                  <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-black bg-opacity-10" />
                  <img
                    alt="check icon"
                    src={checkIcon}
                    className="absolute left-[5px] top-[5px] size-[10px]"
                  />
                </div>
                <div className="font-plus font-normal  text-black md:text-sm md:leading-tight xl:text-lg xl:leading-[27px]">
                  One day pas access all lecture
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-[9.08px]  md:gap-[11.82px] xl:gap-4">
          {/* 1 */}
          <GalleryCard item="1">
            <ImageGallery img="1" src="https://via.placeholder.com/128x192" />
            <ImageGallery img="2" src="https://via.placeholder.com/172x258" />
          </GalleryCard>

          {/* 2 */}
          <GalleryCard item="2">
            <ImageGallery img="3" src="https://via.placeholder.com/128x212" />
            <ImageGallery img="4" src="https://via.placeholder.com/128x215" />
            <ImageGallery img="5" src="https://via.placeholder.com/128x160" />
          </GalleryCard>
          {/* 3  */}
          <GalleryCard item="3">
            <ImageGallery img="6" src="https://via.placeholder.com/128x171" />
            <ImageGallery img="7" src="https://via.placeholder.com/128x172" />
            <ImageGallery img="8" src="https://via.placeholder.com/128x192" />
          </GalleryCard>
          {/* 4 */}
          <GalleryCard item="4">
            <ImageGallery img="9" src="https://via.placeholder.com/160x255" />
            <ImageGallery img="10" src="https://via.placeholder.com/128x165" />
          </GalleryCard>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
