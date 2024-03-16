/* eslint-disable no-underscore-dangle */
import { Button } from '@/components/ui/button';
import Loading from '@/components/ui/loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useEvents from '@/hooks/event.hook';
import axiosClient from '@/network/apiClient.axios';
import { TEvent } from '@/types';
import Swal from 'sweetalert2';
import EventAddModal from './eventAddModal';
import EventEditModal from './eventEditModal';

const DashboardEvent = () => {
  const { eventData, isLoading, refetch } = useEvents('');

  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/events/${id}`)
          .then((res) => {
            if (res.data?.result.modifiedCount > 0) {
              Swal.fire('Deleted!', `${res.data.message}`, 'success');
              refetch();
            }
          })
          .catch((error) => {
            Swal.fire('Error!', `${error.message}`, 'error');
          });
      }
    });
  };

  return (
    <div>
      <EventAddModal />
      <Table className="mt-10 max-w-3xl">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="">#</TableHead>
            <TableHead>Event Name</TableHead>
            <TableHead>Event Image</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventData.map((event: TEvent, index: number) => (
            <TableRow
              key={event._id}
              className="hover:bg-transparent lg:text-lg"
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{event.name}</TableCell>
              <TableCell>
                <img
                  src={event.img}
                  alt={event.name}
                  className="size-10 rounded-lg object-cover md:size-20"
                />
              </TableCell>

              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-3 ">
                  <EventEditModal event={event} refetch={refetch} />
                  <Button
                    onClick={() => handleDelete(event._id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardEvent;
