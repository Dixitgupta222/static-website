import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout";
import getTranslations from "../translations/translations";

export default function Home(props: any) {
  return (
    <Layout>
      <Head>
        <title>WeCode</title>
      </Head>
      <h1>{props.messages.greeting} WeCode</h1>
    </Layout>
  )
}

export async function getStaticProps(context: any) {
  const messages = getTranslations(context.locale);
  return {
    props: {
      messages: messages
    },
  };
}
