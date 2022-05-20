import Header from '../header/index'
import Footer from '../footer/index'
import Head from "next/head";
export default function Layout({ children,...props }) {
  // console.log(props.color)
  return (
    <>
     <Head>
        <title>Static Website</title>
        <meta name="description" content="A simple Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header color={props.color}/>
      {/* {props.color} */}
      {children}
      <Footer />
    </>
  )
}