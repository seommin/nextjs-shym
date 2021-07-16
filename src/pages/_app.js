import React, { useEffect, useState } from "react";
import ProTypes from "prop-types";
import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  const [isLoading, setLoading] = useState(true);

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
        ></link>
      </Head>
      <Script
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
