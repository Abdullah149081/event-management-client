import { ArrowRight, Euro, Globe } from 'lucide-react';
import { accessibility } from '@/assets/icon';
import Container from '@/components/ui/Container';

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 bg-opacity-90  backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-amber-300/20 blur-[244px]" />
      <div className="absolute  inset-y-0 right-0 w-1/2  rounded-full bg-purple-700/20 blur-[244px]" />
      <Container className="flex w-full  flex-col items-start xl:h-[420px] ">
        <div className="flex  flex-col items-start justify-start gap-6 self-stretch border-b border-slate-700 py-12   lg:flex-row xl:gap-12">
          <div className="flex items-center justify-start gap-6">
            <div className="space-x-3 text-[32px] font-bold leading-9 text-white">
              <span className="  text-white ">Event</span>
              <span className="  text-blue-600 ">360</span>
            </div>
          </div>
          <div className="flex shrink grow basis-0 flex-col items-start justify-start">
            <div className="flex items-center justify-start gap-2 self-stretch py-3">
              <div className=" text-base font-medium leading-[17.60px] text-white">
                Product
              </div>
            </div>
            <ul className="flex h-[184px] flex-col items-start justify-start self-stretch">
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Pricing</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Overview</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Browse</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Accessibility</span>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="flex shrink grow basis-0 flex-col items-start justify-start">
            <div className="flex items-center justify-start gap-2 self-stretch py-3">
              <div className=" text-base font-medium leading-[17.60px] text-white">
                Solutions
              </div>
            </div>
            <ul className="flex h-[184px] flex-col items-start justify-start self-stretch">
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Brainstorming</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Ideation</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Wireframing</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Research</span>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div className="flex shrink grow basis-0 flex-col items-start justify-start">
            <div className="flex items-center justify-start gap-2 self-stretch py-3">
              <div className=" text-base font-medium leading-[17.60px] text-white">
                Resources
              </div>
            </div>
            <ul className="flex h-[184px] flex-col items-start justify-start self-stretch">
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Help Center</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Blog</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Tutorials</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>FAQs</span>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div className="flex shrink grow basis-0 flex-col items-start justify-start">
            <div className="flex items-center justify-start gap-2 self-stretch py-3">
              <div className=" text-base font-medium leading-[17.60px] text-white">
                Support
              </div>
            </div>
            <ul className="flex h-[184px] flex-col items-start justify-start self-stretch">
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Contact Us</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Developers</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Documentation</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Integrations</span>
              </li>
            </ul>
          </div>
          {/* 5 */}
          <div className="flex shrink grow basis-0 flex-col items-start justify-start">
            <div className="flex items-center justify-start gap-2 self-stretch py-3">
              <div className=" text-base font-medium leading-[17.60px] text-white">
                Company
              </div>
            </div>
            <ul className="flex h-[186px] flex-col items-start justify-start self-stretch">
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>About</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Press</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Events</span>
              </li>
              <li className="flex items-center justify-start gap-2 self-stretch py-3">
                <span>Request Demo</span>
                <ArrowRight className="size-[24px] text-white" />
              </li>
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-col justify-start gap-2 self-stretch py-6 md:items-center md:gap-12 lg:flex-row">
          <div className="shrink grow basis-0 text-base font-normal leading-snug text-slate-200">
            {' '}
            @ 2023. All rights reserved.
          </div>
          <ul className="flex flex-wrap gap-2 md:flex-row md:items-center md:justify-end md:gap-8">
            <li className="flex items-center justify-start gap-2 py-3">
              <span>Terms</span>
            </li>
            <li className="flex items-center justify-start gap-2 py-3">
              <span>Privacy</span>
            </li>
            <li className="flex items-center justify-start gap-2 py-3">
              <span>Contact</span>
            </li>
            <li className="flex items-center justify-start gap-2 py-3">
              <Globe className="relative h-6 w-6 text-white" />
              <h2 className=" text-base font-normal leading-snug text-slate-200">
                EN
              </h2>
            </li>
            <li className="flex items-center justify-start gap-2 py-3">
              <Euro className="relative h-6 w-6 text-white" />
              <h2 className=" text-base font-normal leading-snug text-slate-200">
                EUR
              </h2>
            </li>
            <li className="flex items-center justify-start gap-2 py-3">
              <img
                src={accessibility}
                className="relative h-6 w-6"
                alt="accessibility icon"
              />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
