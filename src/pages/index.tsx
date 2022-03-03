import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";
import React from 'react';
import reportWebVitals from './reportWebVitals';

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Roomiverse swapable!</title>
        <meta
          name="description"
          content="This site will fly high 🦤"
        />
      </Head>
      < GalleryView/>
    </div>
  );
};

export default Home;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();