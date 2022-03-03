import React from "react";
import styles from "./close-btn.module.css";

interface CloseBtnType {
  comeBackPokemon?: any;
}

export default function CloseBtn({ comeBackPokemon }: CloseBtnType) {
  return (
    <div className={styles.closeBtn} onClick={() => comeBackPokemon()}>
      <img src="https://img.icons8.com/officexs/16/000000/delete-sign.png" />
    </div>
  );
}
