import WebSiteTitle from '@/components/ui/websiteTitle';
import Banner from './banner/Banner';
import BannerGradient from './banner/BannerGradient';
import Client from './client/Client';
import Events from './event/Events';
import Featured from './featured/Featured';
import Gallery from './gallery/Gallery';
import Pricing from './pricing/Pricing';
import Recent from './recent/Recent';
import Services from './services/Services';
import Subscribe from './subscribe/Subscribe';
import Testimonial from './testimonial/Testimonial';

function Home() {
  return (
    <div className="">
      <WebSiteTitle title="Home" />
      <div className="relative">
        <BannerGradient />
        <Banner />
      </div>
      <Client />
      <Services />
      <Events />
      <Pricing />
      <Gallery />
      <Testimonial />
      <Recent />
      <Featured />
      <Subscribe />
    </div>
  );
}

export default Home;
