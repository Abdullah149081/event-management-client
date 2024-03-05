import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import RecentImage from './RecentImage';

const Recent = () => {
  return (
    <Container className="flex flex-col-reverse items-center gap-10 pb-16 xl:flex-row xl:gap-[107px] xl:pb-32">
      <div className=" flex flex-1 flex-col items-start justify-start gap-5">
        <div className="relative flex flex-col items-start justify-start gap-5 md:flex-row ">
          <div className="absolute right-0 -z-10 h-full w-[300px]  rounded-full bg-pink-500/25 blur-[244px] md:left-0 md:h-[650px] md:w-[500px] md:rotate-[40.34deg] xl:h-[1017.96px]   xl:w-[749.95px]" />
          <RecentImage
            src="https://via.placeholder.com/190x190"
            className="rounded-[26.34px]"
          />
          <RecentImage
            src="https://via.placeholder.com/190x190"
            className="rounded-[26.21px]"
          />
          <RecentImage
            src="https://via.placeholder.com/190x190"
            className="rounded-[114px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-5 md:flex-row">
          <RecentImage
            src="https://via.placeholder.com/190x190"
            className="rounded-[114px]"
          />
          <RecentImage
            src="https://via.placeholder.com/190x190"
            className="rounded-[26.07px]"
          />
          <RecentImage
            src="https://via.placeholder.com/190x190"
            className="rounded-[26.21px]"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center  xl:items-start xl:justify-start xl:gap-12">
        <div className="flex h-[152px] flex-col gap-6 xl:items-start xl:justify-start">
          <div className="flex flex-col items-center justify-start  gap-2">
            <div className="text-center  text-[32px]  font-extrabold  leading-9 text-black  md:text-[39.82px] md:leading-[43.80px] xl:text-[64px] xl:leading-[70.40px]">
              Recent Events
            </div>
          </div>
          <div className="w-[295px] text-center  text-sm font-normal leading-snug  text-slate-500 md:w-[640px] md:text-lg  md:leading-[28.80px] xl:w-full xl:self-stretch xl:text-start">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </div>
        </div>
        <Button className="  w-[174px] rounded-none bg-blue-600 px-10 py-6 font-plus font-bold">
          Learn more
        </Button>
      </div>
    </Container>
  );
};

export default Recent;
