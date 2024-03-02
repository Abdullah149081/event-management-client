/* eslint-disable import/prefer-default-export */
export const galleryImgClassAdd = ({ img }: { img: string }) => {
  switch (img) {
    case '1':
      return 'h-48 w-32';
    case '2':
      return 'h-[258px] w-[172px]';
    case '3':
      return 'h-[212px] w-32 ';
    case '4':
      return 'h-[215px] w-32';
    case '5':
      return 'h-40 w-32 ';
    case '6':
      return 'h-[171px] w-32';
    case '7':
      return 'h-[172px] w-32';
    case '8':
      return 'h-48 w-32';
    case '9':
      return 'h-[255px] w-40';
    case '10':
      return 'h-[165px] w-32';

    default:
      return '';
  }
};

export const galleryFlexClassAdd = ({ item }: { item: string }) => {
  switch (item) {
    case '1':
      return 'items-end justify-center pt-20';
    case '2':
      return 'items-start justify-start pt-8';
    case '3':
      return 'items-start justify-start';
    case '4':
      return 'items-start justify-center';
    default:
      return '';
  }
};
