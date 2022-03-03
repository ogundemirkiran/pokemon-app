const BASE_URL = process.env.ENV_API_URL || "https://pokeapi.co/api/v2";

export const API_ENDPOINT = Object.freeze({
  pokemons: {
    get: {
      url: `${BASE_URL}/pokemon`,
      method: "GET",
    },
    generation: (url: string) => {
      return {
        url: url,
        method: "GET",
      };
    },
    getById: (id: string) => {
      return {
        url: `${BASE_URL}/pokemon/${id}`,
        method: "GET",
      };
    },
  },
});
