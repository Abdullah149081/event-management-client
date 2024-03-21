import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import Loading from '@/components/ui/loading';
import { useServices } from '@/hooks';
import { TService } from '@/types';

import HeaderText from '@/components/ui/HeaderText';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { servicesData, isError, isLoading } = useServices('3');

  if (isError) return <Loading error />;
  return (
    <Container className="relative z-10  xl:pb-28 ">
      <div className="absolute inset-0   -z-10 rounded-xl    bg-gradient-to-r from-fuchsia-500/20 from-25%  to-cyan-400/20 to-80% blur-[150px]   " />
      <HeaderTitle>Our Services</HeaderTitle>
      <HeaderText className=" w-[327px]   md:w-[518.61px] xl:w-[701px]">
        Comprehensive event management services from concept to execution,
        ensuring seamless experiences that exceed expectations and leave lasting
        impressions
      </HeaderText>
      {isLoading ? (
        <Loading className="mt-8" />
      ) : (
        <div className="relative  mt-14">
          <div className=" grid justify-center gap-5  md:grid-cols-3">
            {servicesData?.map((service: TService) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Services;
