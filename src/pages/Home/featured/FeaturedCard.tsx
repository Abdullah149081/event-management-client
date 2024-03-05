import { Button } from '@/components/ui/button';

const FeaturedCard = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white/20 px-4 py-10  shadow">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="">
          <img
            src="https://via.placeholder.com/85x85"
            alt=""
            className=" size-[70.5px] rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center  font-plus font-bold text-[#39364f] md:text-[20px]">
            GCEDIM | Posgrados y Educación Continua
          </h2>
          <p className="text-lg text-[#6f7287]">9722 followers</p>
        </div>
      </div>
      <div className="mt-2 xl:mt-10">
        <Button className="w-[105.312px] font-plus">Follow</Button>
      </div>
    </div>
  );
};

export default FeaturedCard;
