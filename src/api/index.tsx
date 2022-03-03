import AxiosData from "./api";
import { API_ENDPOINT } from "./endpoints";

export const API = Object.freeze({
  POKEMON_LIST: async () =>
    await AxiosData(API_ENDPOINT.pokemons.get).then((data) => data),

  POKEMON_LIST_GENERATION: async (url: string) =>
    await AxiosData(API_ENDPOINT.pokemons.generation(url)).then((data) => data),

  POKEMON_BY_ID: async (id: string) =>
    await AxiosData(API_ENDPOINT.pokemons.getById(id)).then((data) => data),
});
