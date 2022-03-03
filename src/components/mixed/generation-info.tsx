import React from "react";
import styles from "./generation-info.module.css";

interface GenerationInfoType {
  dataListInfo?: any;
  dataListLength?: number;
}

export default function GenerationInfo({
  dataListInfo,
  dataListLength,
}: GenerationInfoType) {
  return (
    <div className={styles.generationContainer}>
      <h4 className={styles.pokeGeneration}>Generation {dataListInfo} </h4>
      <p className={styles.pokeCount}> {dataListLength} Pokemon </p>
    </div>
  );
}
