import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Modal from '@/components/ui/modal';
import { useServices } from '@/hooks/services.hook';
import handlePost from '@/utils/handlePost';
import { servicesFormSchema } from '@/validate';
import ServicesForm from './ServicesForm';
import { postServices } from '@/api';

const ServicesAddModal = () => {
  const { refetch } = useServices('');
  const form = useForm<z.infer<typeof servicesFormSchema>>({
    resolver: zodResolver(servicesFormSchema),
    defaultValues: {
      name: '',
      img: '',
      description: '',
      services: [],
    },
  });

  function onSubmit(values: z.infer<typeof servicesFormSchema>) {
    handlePost(values, postServices, refetch, form.reset);
  }

  return (
    <Modal buttonName="Add Services">
      <ServicesForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default ServicesAddModal;
