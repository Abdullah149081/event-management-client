import { Button } from '@/components/ui/button';
import { TService } from '@/types';
import ServicesItems from './ServicesItems';

type ServiceCardProps = {
  service: TService;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { name, img, description, services } = service || {};

  return (
    <div className="group relative">
      <div className=" flex h-full   max-w-[412px] flex-col items-start justify-start gap-6 rounded-md bg-black bg-opacity-5 px-[25px] pb-[30px] pt-[25px] group-hover:bg-transparent ">
        {/* card  */}
        <div className="transition duration-300  ease-in-out group-hover:opacity-0">
          <img
            className="h-[221.20px] w-[316.50px] rounded-md object-cover  md:h-[187.17px] md:w-[267.81px] xl:h-[253px] xl:w-[362px]"
            src={img}
            alt=""
          />
          <div className="mt-6 flex flex-col items-start justify-start gap-3 self-stretch">
            <div className="flex  flex-col items-start justify-start gap-2 self-stretch">
              <h2 className="text-center text-[27.98px]  font-extrabold capitalize  leading-[30.78px]  text-black  md:text-2xl md:leading-relaxed  xl:text-[32px] xl:leading-9">
                {name.charAt(0).toLocaleUpperCase() +
                  name.slice(1).toLowerCase()}
              </h2>
            </div>
            <ul className="mt-3 flex flex-col items-start justify-start gap-4 ">
              {services?.map((item, index) => (
                <ServicesItems key={index} service={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* hover */}
      <div className=" absolute top-0  z-20 rounded-md  bg-blue-500/40  px-4 py-8  opacity-0 shadow   group-hover:transform  group-hover:animate-fade-down group-hover:opacity-100 group-hover:animate-duration-500 group-hover:animate-ease-linear md:max-w-[304.80px] xl:max-w-[412px] xl:bg-blue-500/5 xl:pl-7">
        <div className=" flex flex-col items-start justify-start gap-3">
          <div className="flex  flex-col items-start justify-start gap-2 self-stretch">
            <h2 className=" text-center  text-[27.98px] font-extrabold  leading-[30.78px] text-black md:text-2xl md:leading-relaxed  xl:text-[32px]  xl:leading-9">
              {name.charAt(0).toLocaleUpperCase() + name.slice(1).toLowerCase()}
            </h2>
          </div>
          <p className=" text-sm  leading-snug  tracking-wide   text-slate-500   md:text-xs md:leading-[18.94px] xl:max-w-[342px] xl:text-base xl:leading-relaxed">
            {description}
          </p>
        </div>
        <ul className="mt-8 flex flex-col items-start justify-start gap-4 ">
          {services?.map((item, index) => (
            <ServicesItems key={index} service={item} />
          ))}
        </ul>
        <Button className="mt-12  flex h-[52px] w-full items-center justify-center gap-2.5 rounded-none bg-blue-600  py-6 font-bold   xl:w-[340px]">
          Check it out
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
