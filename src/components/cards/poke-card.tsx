import { useRouter } from "next/router";
import React from "react";
import styles from "./poke-card.module.css";

interface PokeCardType {
  index?: any;
  name?: string;
  borderNone?: boolean;
}

export default function PokeCard({ index, name, borderNone }: PokeCardType) {
  const router = useRouter();

  return (
    <div
      className={borderNone ? styles.pokeBorderNone : styles.pokeContent}
      onClick={borderNone ? () => {} : () => router.push(`/pokemon/${name}`)}
    >
      <>
        <img
          className={styles.pokeGif}
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          alt={name}
        />

        <p className={styles.pokeName}> {name} </p>
      </>
    </div>
  );
}
