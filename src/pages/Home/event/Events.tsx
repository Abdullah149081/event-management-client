import Container from '@/components/ui/Container';
import HeaderText from '@/components/ui/HeaderText';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { event } from '@/utils/test';
import EventCard from './EventCard';

const Events = () => {
  const items = event;
  return (
    <Container className="pb-32">
      <div className="space-y-3">
        <HeaderTitle>Event Items</HeaderTitle>
        <HeaderText className="max-w-[327px] md:max-w-[546.90px] ">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </HeaderText>
      </div>

      {/* my */}
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3   xl:grid-cols-6 xl:grid-rows-4">
        <EventCard event={items[0]} item="1" />
        <EventCard event={items[1]} item="2" />
        <EventCard event={items[2]} item="3" />
        <EventCard event={items[3]} item="4" />
        <EventCard event={items[4]} item="5" />
        <EventCard event={items[5]} item="6" />
      </div>
    </Container>
  );
};

export default Events;
