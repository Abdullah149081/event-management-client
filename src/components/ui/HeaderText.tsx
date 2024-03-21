import AOS from 'aos';
import { cn } from '@/lib/utils';
import { TChildren } from '@/types';
import 'aos/dist/aos.css';

AOS.init();

const HeaderText = ({ children, className }: TChildren) => {
  return (
    <div
      className={cn(
        'mx-auto  text-center   text-sm  font-normal  leading-snug  text-slate-500 xl:max-w-[701px]   xl:text-lg xl:leading-[28.80px]',
        className
      )}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="linear"
    >
      {children}
    </div>
  );
};

export default HeaderText;
