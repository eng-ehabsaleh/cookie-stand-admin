import React from "react";
import Head from "next/head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
export default function CookieStandAdmin() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
