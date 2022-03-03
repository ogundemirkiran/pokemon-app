import React from "react";
import { API } from "../../src/api";
import PokeDetailCard from "../../src/components/cards/poke-detail-card";
import Loading from "../../src/components/loading";

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const result = await API.POKEMON_BY_ID(id);

  return {
    props: {
      datasetDetail: result?.data || null,
      dataSetId: id,
    },
  };
}

export default function PokemonById({ dataSetId, datasetDetail }: any) {
  return (
    <div>
      {datasetDetail === null ? (
        <Loading />
      ) : (
        <PokeDetailCard dataSetId={dataSetId} datasetDetail={datasetDetail} />
      )}
    </div>
  );
}
