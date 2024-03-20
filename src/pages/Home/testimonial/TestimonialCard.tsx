const TestimonialCard = ({ review }) => {
  const { img, name, title, review: comment } = review || {};

  return (
    <div className="flex h-[265.19px] w-full flex-col items-start justify-center  gap-[19px] rounded-[30px] bg-slate-50 px-5 py-10 group-hover:bg-blue-600 md:h-[270px] md:w-[412px] xl:h-[312px] xl:w-[513px] xl:pl-10 xl:pr-[73px] ">
      <div className="flex items-start justify-start gap-5 ">
        <figure className="rounded-full ring-2 ring-primary ring-offset-2 ">
          <img
            className=" size-[56.08px] rounded-full md:size-16 xl:size-[85px]"
            src={img}
            alt={name}
          />
        </figure>
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="flex flex-col items-start justify-start gap-2.5">
            <h2 className="text-base font-medium capitalize leading-relaxed text-black group-hover:text-white md:text-lg md:leading-[28.80px] xl:w-[196px] xl:text-[28px] xl:leading-normal">
              {name}
            </h2>
            <h2 className="text-sm font-normal capitalize leading-tight text-black group-hover:text-white md:text-base md:leading-snug xl:text-xl xl:leading-normal">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <p className=" text-base font-normal leading-relaxed text-black text-opacity-80 group-hover:text-white  xl:w-[400px] xl:text-base xl:leading-loose">
        {comment}
      </p>
    </div>
  );
};

export default TestimonialCard;
