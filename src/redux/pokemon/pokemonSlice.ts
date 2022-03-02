import {
    createSlice,
    createAsyncThunk
  } from '@reduxjs/toolkit';
import { API } from '../../api';


//   export const getTodosAsync = createAsyncThunk(
//     "todos/getTodosAsync",
//     async () => {
//       const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`);
//       return await res.json();
//     }
//   );

  export const fetchPokemonList = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (url?:string) => {
        if(url){
            let response = await API.POKEMON_LIST_GENERATION(url)
            return response.data

        }else{
            let response = await API.POKEMON_LIST()
            return response.data
        }
      
    }
  )
  

  
  export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data:{},
        dataList: <any>[],
        status: ""
    },
    reducers: {
      getAllPokemon: (state, action) => {
        //   console.log(action)
        // state.dataList = <any>[action.payload  ]
      },
   
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPokemonList.pending, (state, action) => {
           state.status = "loading"
           console.log(action)
          })
          .addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.data = action.payload
            state.dataList = [...state.dataList , ...action.payload.results]
           console.log(action.payload.result)

           
          })
          .addCase(fetchPokemonList.rejected, (state, action) => {
            state.status = "failed"
           console.log(action)

           
          })
      },
  });

  export const {getAllPokemon } = pokemonSlice.actions;

  export const dataSelector = (state:any) => state.pokemon.data;
  export const dataListSelector = (state:any) => state.pokemon.dataList;
  export const statusSelector = (state:any) => state.pokemon.status;
  
  
  export default pokemonSlice.reducer;