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
    <Container>
      <div className="flex flex-col items-center justify-between  xl:flex-row">
        <div className="inline-flex flex-col items-start justify-start gap-8 xl:h-[422px] xl:w-[576px]">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-[64px]  font-extrabold uppercase leading-[70.40px] text-black xl:w-[540px]">
              Brand New event Packages
            </div>
            <div className=" bg-gradient-to-r from-[#FE8900] from-40% to-[#5A01CB] to-60% bg-clip-text text-[56px] font-extrabold leading-[61.60px] text-transparent">
              For Winter
            </div>
          </div>
          <div className="text-xl  text-zinc-800   xl:w-[576px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non.
          </div>
          <Button className="rounded-none px-10 py-6 xl:w-[195px]">
            Explore
          </Button>
        </div>

        <div className="relative flex items-center justify-center rounded-[800px] border border-black xl:h-[754px] xl:w-[584px]">
          <img
            className="rounded-[600px] p-10 xl:h-[651px] xl:w-[484px] xl:p-0"
            src={banner}
            alt=""
          />
          <div className="absolute left-0 top-16 z-0">
            <img src={Star} alt="" />
          </div>
          <div className="absolute bottom-0 right-0 z-0">
            <img src={softStar} alt="" />
          </div>
        </div>
      </div>
      <div className="-mt-10 flex flex-col gap-5 xl:flex-row">
        <BannerCard>
          <img src={love} alt="love" />
        </BannerCard>
        <BannerCard className="bg-[#F2C94C]">
          <img src={love1} alt="love1" />
        </BannerCard>
        <BannerCard className="bg-[#8AB2DC]">
          <img src={love2} alt="love2" />
        </BannerCard>
      </div>
    </Container>
  );
};

export default Banner;
