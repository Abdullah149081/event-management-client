import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <Container className="relative z-10  xl:pb-28 ">
      <div className="absolute inset-0   -z-10 rounded-xl    bg-gradient-to-r from-fuchsia-500/20 from-25%  to-cyan-400/20 to-80% blur-[150px]   " />
      <HeaderTitle>Our Services</HeaderTitle>
      <div className="mx-auto w-[327px] text-center text-sm  font-normal leading-snug text-slate-500  md:w-[518.61px] xl:w-[701px] xl:text-lg xl:leading-[28.80px]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </div>
      <div className="relative  mt-14">
        <div className=" grid justify-center gap-5  md:grid-cols-3">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </Container>
  );
};

export default Services;
