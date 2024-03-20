import { Button } from '@/components/ui/button';
import { TFeatured } from '@/types';

const FeaturedCard = ({ feature }: { feature: TFeatured }) => {
  const { img, follow, title } = feature || {};

  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl bg-white/20 px-4 py-10  shadow">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="">
          <figure className="rounded-full ring-2 ring-primary ring-offset-2">
            <img
              src={img}
              alt={title}
              className=" size-[85.5px] rounded-full"
            />
          </figure>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center  font-plus font-bold text-[#39364f] md:text-[20px]">
            {title}
          </h2>
          <p className="text-lg text-[#6f7287]">{follow} followers</p>
        </div>
      </div>
      <div className="mt-2 xl:mt-10">
        <Button className="w-[105.312px] font-plus">Follow</Button>
      </div>
    </div>
  );
};

export default FeaturedCard;
