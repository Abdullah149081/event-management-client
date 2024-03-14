import love from '@/assets/icon/icons.svg';
import love1 from '@/assets/icon/icons1.svg';
import love2 from '@/assets/icon/icons2.svg';
import banner from '@/assets/images/banner-1.svg';
import softStar from '@/assets/images/soft-star.svg';
import Star from '@/assets/images/star-6.svg';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import BannerCard from './BannerCard';

const Banner = () => {
  return (
    <Container className="mt-2 md:mt-0">
      <div className="flex flex-col items-center justify-between  xl:flex-row ">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8  xl:h-[422px] xl:w-[576px]">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-2xl font-extrabold  uppercase text-black md:text-[64px] md:leading-[70.40px] xl:w-[540px]">
              Brand New event Packages
            </div>
            <div className=" bg-gradient-to-r from-[#FE8900] from-40% to-[#5A01CB] to-60% bg-clip-text text-[20px] font-extrabold text-transparent md:text-[56px] md:leading-[61.60px]">
              For Winter
            </div>
          </div>
          <div className="w-[322px]  text-sm font-normal leading-snug  text-zinc-800  md:w-[576px]   md:text-xl">
            Event 360 Uniting communities through unforgettable experiences.
            Explore, connect, and celebrate with us. Your journey to
            extraordinary events starts here.
          </div>
          <Button className="rounded-none px-10 py-6 xl:w-[195px]">
            Explore
          </Button>
        </div>

        <div className="relative mt-5 flex items-center justify-center rounded-[800px] border border-black md:mt-0 xl:h-[754px] xl:w-[584px]">
          <img
            className="rounded-[600px] p-10 xl:h-[651px] xl:w-[484px] xl:p-0"
            src={banner}
            alt=""
          />
          <div className="absolute left-[calc(100%-98%)] top-16 z-0 ">
            <img src={Star} alt="" className="size-10 md:size-full" />
          </div>
          <div className="absolute bottom-[calc(100%-92%)] right-8 z-0 md:bottom-0 md:right-0">
            <img src={softStar} alt="" className="size-10 md:size-full" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex  flex-col items-center gap-5 md:flex-row xl:-mt-10">
        <BannerCard>
          <img src={love} alt="love" />
          <p>
            Immersive Engage in vibrant experiences that resonate long after.
          </p>
        </BannerCard>
        <BannerCard className="bg-[#F2C94C]">
          <img src={love1} alt="love1" />
          <p>
            Dynamic Explore diverse events igniting your passion and curiosity.
          </p>
        </BannerCard>
        <BannerCard className="bg-[#8AB2DC]">
          <img src={love2} alt="love2" />
          <p>
            Lasting memories, vibrant experiences, and inclusive gatherings
            await you.
          </p>
        </BannerCard>
      </div>
    </Container>
  );
};

export default Banner;
