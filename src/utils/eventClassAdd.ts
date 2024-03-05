/* eslint-disable import/prefer-default-export */
export const imgClassAdd = ({ item }: { item: string }) => {
  switch (item) {
    case '1':
      return 'w-[316.57px] h-[173.09px] md:w-[258.52px] md:h-[173.73px] xl:w-[364px] xl:h-[187px]';
    case '2':
      return 'w-[316.57px] h-[173.09px] md:w-[258.52px] md:h-[173.73px] xl:w-[148px] xl:h-[187px]';
    case '3':
      return 'w-[316.57px] h-[173.09px] md:w-[258.52px] md:h-[173.73px] xl:w-[148px] xl:h-[187px]';
    case '4':
      return 'w-[316.57px] h-[173.09px] md:w-[258.52px] md:h-[173.73px] xl:w-[364px] xl:h-[187px]';
    case '5':
      return 'w-[316.57px] h-[173.09px] md:w-[258.52px] md:h-[173.73px] xl:w-[364px] xl:h-[187px]';
    case '6':
      return 'w-[316.57px] h-[173.09px] md:w-[258.52px] md:h-[173.73px] xl:w-[364px] xl:h-[480px]';
    default:
      return '';
  }
};

export const eventGridClassAdd = ({ item }: { item: string }) => {
  switch (item) {
    case '1':
      return 'xl:col-span-2 xl:row-span-2';
    case '2':
      return 'xl:col-start-1 xl:row-span-2 xl:row-start-3';
    case '3':
      return 'xl:col-start-2 xl:row-span-2 xl:row-start-3';
    case '4':
      return 'xl:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-1';
    case '5':
      return 'xl:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-3';
    case '6':
      return 'xl:col-span-2 xl:col-start-5 xl:row-span-4 xl:row-start-1';
    default:
      return '';
  }
};
