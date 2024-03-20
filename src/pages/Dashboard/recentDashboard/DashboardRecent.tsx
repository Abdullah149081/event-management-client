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
import { useRecent } from '@/hooks';
import RecentEditModal from './recentEditModal';

import { deleteRecent } from '@/api';
import { TRecent } from '@/types';
import handleDelete from '@/utils/handleDelete';
import RecentAddModal from './recentAddModal';

const DashboardRecent = () => {
  const { recentData, refetch, isError, isLoading } = useRecent('');

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Loading error />;
  }

  const handleDeleteClick = (id: string) => {
    handleDelete(
      id,
      'Are you sure you want to delete this Recent Event?',
      deleteRecent,
      refetch
    );
  };

  return (
    <div>
      <RecentAddModal />
      <Table className="mt-10 max-w-4xl  rounded-xl bg-gray-900/30 ">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="">#</TableHead>

            <TableHead>Recent Image</TableHead>
            <TableHead className="text-center">Recent Description</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentData?.map((recent: TRecent, index: number) => (
            <TableRow
              key={recent._id}
              className="hover:bg-transparent lg:text-lg"
            >
              <TableCell>{index + 1}</TableCell>

              <TableCell>
                <img
                  src={recent.img}
                  alt="recent-event"
                  className="size-10 rounded-lg object-cover md:size-20"
                />
              </TableCell>
              <TableCell className="no-scrollbar  max-w-md overflow-scroll">
                <div className=" h-10 md:h-full  ">{recent.description}</div>
              </TableCell>

              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-3 ">
                  <RecentEditModal recent={recent} refetch={refetch} />
                  <Button
                    onClick={() => handleDeleteClick(recent._id)}
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

export default DashboardRecent;
