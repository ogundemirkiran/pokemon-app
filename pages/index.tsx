import type { NextPage } from "next";
import Link from "next/link";
import MainBtn from "../src/components/buttons/main-btn";
import useWindowSize from "../src/hooks/useWindowSize";

import styles from "./index.module.css";
const Home: NextPage = () => {
  const size = useWindowSize();

  return (
    <div
      style={{
        height: size.height,
        backgroundColor: "#000000",
      }}
    >
      <div className={styles.indexPhoto}>
        <Link href="/pokemon">
          <MainBtn />
        </Link>
      </div>
    </div>
  );
};

export default Home;
