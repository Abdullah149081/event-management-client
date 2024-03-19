import { deleteService } from '@/api';
import { Button } from '@/components/ui/button';
import Loading from '@/components/ui/loading';
import Modal from '@/components/ui/modal';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useServices } from '@/hooks';
import ServicesItems from '@/pages/Home/services/ServicesItems';
import { TService } from '@/types';
import handleDelete from '@/utils/handleDelete';
import ServicesAddModal from './servicesAddModal';
import ServiceEditModal from './servicesEditModal';

const DashboardServices = () => {
  const { servicesData, isError, isLoading, refetch } = useServices('');

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Loading error />;
  }

  const handleDeleteClick = (id: string) => {
    handleDelete(
      id,
      'Are you sure you want to delete this service?',
      deleteService,
      refetch
    );
  };

  return (
    <div>
      <ServicesAddModal />
      <Table className="mt-10 max-w-3xl">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="">#</TableHead>
            <TableHead>Service Name</TableHead>
            <TableHead>Service Image</TableHead>
            <TableHead>Service Details</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {servicesData.map((service: TService, index: number) => (
            <TableRow
              key={service._id}
              className="hover:bg-transparent lg:text-lg"
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell>
                <img
                  src={service.img}
                  alt={service.name}
                  className="size-10 rounded-lg object-cover md:size-20"
                />
              </TableCell>

              <TableCell>
                <Modal buttonName="View">
                  <p className="text-lg">{service.description}</p>

                  <ul className="mt-3 flex flex-col items-start justify-start gap-4 ">
                    {service.services?.map((item, idx) => (
                      <ServicesItems key={idx} service={item} />
                    ))}
                  </ul>
                </Modal>
              </TableCell>

              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-3 ">
                  <ServiceEditModal service={service} refetch={refetch} />
                  <Button
                    onClick={() => handleDeleteClick(service._id)}
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

export default DashboardServices;
