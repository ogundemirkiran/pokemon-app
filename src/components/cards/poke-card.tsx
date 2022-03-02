import React from "react";
import styles from "./poke-card.module.css";

interface PokeCardType {
  index?: any;
  name?: string;
  src?: string;
}

export default function PokeCard({ index, name, src }: PokeCardType) {
  return (
    <div className={styles.pokeContent} key={index}>
      <img
        className={styles.pokeGif}
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
        alt={name}
      />

      <p className={styles.pokeName}> {name} </p>
    </div>
  );
}
