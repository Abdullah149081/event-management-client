import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Modal from '@/components/ui/modal';

import { updateRecent } from '@/api';
import { TRecent } from '@/types';
import handleUpdate from '@/utils/handleUpdate';
import { recentFormSchema } from '@/validate';
import RecentForm from './RecentForm';

type RecentEditModalProps = {
  recent: TRecent;
  refetch: () => void;
};

const RecentEditModal = ({ recent, refetch }: RecentEditModalProps) => {
  const form = useForm<z.infer<typeof recentFormSchema>>({
    resolver: zodResolver(recentFormSchema),
    defaultValues: {
      img: recent.img,
      description: recent.description,
    },
  });

  function onSubmit(values: z.infer<typeof recentFormSchema>) {
    handleUpdate(recent._id, values, updateRecent, refetch);
  }

  return (
    <Modal buttonName="Edit Recent">
      <RecentForm form={form} onSubmit={() => onSubmit(form.getValues())} />
    </Modal>
  );
};

export default RecentEditModal;
