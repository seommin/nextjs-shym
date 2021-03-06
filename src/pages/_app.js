import React, { useEffect, useState } from "react";
import ProTypes from "prop-types";
import Head from "next/head";

import "@src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "@src/components/Header";
import Footer from "@src/components/Footer";

const App = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(true);
  const kakaoKey = "bf518e7d3394b62bf2177d4b9524f6fe";

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>쉼펜션야영장</title>
        <meta name="description" content="쉼펜션야영장" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>
      <script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services`}
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      {isLoading && (
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <div>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      )}
    </>
  );
};

App.prototype = {
  Component: ProTypes.elementType.isRequired,
};

export default App;
