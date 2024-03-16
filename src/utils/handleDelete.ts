import Swal from 'sweetalert2';

const handleDelete = (
  id: string,
  confirmationMessage: string,
  actionFunction: (id: string) => Promise<any>,
  refetchFunction: () => void
) => {
  Swal.fire({
    title: confirmationMessage,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      actionFunction(id)
        .then((res) => {
          if (res.data?.data.modifiedCount > 0) {
            Swal.fire('Deleted!', `${res.data.message}`, 'success');
            refetchFunction();
          }
        })
        .catch((error: any) => {
          Swal.fire('Error!', `${error.message}`, 'error');
        });
    }
  });
};

export default handleDelete;
