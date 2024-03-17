import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { z } from 'zod';
import Modal from '@/components/ui/modal';
import RecentForm from './RecentForm';

export const recentFormSchema = z.object({
  img: z.string().url(),
  description: z
    .string()
    .min(2, {
      message: 'Description is too short',
    })
    .max(133, { message: 'Description is too long' }),
});

const RecentAddModal = () => {
  const form = useForm<z.infer<typeof recentFormSchema>>({
    resolver: zodResolver(recentFormSchema),
    defaultValues: {
      img: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof recentFormSchema>) {
    console.log(values);
    // handlePost(values, postEvent, refetch, form.reset);
  }

  return (
    <Modal buttonName="Add Recent Event">
      <RecentForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default RecentAddModal;
