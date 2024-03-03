import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Testimonial = () => {
  return (
    <Container className="pb-32">
      <HeaderTitle className="mx-0 px-0 text-start ">
        What Our Client Said about us
      </HeaderTitle>

      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <div className="mb-4 flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://randomuser.me/api/portraits"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-gray-400">CEO</p>
                      <p className="text-gray-400">Company Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!right-12 top-0 " />
        <CarouselNext className="right-0 top-0" />
      </Carousel>
    </Container>
  );
};

export default Testimonial;
