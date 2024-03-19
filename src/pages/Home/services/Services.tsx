import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import Loading from '@/components/ui/loading';
import { useServices } from '@/hooks';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { servicesData, isError, isLoading } = useServices('3');

  if (isLoading) return <Loading />;
  if (isError) return <Loading error />;
  return (
    <Container className="relative z-10  xl:pb-28 ">
      <div className="absolute inset-0   -z-10 rounded-xl    bg-gradient-to-r from-fuchsia-500/20 from-25%  to-cyan-400/20 to-80% blur-[150px]   " />
      <HeaderTitle>Our Services</HeaderTitle>
      <div className="mx-auto w-[327px] text-center text-sm  font-normal leading-snug text-slate-500  md:w-[518.61px] xl:w-[701px] xl:text-lg xl:leading-[28.80px]">
        Comprehensive event management services from concept to execution,
        ensuring seamless experiences that exceed expectations and leave lasting
        impressions
      </div>
      <div className="relative  mt-14">
        <div className=" grid justify-center gap-5  md:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
