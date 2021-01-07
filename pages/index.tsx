import { withUrqlClient } from "next-urql";
import Head from "next/head";
import { useQuery } from "urql";
import { createUrqlClient } from "../src/utils/createUrqlClient";
import styles from "../styles/Home.module.css";

const QUERY = `query {
  mockQuery {
    id
    mock
  }
}`;

function Home() {
  const [{ data }] = useQuery({ query: QUERY });

  return (
    <div className={styles.container}>
      <Head>
        <title>Mploy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default withUrqlClient(createUrqlClient, { ssr: false })(Home);
