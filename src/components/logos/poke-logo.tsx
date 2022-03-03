import Image from "next/image";
import React from "react";
import styles from "./poke-logo.module.css";

export default function PokeLogo() {
  return (
    <div className={styles.logoContainer}>
      <Image src="/pokemonLogo.png" alt="style logo" width={250} height={100} />
    </div>
  );
}
