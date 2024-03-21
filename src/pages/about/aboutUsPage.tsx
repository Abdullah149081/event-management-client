import Container from '@/components/ui/Container';
import BannerGradient from '../Home/banner/BannerGradient';

const AboutUsPage = () => {
  return (
    <div className="relative">
      <BannerGradient />
      <Container className="min-h-screen py-10">
        <div className=" py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Welcome to Event360, where we transform your events into
                unforgettable experiences. We are a passionate team of
                developers, designers, and event enthusiasts dedicated to
                revolutionizing the way you plan, manage, and execute events.
                With our cutting-edge technology, fueled by TypeScript, React,
                and Tailwind CSS, we bring innovation and creativity to every
                aspect of event management.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Our mission is simple: to empower event organizers with the
                tools they need to create extraordinary experiences. We believe
                that every event has the potential to leave a lasting
                impression, and we're here to help you unlock that potential.
                Whether you're a seasoned event planner or organizing your first
                event, we're committed to providing you with the support and
                resources you need to succeed.
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900">
                Why Choose Event360?
              </h3>
              <ul className="mt-4 list-inside list-disc text-lg text-gray-600">
                <li>
                  <span className="font-semibold">Innovative Technology:</span>{' '}
                  Powered by TypeScript and React, our platform is built with
                  the latest advancements in web development, ensuring
                  reliability, scalability, and performance.
                </li>
                <li>
                  <span className="font-semibold">Beautiful Design:</span> With
                  Tailwind CSS, we craft stunning user interfaces that not only
                  look great but also enhance the overall user experience. From
                  elegant layouts to intuitive navigation, every detail is
                  meticulously designed to delight.
                </li>
                <li>
                  <span className="font-semibold">Customization:</span> We
                  understand that no two events are alike. That's why our
                  platform offers extensive customization options, allowing you
                  to tailor every aspect of your event to suit your unique needs
                  and preferences.
                </li>
                <li>
                  <span className="font-semibold">Seamless Integration:</span>{' '}
                  Whether you're integrating with third-party services or
                  incorporating custom features, our platform offers seamless
                  integration capabilities, ensuring smooth operation and
                  maximum efficiency.
                </li>
                <li>
                  <span className="font-semibold">Exceptional Support:</span>{' '}
                  From initial setup to ongoing assistance, our dedicated
                  support team is here to provide you with personalized support
                  every step of the way. We're committed to your success and
                  will go above and beyond to ensure that your event is a
                  resounding success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsPage;
