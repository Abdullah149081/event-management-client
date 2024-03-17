import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { postEvent } from '@/api';

import Modal from '@/components/ui/modal';

import handlePost from '@/utils/handlePost';
import { formSchema } from '@/validate';
import EventForm from './EventForm';
import { useEvents } from '@/hooks';

const EventAddModal = () => {
  const { refetch } = useEvents('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      img: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handlePost(values, postEvent, refetch, form.reset);
  }

  return (
    <Modal buttonName="Add Event">
      <EventForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default EventAddModal;
