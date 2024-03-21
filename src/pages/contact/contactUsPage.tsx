import { Button } from '@/components/ui/button';
import BannerGradient from '../Home/banner/BannerGradient';

const ContactUsPage = () => {
  return (
    <div className="relative">
      <BannerGradient />
      <div className=" py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or inquiries? Reach out to us!
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h3>
            <div className="mt-4">
              <p className="text-lg text-gray-600">Email: info@event360.com</p>
              <p className="text-lg text-gray-600">Phone: +1 (123) 456-7890</p>
              <p className="text-lg text-gray-600">
                Address: 123 Event Street, Cityville, State, 12345
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h3>
            <form className="mt-4">
              <div className="group relative z-0 mb-5 w-full">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Full Name
                </label>
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Email address
                </label>
              </div>
              <div className="group relative z-0 mb-5 w-full">
                <textarea
                  name="message"
                  rows={4}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                >
                  Type your message
                </label>
              </div>

              <div className="text-center">
                <Button className="w-full px-5 py-6 font-plus font-extrabold uppercase md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
