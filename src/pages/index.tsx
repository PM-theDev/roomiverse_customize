import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";
import React from 'react';

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