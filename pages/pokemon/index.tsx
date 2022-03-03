import React, { useEffect } from "react";
import {
  dataListSelector,
  statusSelector,
  fetchPokemonList,
  dataSelector,
} from "../../src/redux/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import CardPoke from "../../src/components/cards/poke-card";
import styles from "./pokemon.module.css";
import PokeLogo from "../../src/components/logos/poke-logo";
import GenerationInfo from "../../src/components/mixed/generation-info";
import NextBtn from "../../src/components/buttons/next-btn";
import { CalculationGeneration } from "../../src/utility/calculation-generation";
import Loading from "../../src/components/loading";

export default function Pokemon() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const dataList = useSelector(dataListSelector);
  const status = useSelector(statusSelector);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  function showMore(e: any) {
    e.type === "click" && dispatch(fetchPokemonList(data.next));
  }

  return (
    <div>
      {status === "succeeded" ? (
        <div className={styles.pokeContainer}>
          <PokeLogo />
          <br />
          <br />

          <GenerationInfo
            dataListInfo={CalculationGeneration(dataList.length)}
            dataListLength={dataList.length}
          />
          <br />
          <br />

          <div className={styles.pokeGrid}>
            {dataList.map((res: any, index: number) => (
              <CardPoke index={index + 1} name={res.name} key={index} />
            ))}
          </div>
          <br />
          <br />
          <NextBtn showMore={showMore} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}