import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LevelDown</title>
        <link rel="icon" href="images/leveldown.png" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.rounded}
          src="/images/NextLink.png"
          width="500"
          height="500"
        ></Image>
        <h1 className={styles.title}>Welcome to LevelDown!</h1>

        <p className={styles.description}>Coming soon! </p>
      </main>
    </div>
  );
}
