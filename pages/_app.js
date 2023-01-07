import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import App from "next/app";
import Head from 'next/head';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import PageChange from 'src/components/PageChange/PageChange.js';
import { RecoilRoot } from 'recoil';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'src/styles/tailwind.css';
import { RouteGuard } from 'src/components/AuthGuard';
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getCompanyInfo } from 'src/actions/company';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'src/components/ErrorPage';

import {
  others_pages,
  sidebar_action,
  sidebar_pages,
} from 'src/data/sidebar.js';
import Link from 'next/link';
import { mobiletabs } from 'src/data/mobileTabs';

const queryClient = new QueryClient();

//transiition handler
Router.events.on('routeChangeStart', (url) => {
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  );
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <React.Fragment>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <title>MyDesa Care</title>
      </Head>
      {/* Mobile Nav */}
      <div className='md:hidden bg-white sticky top-0 z-50 w-full flex justify-between items-center py-2 px-2'>
        <div className=''>
          <img src='img/logo/MyDesaCare.svg' alt='MyDesaCareLogo' />
        </div>
        <Link href="settings">
          <a className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-purple-200'>
            <i class='fas fa-user-cog p-2 text-xs ' />
          </a>
        </Link>
      </div>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Hydrate state={pageProps.dehydratedState}>
                <RouteGuard>
                  <Component {...pageProps} />
                </RouteGuard>
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} />
            </Layout>
          </QueryClientProvider>
        </RecoilRoot>
      </ErrorBoundary>
      {/* Mobile Tabs */}
   
      <div className='w-full md:hidden sticky bottom-0 '>
        <div className=' flex justify-center items-center md:hidden w-full sticky bottom-0 border rounded bg-white py-4 px-2 divide-x '>
        {mobiletabs.map(({links, name, icons}) => (
          <Link href={links}>
          <a className={'flex flex-col justify-center items-center w-1/2 py-2 px-2'}>
            <span className='flex items-center justify-center w-4 h-4 p-4 rounded-full bg-purple-200'>
              {icons}
            </span>
            <h5 className='text-xs font-semibold py-2'>{name}</h5>
          </a>
          </Link>
        ))}
          
        </div>
      </div>
      <Script src='https://unpkg.com/flowbite@1.3.3/dist/flowbite.js'></Script>
    </React.Fragment>
  );
}

export default appWithTranslation(MyApp);
