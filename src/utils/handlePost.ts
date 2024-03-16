import { toast } from 'sonner';

const handlePost = async (
  values: any,
  actionFunction: (value: any) => Promise<any>,
  refetchFunction: () => void,
  resetFunction?: () => void
) => {
  try {
    const res = await actionFunction(values);
    if (res.data?.data.insertedId) {
      toast.success(res.data.message, {
        position: 'top-right',
        duration: 2000,
      });
      if (resetFunction) {
        resetFunction();
      }
      refetchFunction();
    }
  } catch (error: any) {
    toast.error(error.response.data.message, {
      position: 'top-center',
    });
  }
};

export default handlePost;
