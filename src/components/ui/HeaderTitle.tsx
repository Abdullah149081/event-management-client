import { TChildren } from '@/types';

const HeaderTitle = ({ children }: TChildren) => {
  return (
    <div className="mt-20">
      <h1 className="text-black' text-center font-['Roboto'] text-[64px] font-extrabold capitalize">
        {children}
      </h1>
    </div>
  );
};

export default HeaderTitle;
