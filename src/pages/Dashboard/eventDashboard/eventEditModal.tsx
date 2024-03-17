import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { updateEvent } from '@/api';
import Modal from '@/components/ui/modal';
import { TEvent } from '@/types';
import handleUpdate from '@/utils/handleUpdate';
import { formSchema } from '@/validate';
import EventForm from './EventForm';

type EventEditModalProps = {
  event: TEvent;
  refetch: () => void;
};

const EventEditModal = ({ event, refetch }: EventEditModalProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: event.name,
      img: event.img,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleUpdate(event._id, values, updateEvent, refetch);
  }

  return (
    <Modal buttonName="Edit Event">
      <EventForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default EventEditModal;
