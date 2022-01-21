import Head from "next/head";
import {Feed, Header, Modal} from "../components";


export default function Home() {
  return (
    <div className="">
      
      <Head>
        <title>Instagram 2.0 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Modal />

      <Header />

      <Feed />

      
    </div>
  )
}
