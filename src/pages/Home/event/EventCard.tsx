import { cn } from '@/lib/utils';
import { eventGridClassAdd, imgClassAdd } from '@/utils/eventClassAdd';

type EventCardProps = {
  event: {
    img: string;
    name: string;
  };
  item: string;
};

const EventCard = ({ event, item }: EventCardProps) => {
  const { img, name } = event;
  const gridClass = eventGridClassAdd({ item });
  const imgClass = imgClassAdd({ item });

  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-md bg-slate-400 bg-opacity-10 p-6',
        gridClass
      )}
    >
      <img
        className={cn(' rounded-md object-cover', imgClass)}
        src={img}
        alt={name}
      />
      <div className="flex h-[26px] flex-col items-start justify-start gap-2 self-stretch">
        <div className="  text-center  text-xl font-extrabold leading-snug  text-black md:text-[21.27px] md:font-semibold md:leading-normal xl:text-2xl xl:font-medium xl:leading-relaxed">
          {name}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
