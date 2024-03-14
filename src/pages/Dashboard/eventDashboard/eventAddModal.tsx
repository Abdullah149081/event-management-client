import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import useEvents from '@/hooks/event.hook';
import axiosClient from '@/network/apiClient.axios';
import { formSchema } from '@/validate';
import EventForm from './EventForm';

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
    axiosClient
      .post('/events', values)
      .then((res) => {
        if (res.data.eventId) {
          toast.success(res.data.message, {
            position: 'top-right',
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
        <Button className="font-bold uppercase">Add Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <EventForm form={form} onSubmit={() => onSubmit(form.getValues())} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventAddModal;
