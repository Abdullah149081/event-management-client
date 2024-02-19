import check from '@/assets/icon/fi-check.svg';
import { Button } from '@/components/ui/button';

const ServiceCard = () => {
  return (
    <div className="group relative">
      <div className="  inline-flex   max-w-[412px] flex-col items-start justify-start gap-6 rounded-md bg-black bg-opacity-5 px-[25px] pb-[30px] pt-[25px] group-hover:bg-transparent ">
        {/* card  */}
        <div className="  group-hover:opacity-0  ">
          <img
            className="h-[253px] w-[362px] rounded-md"
            src="https://via.placeholder.com/362x253"
          />
          <div className="mt-6 inline-flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex h-[35px] flex-col items-start justify-start gap-2 self-stretch">
              <div className="text-center  text-[32px] font-extrabold leading-9 text-black">
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
                <div className="font-plus text-lg font-normal leading-[27px] text-black">
                  One day pas access all lecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hover */}
      <div className=" absolute top-0  z-10 max-w-[412px]  transform rounded-md    bg-blue-500/30 px-7 py-8 opacity-0 transition duration-500 ease-in-out group-hover:opacity-100 xl:bg-blue-500/5">
        <div className=" inline-flex flex-col items-start justify-start gap-3">
          <div className="flex h-[35px] flex-col items-start justify-start gap-2 self-stretch">
            <div className="text-center  text-[32px] font-extrabold leading-9 text-black">
              Wedding event
            </div>
          </div>
          <div className="max-w-[342px]    leading-relaxed tracking-wide text-slate-500">
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
              <div className="font-plus text-lg  leading-[27px] text-black">
                One day pas access all lecture
              </div>
            </div>
          </div>
        </div>
        <Button className="mt-12 inline-flex h-[52px] w-[359px] items-center justify-center gap-2.5 rounded-none bg-blue-600 px-10 py-6 font-bold">
          Check it out
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
