import styles from "./index.module.css";
import Head from 'next/head'
import Header from "../header";
import Footer from "../footer";

export default function Layout({ children } : any) {
  return (
    <div className={styles.container}>      
      <Head>
        <meta name="description" content="WeCode is a leading Software Product Development Company that offers product engineering and software development services for startups & enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
