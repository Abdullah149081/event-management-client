import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <Container className="pb-16 xl:pb-32">
      <HeaderTitle className="mx-0 px-0 text-start ">
        What Our Client Said about us
      </HeaderTitle>

      <Carousel className="">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="mt-14 pl-1  md:basis-3/5 lg:basis-[45%] xl:basis-[42%]"
            >
              <div className="group p-1 ">
                <TestimonialCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover:bg-blue-600 hover:text-white lg:size-[85px]" />
        <CarouselNext className="hover:bg-blue-600 hover:text-white lg:size-[85px]" />
      </Carousel>
    </Container>
  );
};

export default Testimonial;
