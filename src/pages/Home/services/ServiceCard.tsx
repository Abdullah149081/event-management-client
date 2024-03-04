import check from '@/assets/icon/fi-check.svg';
import { Button } from '@/components/ui/button';

const ServiceCard = () => {
  return (
    <div className="group relative">
      <div className="  inline-flex   max-w-[412px] flex-col items-start justify-start gap-6 rounded-md bg-black bg-opacity-5 px-[25px] pb-[30px] pt-[25px] group-hover:bg-transparent ">
        {/* card  */}
        <div className="  group-hover:opacity-0  ">
          <img
            className="h-[221.20px] w-[316.50px] rounded-md object-cover  md:h-[187.17px] md:w-[267.81px] xl:h-[253px] xl:w-[362px]"
            src="https://via.placeholder.com/362x253"
            alt=""
          />
          <div className="mt-6 inline-flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex h-[35px] flex-col items-start justify-start gap-2 self-stretch">
              <div className="text-center   text-[27.98px] font-extrabold  leading-[30.78px]  text-black  md:text-2xl md:leading-relaxed  xl:text-[32px] xl:leading-9">
                Corporate event
              </div>
            </div>
            <div className="mt-3 flex flex-col items-start justify-start gap-4">
              <div className="inline-flex items-center justify-start gap-[18px]">
                <div className="relative h-5 w-5">
                  <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-white" />
                  <img
                    src={check}
                    className="absolute left-[5px] top-[5px] "
                    alt="check"
                  />
                </div>
                <div className="font-plus  text-base font-normal leading-normal text-black md:text-sm md:leading-tight xl:text-lg xl:leading-[27px]">
                  One day pas access all lecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hover */}
      <div className=" absolute  top-0 z-10 transform rounded-md  bg-blue-500/40 px-4  py-8 opacity-0   shadow transition duration-500 ease-in-out group-hover:opacity-100 md:w-[304.80px] xl:w-[412px] xl:bg-blue-500/5 xl:pl-7">
        <div className=" inline-flex flex-col items-start justify-start gap-3">
          <div className="flex h-[35px] flex-col items-start justify-start gap-2 self-stretch">
            <div className=" text-center  text-[27.98px] font-extrabold  leading-[30.78px] text-black md:text-2xl md:leading-relaxed  xl:text-[32px]  xl:leading-9">
              Wedding event
            </div>
          </div>
          <div className=" max-w-[342px]  text-sm  leading-snug   tracking-wide  text-slate-500 md:text-xs md:leading-[18.94px] xl:text-base xl:leading-relaxed">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies.Ut posuere felis
            arcu tellus tempus in in ultricies. Ut posuere felis arcu tellus
            tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices
            faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus
            tempus in in ultricies.Ut posuere felis arcu tellus tempus in in
            ultricies.
          </div>
        </div>
        <div className="mt-8  inline-flex flex-col items-start justify-start gap-4 ">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="inline-flex items-center justify-start gap-[18px]">
              <div className="relative h-5 w-5">
                <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-white" />
                <img
                  src={check}
                  alt="check"
                  className="absolute left-[5px] top-[5px] h-2.5 w-2.5"
                />
              </div>
              <div className=" font-plus  text-base font-normal leading-normal text-black md:text-sm md:leading-tight xl:text-lg xl:leading-[27px]">
                One day pas access all lecture
              </div>
            </div>
          </div>
        </div>
        <Button className="mt-12  inline-flex h-[52px] w-[310.88px] items-center justify-center gap-2.5 rounded-none bg-blue-600  py-6 font-bold md:w-[265.59px]  xl:w-[340px]">
          Check it out
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
