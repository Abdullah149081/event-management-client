import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { updateEvent } from '@/api';
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
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <EventForm form={form} onSubmit={() => onSubmit(form.getValues())} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventEditModal;
