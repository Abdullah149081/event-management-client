import { toast } from 'sonner';

const handleUpdate = async (
  id: string,
  values: any,
  actionFunction: (id: string, value: any) => Promise<any>,
  refetchFunction: () => void
) => {
  try {
    const res = await actionFunction(id, values);
    if (res.data?.data.modifiedCount > 0) {
      toast.success(res.data.message, {
        position: 'top-center',
        duration: 2000,
      });
      refetchFunction();
    }
  } catch (error: any) {
    toast.error(error.response.data.message, {
      position: 'top-center',
    });
  }
};

export default handleUpdate;
