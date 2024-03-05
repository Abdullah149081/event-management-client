const TestimonialCard = () => {
  return (
    <div className="flex h-[265.19px] w-full flex-col items-start justify-center  gap-[19px] rounded-[30px] bg-slate-50 px-5 py-10 group-hover:bg-blue-600 md:h-[305px] md:w-[412px] xl:h-[312px] xl:w-[513px] xl:pl-10 xl:pr-[73px] ">
      <div className="flex items-start justify-start gap-5 ">
        <img
          className=" size-[56.08px] rounded-full md:size-16 xl:size-[85px]"
          src="https://via.placeholder.com/85x85"
          alt=""
        />
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="text-base font-medium capitalize leading-relaxed text-black group-hover:text-white md:text-lg md:leading-[28.80px] xl:w-[196px] xl:text-[28px] xl:leading-normal">
              Jacob Joshua
            </div>
            <div className="text-sm font-normal capitalize leading-tight text-black group-hover:text-white md:text-base md:leading-snug xl:text-xl xl:leading-normal">
              Chief Manager
            </div>
          </div>
        </div>
      </div>
      <div className=" text-base font-normal leading-relaxed text-black text-opacity-80 group-hover:text-white md:text-lg md:leading-[28.80px] xl:w-[400px] xl:text-base xl:leading-loose">
        I found the digital expertise I needed. Their creative-professional
        balance exceeded expectations. Friendly interactions, exceptional
        outcomes. For digital enchantment, it's got to be Embrace!
      </div>
    </div>
  );
};

export default TestimonialCard;
