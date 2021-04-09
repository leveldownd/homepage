import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import strings from "../typed/strings";
import Typed from "react-typed";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LevelDown</title>
        <link rel="icon" href="/images/NextLink.png" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.rounded}
          src="/images/NextLink.png"
          width="150"
          height="150"
        ></Image>
        <Typed
          className={styles.title}
          strings={strings}
          typeSpeed={100}
          backSpeed={50}
        />
        <p className={styles.description}>
          We are dedicated to provide people with open-source software that is
          made with peace of mind.
        </p>
      </main>
    </div>
  );
}
