import AOS from 'aos';
import { clients } from '@/assets/client/client';
import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';

import 'aos/dist/aos.css';

AOS.init();

const Client = () => {
  return (
    <Container className="pb-16 xl:pb-32">
      <HeaderTitle>Our Valuable client</HeaderTitle>
      <div className="mt-10 grid grid-cols-2 gap-10 md:mt-20 md:grid-cols-4 md:gap-[94px] xl:grid-cols-5">
        {clients?.map((client, index) => (
          <img
            key={index}
            src={client}
            alt={client}
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-duration="500"
          />
        ))}
      </div>
    </Container>
  );
};

export default Client;
