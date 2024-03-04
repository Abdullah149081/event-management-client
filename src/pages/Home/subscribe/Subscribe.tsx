import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

const Subscribe = () => {
  return (
    <div className=" bg-gradient-to-r from-cyan-900 from-10% to-cyan-800 to-90%  py-10 text-white">
      <Container className="">
        <div>
          <div className="flex gap-10 ">
            <div className="flex-2 space-y-3 font-inter ">
              <h2 className="text-2xl font-extrabold tracking-wide">
                STAY UPDATED ON EVENT 300 ANNOUNCEMENTS
              </h2>
              <p className="">
                Subscribe for dibs on the latest and greatest happenings.
              </p>
            </div>
            <div className="mt-4 flex-1">
              <div className="flex">
                <div className="w-full">
                  <input
                    className="h-full w-full border border-white bg-transparent p-4 outline-none placeholder:text-white/80"
                    type="email"
                    placeholder="Enter your email address"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <Button className="h-full rounded-none border-y border-r border-white bg-transparent font-bold uppercase tracking-wide text-white">
                    Join The list
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-sm tracking-wide">
              We’re committed to your privacy. EVENT 300 uses the information
              you provide to us to contact you about EVENT 300 content and
              events. You may unsubscribe from these communications at any time.
              For more information, check out our{' '}
              <span className="cursor-pointer underline">privacy policy.</span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
