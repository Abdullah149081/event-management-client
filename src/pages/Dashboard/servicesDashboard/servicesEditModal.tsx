import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Modal from '@/components/ui/modal';
import { updateService } from '@/api';

import { TService } from '@/types';
import handleUpdate from '@/utils/handleUpdate';
import { servicesFormSchema } from '@/validate';
import ServicesForm from './ServicesForm';

type ServiceEditModalProps = {
  service: TService;
  refetch: () => void;
};

const ServiceEditModal = ({ service, refetch }: ServiceEditModalProps) => {
  const form = useForm<z.infer<typeof servicesFormSchema>>({
    resolver: zodResolver(servicesFormSchema),
    defaultValues: {
      name: service.name,
      img: service.img,
      description: service.description,
      services: service.services,
    },
  });

  function onSubmit(values: z.infer<typeof servicesFormSchema>) {
    handleUpdate(service._id, values, updateService, refetch);
  }

  return (
    <Modal buttonName="Edit Event">
      <ServicesForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default ServiceEditModal;
