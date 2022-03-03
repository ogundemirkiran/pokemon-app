import React from "react";
import styles from "./next-btn.module.css";

interface NextBtnType {
  showMore?: any;
}

export default function NextBtn({ showMore }: NextBtnType) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.center}>
          <button className={styles.btn} onClick={(e: any) => showMore(e)}>
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className={`border ${styles.svgg}`}
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span>SHOW MORE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
