import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <Container className="relative overflow-hidden pb-28 xl:overflow-visible">
      <div className="absolute -right-24 bottom-0  -z-0 h-[846.34px]  w-[718.11px] rotate-[27.42deg] overflow-hidden rounded-full bg-cyan-400/30 blur-[244px] " />
      <HeaderTitle>Our Services</HeaderTitle>
      <div className="mx-auto max-w-[701px] text-center  text-lg font-normal leading-[28.80px] text-slate-500">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
      </div>
      <div className="relative  mt-14">
        <div className="absolute -left-[180px]  -top-14  -z-0  size-[600px]  rounded-full bg-fuchsia-500/30 blur-[244px]  xl:size-[694.15px]" />

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
