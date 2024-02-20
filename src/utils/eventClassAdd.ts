/* eslint-disable import/prefer-default-export */
export const imgClassAdd = ({ item }: { item: string }) => {
  switch (item) {
    case '1':
      return 'w-[364px] h-[187px]';
    case '2':
      return 'w-[148px] h-[187px]';
    case '3':
      return 'w-[148px] h-[187px]';
    case '4':
      return 'w-[364px] h-[187px]';
    case '5':
      return 'w-[364px] h-[187px]';
    case '6':
      return 'w-[364px] h-[480px] ';
    default:
      return '';
  }
};

export const eventGridClassAdd = ({ item }: { item: string }) => {
  switch (item) {
    case '1':
      return 'xl:col-span-2 xl:row-span-2';
    case '2':
      return 'xl:col-start-1 xl:row-span-2 row-start-3';
    case '3':
      return 'col-start-2 row-span-2 row-start-3';
    case '4':
      return 'col-span-2 col-start-3 row-span-2 row-start-1';
    case '5':
      return 'col-span-2 col-start-3 row-span-2 row-start-3';
    case '6':
      return 'col-span-2 col-start-5 row-span-4 row-start-1';
    default:
      return '';
  }
};
