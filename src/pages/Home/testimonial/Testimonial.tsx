import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Loading from '@/components/ui/loading';
import { useReviews } from '@/hooks';
import { TReview } from '@/types';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  const { reviews, isError, isLoading } = useReviews();

  if (isError) {
    return <Loading error />;
  }

  return (
    <Container className="pb-16 xl:pb-32">
      <HeaderTitle className="mx-0 px-0 text-start ">
        What Our Client Said about us
      </HeaderTitle>

      {isLoading ? (
        <Loading className="mt-8" />
      ) : (
        <Carousel>
          <CarouselContent className="-ml-1">
            {reviews?.map((review: TReview) => (
              <CarouselItem
                key={review._id}
                className="mt-14 pl-1  md:basis-3/5 lg:basis-[45%] xl:basis-[42%]"
              >
                <div className="group h-full p-1 ">
                  <TestimonialCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-blue-600 hover:text-white lg:size-[85px]" />
          <CarouselNext className="hover:bg-blue-600 hover:text-white lg:size-[85px]" />
        </Carousel>
      )}
    </Container>
  );
};

export default Testimonial;
