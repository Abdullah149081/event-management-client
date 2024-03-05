import HeaderText from '@/components/ui/HeaderText';
import HeaderTitle from '@/components/ui/HeaderTitle';
import Container from '../../../components/ui/Container';
import PricingCard from './PricingCard';
import { plans } from './package';

const Pricing = () => {
  return (
    <Container className="relative pb-16 xl:pb-28  ">
      <div className="absolute -left-[120px] -top-[428px] -z-10 h-[1017.96px] w-2/5 rotate-[40.34deg] rounded-full bg-pink-500/30 blur-[244px] lg:w-[749.95px] " />
      <div className="absolute -bottom-[calc(100px+400px)]  right-[calc(40px-15px)]  h-[1017.96px] w-[649.95px]   rounded-full bg-blue-400/35 blur-[244px]" />
      <HeaderTitle>Explore our pricing plans</HeaderTitle>
      <HeaderText className="mt-6 max-w-[327px] md:max-w-[646.9px] xl:max-w-[1086px]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
        posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare
        viverra. Ultrices faucibus neque velit risus ac id lorem.
      </HeaderText>
      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </Container>
  );
};

export default Pricing;
