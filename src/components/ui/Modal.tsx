import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type AddModalProps = {
  children: React.ReactNode;
  className?: string;
  buttonName: string;
  contentClass?: string;
};

const Modal = ({
  children,
  className,
  buttonName,
  contentClass,
}: AddModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold">{buttonName}</Button>
      </DialogTrigger>
      <DialogContent className={cn('sm:max-w-[425px]', className)}>
        <div className={cn('grid gap-4 py-4', contentClass)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
