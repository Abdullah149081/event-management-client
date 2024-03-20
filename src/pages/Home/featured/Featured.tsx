import Container from '@/components/ui/Container';
import HeaderText from '@/components/ui/HeaderText';
import HeaderTitle from '@/components/ui/HeaderTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import Loading from '@/components/ui/loading';
import { useFeatured } from '@/hooks';
import { TFeatured } from '@/types';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const { featured, isError, isLoading } = useFeatured();

  if (isError) return <Loading error />;

  return (
    <Container className="pb-16 xl:pb-32">
      <HeaderTitle className="mx-0 px-0 text-start ">
        Featured Organizers
      </HeaderTitle>
      <HeaderText className="mx-0 mt-3 text-start">
        Follow the organizers from these events and get notified when they
        create new ones.
      </HeaderText>

      {isLoading ? (
        <Loading />
      ) : (
        <Carousel className="">
          <CarouselContent className="-ml-1 ">
            {featured.map((feature: TFeatured) => (
              <CarouselItem
                key={feature._id}
                className="mt-14 rounded bg-slate-400/5 py-5 pl-1 shadow-2xl md:basis-1/2 lg:basis-2/5 xl:basis-1/4 "
              >
                <div className="group h-full p-1">
                  <FeaturedCard feature={feature} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </Container>
  );
};

export default Featured;
