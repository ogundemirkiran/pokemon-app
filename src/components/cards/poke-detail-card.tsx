import { useRouter } from "next/router";
import React from "react";
import CloseBtn from "../buttons/close-btn";
import PokeCard from "./poke-card";
import styles from "./poke-detail-card.module.css";

interface PokeDetailCardType {
  dataSetId?: string;
  datasetDetail?: any;
}

export default function PokeDetailCard({
  dataSetId,
  datasetDetail,
}: PokeDetailCardType) {
  const router = useRouter();

  const comeBackPokemon = () => {
    return router.push("/pokemon");
  };

  return (
    <div className={styles.detailContainer}>
      <CloseBtn comeBackPokemon={comeBackPokemon} />
      <br />

      <PokeCard name={dataSetId} borderNone={true} />
      <br />
      <div className={styles.detailDesc}>
        <div>
          ID:
          <span> {datasetDetail.id} </span>
        </div>
        <br />
        <div>
          Type:
          <span>
            <ul>
              {datasetDetail.types.map((res: any, index: number) => (
                <li key={index} style={{ marginLeft: 15, marginTop: 5 }}>
                  {res.type.name}
                </li>
              ))}
            </ul>
          </span>
        </div>
        <br />

        <div>
          Height: <span> {datasetDetail.height} </span>
        </div>
        <br />

        <div>
          Habilities:
          <span>
            <ul>
              {datasetDetail.abilities.map((res: any, index: number) => (
                <li key={index} style={{ marginLeft: 15, marginTop: 5 }}>
                  {res.ability.name}
                </li>
              ))}
            </ul>
          </span>
        </div>
        <br />
      </div>
    </div>
  );
}
