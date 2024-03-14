import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import axiosClient from '@/network/apiClient.axios';
import { TEvent } from '@/types';
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
    axiosClient
      .put(`/events/${event._id}`, values)
      .then((res) => {
        if (res.data?.data.modifiedCount > 0) {
          toast.success(res.data.message, {
            position: 'top-center',
          });
          form.reset();
          refetch();
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: 'top-center',
        });
      });
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
