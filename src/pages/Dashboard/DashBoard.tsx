import { BarChart4 } from 'lucide-react';
import Loading from '@/components/ui/loading';
import WebSiteTitle from '@/components/ui/websiteTitle';
import {
  useEvents,
  useFeatured,
  useRecent,
  useReviews,
  useServices,
} from '@/hooks';
import { cn } from '@/lib/utils';
import { TEvent, TFeatured, TRecent, TReview, TService } from '@/types';

const DashBoard = () => {
  const { eventData, isLoading: eventsLoading } = useEvents('');
  const { recentData, isLoading: recentLoading } = useRecent('');
  const { servicesData, isLoading: servicesLoading } = useServices('');
  const { reviews, isLoading: reviewsLoading } = useReviews();
  const { featured, isLoading: featureLoading } = useFeatured();

  const isLoading =
    eventsLoading ||
    recentLoading ||
    servicesLoading ||
    reviewsLoading ||
    featureLoading;

  if (isLoading) {
    return <Loading />;
  }

  type DataType = [TEvent[], TRecent[], TService[], TReview[], TFeatured[]];
  const data: DataType = [
    eventData,
    recentData,
    servicesData,
    reviews,
    featured,
  ];

  const titleName = (index: number): string => {
    switch (index) {
      case 0:
        return 'Events';
      case 1:
        return 'Recent';
      case 2:
        return 'Services';
      case 3:
        return 'Reviews';
      case 4:
        return 'Featured';
      default:
        return '';
    }
  };

  return (
    <div>
      <WebSiteTitle title="DashBoard" />
      <div className="grid max-w-[1200px] gap-8 lg:grid-cols-3">
        {data.map((item, index: number) => (
          <div
            className={cn(
              'max-w-sm rounded-lg bg-gradient-to-r from-gray-700  to-cyan-700 to-80%  p-6 shadow ',
              index === 1 &&
                ' bg-gradient-to-r from-fuchsia-500  to-purple-500',
              index === 2 && 'bg-gradient-to-r from-blue-500  to-cyan-500',
              index === 3 && 'bg-gradient-to-r from-yellow-500/90  to-amber-500'
            )}
            key={item[0]._id}
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <BarChart4 size={30} />

              <h2 className=" font-plus text-3xl font-extrabold tracking-wide  text-white dark:text-white">
                Total {titleName(index)}
              </h2>
            </div>
            <div className="mt-4 flex flex-col justify-center ">
              <dt className=" font-plus text-4xl font-extrabold">
                {item.length}
              </dt>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
