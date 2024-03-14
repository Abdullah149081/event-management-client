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
import { TEvent } from '@/types';
import EventModal from './EventModal';
import EventEditModal from './eventEditModal';

const DashboardEvent = () => {
  const { eventData, isLoading, refetch } = useEvents('');

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <EventModal />
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
                  <Button variant="destructive">Delete</Button>
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
