import { clients } from '@/assets/client/client';
import Container from '@/components/ui/Container';
import HeaderTitle from '@/components/ui/HeaderTitle';

const Client = () => {
  return (
    <Container className="pb-32">
      <HeaderTitle>Our Valuable client</HeaderTitle>
      <div className="mt-20 grid gap-[94px] xl:grid-cols-5">
        {clients.map((client, index) => (
          <img key={index} src={client} alt={client} />
        ))}
      </div>
    </Container>
  );
};

export default Client;
