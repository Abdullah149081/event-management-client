import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { postRecentEvent } from '@/api';

import { useRecent } from '@/hooks';
import handlePost from '@/utils/handlePost';
import { recentFormSchema } from '@/validate';
import RecentForm from './RecentForm';
import Modal from '@/components/ui/modal';

const RecentAddModal = () => {
  const { refetch } = useRecent('');
  const form = useForm<z.infer<typeof recentFormSchema>>({
    resolver: zodResolver(recentFormSchema),
    defaultValues: {
      img: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof recentFormSchema>) {
    handlePost(values, postRecentEvent, refetch, form.reset);
  }

  return (
    <Modal buttonName="Add Recent Event">
      <RecentForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default RecentAddModal;
