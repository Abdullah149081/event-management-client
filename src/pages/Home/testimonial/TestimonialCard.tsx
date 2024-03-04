const TestimonialCard = () => {
  return (
    <div className="flex h-[312px] flex-col items-start justify-center gap-[19px] rounded-[30px] bg-slate-50 py-10 pl-10 pr-[73px] group-hover:bg-blue-600 lg:w-[513px]">
      <div className="flex items-start justify-start gap-5">
        <img
          className="h-[85px] w-[85px] rounded-full"
          src="https://via.placeholder.com/85x85"
        />
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="w-[196px]  text-[28px] font-medium capitalize text-black group-hover:text-white">
              Jacob Joshua
            </div>
            <div className=" text-xl font-normal capitalize text-black group-hover:text-white">
              Chief Manager
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px]  text-base font-normal leading-loose text-black text-opacity-80 group-hover:text-white">
        I found the digital expertise I needed. Their creative-professional
        balance exceeded expectations. Friendly interactions, exceptional
        outcomes. For digital enchantment, it's got to be Embrace!
      </div>
    </div>
  );
};

export default TestimonialCard;
