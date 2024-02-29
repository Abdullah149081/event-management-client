import HeaderText from '@/components/ui/HeaderText';
import HeaderTitle from '@/components/ui/HeaderTitle';
import Container from '../../../components/ui/Container';
import PricingCard from './PricingCard';
import { plans } from './package';

const Pricing = () => {
  const plan = plans;
  return (
    <Container className="pb-28">
      <HeaderTitle>Explore our pricing plans</HeaderTitle>
      <HeaderText className="mt-6 max-w-[1086px]">
        Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
        ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
        posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare
        viverra. Ultrices faucibus neque velit risus ac id lorem.
      </HeaderText>
      <div className="mt-16 grid-cols-3 gap-5 lg:grid">
        <PricingCard plan={plan[0]} />
        <PricingCard plan={plan[1]} />
        <PricingCard plan={plan[2]} />
      </div>
    </Container>
  );
};

export default Pricing;
