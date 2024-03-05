/* eslint-disable import/prefer-default-export */
export const galleryImgClassAdd = ({ img }: { img: string }) => {
  switch (img) {
    case '1':
      return 'w-[72.65px] h-[108.98px] md:w-[94.55px] md:h-[141.82px] xl:h-48 xl:w-32';
    case '2':
      return 'w-[97.63px] h-[146.44px] md:w-[127.05px] md:h-[190.57px] xl:h-[258px] xl:w-[172px]';
    case '3':
      return 'w-[72.65px] h-[120.33px]  md:w-[94.55px] md:h-[156.59px]  xl:h-[212px] xl:w-32 ';
    case '4':
      return 'w-[72.65px] h-[122.04px] md:w-[94.55px] md:h-[158.81px] xl:h-[215px] xl:w-32';
    case '5':
      return 'w-[72.65px] h-[90.82px] md:w-[94.55px] md:h-[118.18px]  xl:h-40 xl:w-32 ';
    case '6':
      return 'w-[72.65px] h-[97.06px] md:w-[94.55px] md:h-[126.31px] xl:h-[171px] xl:w-32';
    case '7':
      return 'w-[72.65px] h-[97.63px] md:w-[94.55px] md:h-[127.05px] xl:h-[172px] xl:w-32';
    case '8':
      return 'w-[72.65px] h-[108.98px] md:w-[94.55px] md:h-[141.82px]  xl:h-48 xl:w-32';
    case '9':
      return 'w-[90.82px] h-[144.74px] md:w-[118.18px] md:h-[188.36px] xl:h-[255px] xl:w-40';
    case '10':
      return 'w-[72.65px] h-[93.66px] md:w-[94.55px] md:h-[121.88px] xl:h-[165px] xl:w-32';

    default:
      return '';
  }
};

export const galleryFlexClassAdd = ({ item }: { item: string }) => {
  switch (item) {
    case '1':
      return 'items-end justify-center pt-[45.41px] md:pt-[59.09px]  xl:pt-20';
    case '2':
      return 'items-start justify-start pt-[18.16px] md:pt-[23.64px] xl:pt-8';
    case '3':
      return 'items-start justify-start';
    case '4':
      return 'items-start justify-center';
    default:
      return '';
  }
};
