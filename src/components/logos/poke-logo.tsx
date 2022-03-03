import React from "react";
import styles from "./poke-logo.module.css";

export default function PokeLogo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logo} src="/pokemonLogo.png" alt="style logo" />
    </div>
  );
}
