import { Helmet } from 'react-helmet-async';

const WebSiteTitle = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{`Event 360 - ${title} `}</title>
    </Helmet>
  );
};

export default WebSiteTitle;
