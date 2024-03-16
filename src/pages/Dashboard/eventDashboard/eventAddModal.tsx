import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { postEvent } from '@/api';
import useEvents from '@/hooks/event.hook';
import handlePost from '@/utils/handlePost';
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
    handlePost(values, postEvent, refetch, form.reset);
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
