import Container from '@/components/ui/Container';
import HeaderText from '@/components/ui/HeaderText';
import HeaderTitle from '@/components/ui/HeaderTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import TestimonialCard from '../testimonial/TestimonialCard';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  return (
    <Container className="pb-32">
      <HeaderTitle className="mx-0 px-0 text-start ">
        Featured Organizers
      </HeaderTitle>
      <HeaderText className="mx-0 text-start">
        Follow the organizers from these events and get notified when they
        create new ones.
      </HeaderText>

      <Carousel className="">
        <CarouselContent className="-ml-1 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="mt-14 rounded bg-slate-400/5 py-5 pl-1 shadow-2xl md:basis-1/2 lg:basis-1/4 "
            >
              <div className="group p-1 ">
                <FeaturedCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default Featured;
