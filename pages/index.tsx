import NavBottom from "../components/nav-bottom";
import SearchBox from "../components/search-box";
import Head from 'next/head'
import Box from "../components/box";

export default function IndexPage() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
      </Head>
      <SearchBox />
      <div className="mt-8 mx-4">
        <img className="w-full h-auto" src="/assets/img/branding.png" />
      </div>
      <div className="mt-8 mx-4">
        <div className="h-6 w-32" style={{ background: "#C4C4C4" }}></div>
      </div>
      <div className="mt-8 mx-4 grid grid-cols-2 gap-4">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </>
  )
}
