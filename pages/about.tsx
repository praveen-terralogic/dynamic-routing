import Head from "next/head";
import styles from "../styles/Global.module.css";
import Header from "../component/header";

export default function About() {
  return (
    <>
      <Head>
        <title>Dynamic Routing App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>About Page</h1>
      </main>
    </>
  );
}
