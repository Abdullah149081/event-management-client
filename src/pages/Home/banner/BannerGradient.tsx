import img from '@/assets/bg/mesh-gradient-22.png';

const BannerGradient = () => {
  return (
    <img
      className="absolute -top-1/4 -z-10 h-[calc(100%+27%)]   w-full max-w-[1440px] object-cover md:-top-28 md:h-[calc(100%+140px)] "
      src={img}
      alt="BannerGradient"
    />
  );
};

export default BannerGradient;
