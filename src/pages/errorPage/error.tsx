import { Link, useRouteError } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import WebSiteTitle from '@/components/ui/websiteTitle';
import './error.css';

export default function ErrorPage() {
  const { error } = useRouteError();

  return (
    <div id="notfound">
      <WebSiteTitle title="Not Found" />
      <div className="notfound w-full max-w-xl px-4 pt-40 lg:pl-40 lg:pr-0 lg:pt-0">
        <div className="notfound-404 " />
        <div className="space-y-4">
          <h1 className="text-7xl font-bold">404</h1>
          <h2 className="text-2xl font-bold uppercase">
            Oops! Page Not Be Found
          </h2>
          <p className="text-lg font-medium text-destructive">
            {error?.status || error?.message}
          </p>
          <Link className="inline-block" to="/">
            <Button className="font-plus font-bold uppercase">
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
