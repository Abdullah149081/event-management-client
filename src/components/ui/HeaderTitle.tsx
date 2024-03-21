import AOS from 'aos';
import { cn } from '@/lib/utils';
import { TChildren } from '@/types';
import 'aos/dist/aos.css';

AOS.init();

const HeaderTitle = ({ children, className }: TChildren) => {
  return (
    <div
      className="mt-20"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="linear"
    >
      <h1
        className={cn(
          "text-black'  text-center    text-[32px]  font-extrabold capitalize  leading-9 tracking-wide md:text-[34.13px] md:leading-[40.96px] xl:text-[64px] xl:leading-normal",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export default HeaderTitle;
