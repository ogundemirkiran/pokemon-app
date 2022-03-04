/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  dataListSelector,
  statusSelector,
  fetchPokemonList,
  dataSelector,
  filteredPokemon,
  filteredSelector,
  errorSelector,
} from "../../src/redux/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import CardPoke from "../../src/components/cards/poke-card";
import styles from "../../styles/pokemon.module.css";
import PokeLogo from "../../src/components/logos/poke-logo";
import GenerationInfo from "../../src/components/mixed/generation-info";
import NextBtn from "../../src/components/buttons/next-btn";
import { CalculationGeneration } from "../../src/utility/calculation-generation";
import Loading from "../../src/components/loading";
import PokeFilter from "../../src/components/filters/poke-filter";

export default function Pokemon() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);
  const dataList = useSelector(dataListSelector);
  const filteredData = useSelector(filteredSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;

  const [title, setTitle] = useState<any>("");

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  useEffect(() => {
    HandleOnChange();
  }, [title, dataList]);

  function showMore(e: any) {
    e.type === "click" && dispatch(fetchPokemonList(data.next));

    scroll.scrollToBottom();
  }

  function HandleOnChange() {
    let filtered = dataList.filter(
      (res: any) =>
        res.name.toLowerCase().indexOf(title.toLowerCase().trim()) > -1
    );

    dispatch(filteredPokemon(filtered));
  }

  if (error) {
    return <div> Error Message: {error} </div>;
  } else {
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

            <PokeFilter title={title} setTitle={setTitle} />
            <br />
            <br />

            <div className={styles.pokeGrid}>
              {filteredData.map((res: any, index: number) => (
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
}
