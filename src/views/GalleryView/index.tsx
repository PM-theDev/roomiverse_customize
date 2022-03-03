import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import axios from "axios";

import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";


import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
import styles from "./index.module.css";
import React from "react";

const walletPublicKey = "";
const uri = ""
const fetchNftMeta = (uri) => {
  return axios
    .get(`${uri}`)
    .then(({ data }) => {
      // console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const getFullattributes = (nftAttribute) => {
  const { collection: { name, family } } = nftAttribute;
  return `${name}: ${family}`
}

const nftAttribute = [];
var Rug = [];
var Door = [];
var Sofa = [];
var Stuff = [];
var Floor = [];
var View = [];
var Wall = [];
var Lamp = [];


export const GalleryView: FC = ({ }) => {
  const { connection } = useConnection();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);
  const { publicKey } = useWallet();

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  const [RugDetail, setRugDetail] = useState('RMV-Condo-Rug');
  const [WallDetail, setWallDetail] = useState('RMV-Condo-Wall');
  const [DoorDetail, setDoorDetail] = useState('RMV-Condo-Door');
  const [SofaDetail, setSofaDetail] = useState('RMV-Condo-Sofa');
  const [StuffDetail, setStuffDetail] = useState('RMV-Condo-Stuff');
  const [LampDetail, setLampDetail] = useState('RMV-Condo-Lamp');
  const [ViewDetail, setViewDetail] = useState('RMV-Condo-Window');
  const [FloorDetail, setFloorDetail] = useState('RMV-Condo-Floor');

  const [RugState, setRugState] = useState(0);
  const [WallState, setWallState] = useState(0);
  const [DoorState, setDoorState] = useState(0);
  const [SofaState, setSofaState] = useState(0);
  const [StuffState, setStuffState] = useState(0);
  const [LampState, setLampState] = useState(0);
  const [ViewState, setViewState] = useState(0);
  const [FloorState, setFloorState] = useState(0);


  function onUseWalletClick() {

    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }

    {
      nfts?.map((nft: any, index: number) => (

        fetchNftMeta(nft.data.uri).then((nftMeta) => {
          nftAttribute = nftMeta.attributes
          console.log(nftMeta.name, nftAttribute);
          let i = 1
          for (i = 1; i < nftAttribute.length; i++) {
            if (nftAttribute[i].trait_type === "Rug")
              Rug.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "Door")
              Door.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "Wall")
              Wall.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "Floor")
              Floor.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "Sofa")
              Sofa.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "Lamp")
              Lamp.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "Stuff")
              Stuff.push(nftAttribute[i].value);
            if (nftAttribute[i].trait_type === "View")
              View.push(nftAttribute[i].value);
          }
        })
      )
      )
    }

    Rug = [...new Set(Rug)];
    Door = [...new Set(Door)];
    Wall = [...new Set(Wall)];
    Floor = [...new Set(Floor)];
    Sofa = [...new Set(Sofa)];
    Lamp = [...new Set(Lamp)];
    Stuff = [...new Set(Stuff)];
    View = [...new Set(View)];

    setWallDetail(Wall[WallState].replace(".jpg", "").replace(".png", ""))
    setDoorDetail(Door[DoorState].replace(".jpg", "").replace(".png", ""))
    setFloorDetail(Floor[FloorState].replace(".jpg", "").replace(".png", ""))
    setViewDetail(View[ViewState].replace(".jpg", "").replace(".png", ""))
    setStuffDetail(Stuff[StuffState].replace(".jpg", "").replace(".png", ""))
    setSofaDetail(Sofa[SofaState].replace(".jpg", "").replace(".png", ""))
    setRugDetail(Rug[RugState].replace(".jpg", "").replace(".png", ""))
    setLampDetail(Lamp[LampState].replace(".jpg", "").replace(".png", ""))
    return { Rug, Door, Wall, Floor, Sofa, Lamp, Stuff, View };
  }

  Rug = [...new Set(Rug)];
  Door = [...new Set(Door)];
  Wall = [...new Set(Wall)];
  Floor = [...new Set(Floor)];
  Sofa = [...new Set(Sofa)];
  Lamp = [...new Set(Lamp)];
  Stuff = [...new Set(Stuff)];
  View = [...new Set(View)];



  function nextRug() {
    let next_num = RugState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Rug.length ? next_num : 0
    setRugState(new_current)
    setRugDetail(Rug[RugState].replace(".jpg", "").replace(".png", ""))

  }
  function nextFloor(Floor: any, FloorState: number) {
    let next_num = FloorState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Floor.length ? next_num : 0
    setFloorState(new_current)
    setFloorDetail(Floor[FloorState].replace(".jpg", "").replace(".png", ""))
  }

  function nextDoor(Door: any, DoorState: number) {
    let next_num = DoorState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Door.length ? next_num : 0
    setDoorState(new_current)
    setDoorDetail(Door[DoorState].replace(".jpg", "").replace(".png", ""))
  }


  function nextSofa(Sofa: any, SofaState: number) {
    let next_num = SofaState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Sofa.length ? next_num : 0
    setSofaState(new_current)
    setSofaDetail(Sofa[SofaState].replace(".jpg", "").replace(".png", ""))
  }

  function nextStuff(Stuff: any, StuffState: number) {
    let next_num = StuffState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Stuff.length ? next_num : 0
    setStuffState(new_current)
    setStuffDetail(Stuff[StuffState].replace(".jpg", "").replace(".png", ""))
  }

  function nextView(View: any, ViewState: number) {
    let next_num = ViewState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < View.length ? next_num : 0
    setViewState(new_current)
    setViewDetail(View[ViewState].replace(".jpg", "").replace(".png", ""))
  }


  function nextLamp(Lamp: any, LampState: number) {
    let next_num = LampState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Lamp.length ? next_num : 0
    setLampState(new_current)
    setLampDetail(Lamp[LampState].replace(".jpg", "").replace(".png", ""))
  }

  function nextWall(Wall: any, WallState: number) {
    let next_num = WallState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Wall.length ? next_num : 0
    setWallState(new_current)
    setWallDetail(Wall[WallState].replace(".jpg", "").replace(".png", ""))
  }

  return (
    <div>
      <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <div className={styles.container}>
          <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
              </button>
            </div>
            <div className="flex-1 px-2 mx-2">
              <div className="text-sm breadcrumbs">
                <ul className="text-xl">
                  <li>
                    <Link href="https://roomiverse.world">
                      <a>Roomiverse</a>
                    </Link>
                  </li>
                  <li>
                    <span className="opacity-40">Room Customization</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-none">
              <WalletMultiButton className="btn btn-ghost" />
            </div>
          </div>

          <div className="text-center pt-2">
            <div className="hero min-h-16 p-0 pt-10">
              <div className="text-center hero-content w-full">
                <div className="w-full">
                  <h1 className="mb-5 text-5xl">
                    Customize your Roomiverse <SolanaLogo />
                  </h1>

                  <div className="w-full min-w-full">
                    <p className="mb-5">
                      Here we come! Connect your wallet and customize your desired room!
                    </p>
                    <div>
                      <div className="form-control mt-8">
                        <label className="input-group input-group-vertical input-group-lg">
                          <span>Current wallets</span>
                          <div className="flex space-x-2">
                            <input
                              placeholder='Connect your wallet and Press "Use Wallet Address"'
                              className="w-full input input-bordered input-lg"
                              value={walletToParsePublicKey}
                              style={{
                                borderRadius:
                                  "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)",
                              }}
                            />

                            <SelectAndConnectWalletButton
                              onUseWalletClick={onUseWalletClick}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="container_customize">
        <div id="background_customize">
          <div id="Wall" className={WallDetail}></div>
          <div id="Floor" className={FloorDetail}></div>
          <div id="Door" className={DoorDetail}></div>
          <div id="Window" className={ViewDetail}></div>
          <div id="Lamp" className={LampDetail}></div>
          <div id="Rug" className={RugDetail}></div>
          <div id="Sofa" className={SofaDetail}></div>
          <div id="Stuff" className={StuffDetail}></div>
        </div>
      </div>
      <button id="nextRug" disabled={Rug.length === 1} onClick={() => nextRug(Rug, RugState)}>Next Rug (Available: {Rug.length})</button>
      <button id="nextFloor" disabled={Floor.length === 1} onClick={() => nextFloor(Floor, FloorState)}>Next Floor (Available: {Floor.length})</button>
      <button id="nextWall" disabled={Wall.length === 1} onClick={() => nextWall(Wall, WallState)}>Next Wall (Available: {Wall.length})</button>
      <button id="nextLamp" disabled={Lamp.length === 1} onClick={() => nextLamp(Lamp, LampState)}>Next Lamp (Available: {Lamp.length})</button>
      <button id="nextSofa" disabled={Sofa.length === 1} onClick={() => nextSofa(Sofa, SofaState)}>Next Sofa (Available: {Sofa.length})</button>
      <button id="nextStuff" disabled={Stuff.length === 1} onClick={() => nextStuff(Stuff, StuffState)}>Next Stuff (Available: {Stuff.length})</button>
      <button id="nextView" disabled={View.length === 1} onClick={() => nextView(View, ViewState)}>Next View (Available: {View.length})</button>
      <button id="nextDoor" disabled={Door.length === 1} onClick={() => nextDoor(Door, DoorState)}>Next Door (Available: {Door.length})</button>
      <button id="mintnew" disabled={true}>Mint this room as NFT <br></br>(Coming soon)</button>
    </div>

  );
};
