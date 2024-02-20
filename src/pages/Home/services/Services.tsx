import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <Container className="relative z-10  pb-28 ">
      <div className="absolute inset-0   -z-10 rounded-xl    bg-gradient-to-r from-fuchsia-500/20 from-25%  to-cyan-400/20 to-80% blur-[150px]   " />
      <HeaderTitle>Our Services</HeaderTitle>
      <div className="mx-auto max-w-[701px] text-center  text-lg font-normal leading-[28.80px] text-slate-500">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </div>
      <div className="relative  mt-14">
        <div className=" grid gap-5 xl:grid-cols-3">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </Container>
  );
};

export default Services;
