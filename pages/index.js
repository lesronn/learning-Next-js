import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dummy List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Kofi, kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi
          kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi
          kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi
          kofi kofi kofi kofi kofi kofi kofi kofi kofi
        </p>
        <p className={styles.text}>
          Kofi, kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi
          kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi
          kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi kofi
          kofi kofi kofi kofi kofi kofi kofi kofi kofi
        </p>
        <Link href="/dummy">
          <a className={styles.btn}>See Dummy Listing</a>
        </Link>
      </div>
    </>
  );
}
