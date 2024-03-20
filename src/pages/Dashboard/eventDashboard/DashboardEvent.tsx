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

import { deleteEvent } from '@/api';
import { useEvents } from '@/hooks';
import { TEvent } from '@/types';
import handleDelete from '@/utils/handleDelete';
import EventAddModal from './eventAddModal';
import EventEditModal from './eventEditModal';

const DashboardEvent = () => {
  const { eventData, isLoading, refetch } = useEvents('');

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteClick = (id: string) => {
    handleDelete(
      id,
      'Are you sure you want to delete this event?',
      deleteEvent,
      refetch
    );
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
          {eventData?.map((event: TEvent, index: number) => (
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
                    onClick={() => handleDeleteClick(event._id)}
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
