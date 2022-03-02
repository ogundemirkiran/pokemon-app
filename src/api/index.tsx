import { IPokemon } from "../interfaces/pokemon";
import AxiosData from "./api";
import { API_ENDPOINT } from "./endpoints";

export const API = Object.freeze({
  POKEMON_LIST: async () =>
    await AxiosData(API_ENDPOINT.pokemons.get).then((data) => data),

  POKEMON_LIST_GENERATION: async (url: string) =>
    await AxiosData(API_ENDPOINT.pokemons.generation(url)).then((data) => data),
});
