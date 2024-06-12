import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { css } from '@emotion/react';
// import ScrollMeter from 'scrollmeter';

import AppRoutes from '@/router/routes';
import Header from '@/router/layouts/header';
import SubHeader from '@/router/layouts/subHeader';
import Footer from '@/router/layouts/footer';

const contentArea = css`
  width: 100%;
  height: 100%;
  /* min-height: calc(100vh - 100px); */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const suspenseArea = css`
  width: 100%;
  color: #000000;
  font-size: 50px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <SubHeader />
      {/* <ScrollMeter height={10} top={50} duration={10} /> */}
      {/* <div id='scrollmeter-div' /> */}

      <div className="content-area" css={contentArea}>
        <Suspense fallback={<div css={suspenseArea}>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
