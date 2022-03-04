import {
    createSlice,
    createAsyncThunk
  } from '@reduxjs/toolkit';
import { API } from '../../api';



  export const fetchPokemonList = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (url?:string) => {
     

        if(url === undefined){
          let response = await API.POKEMON_LIST()
          return response?.data

        }else{
           
            let response = await API.POKEMON_LIST_GENERATION(url)
             return response?.data
        }
      
    }
  )
  

  
  export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data:{},
        dataList: <any>[],
        status: "idle",
        error: <any>false,
        filteredData: <any>[]


    },
    reducers: {
      filteredPokemon: (state, action) => {
          state.filteredData = action?.payload
        
      },
   
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPokemonList.pending, (state, action) => {
           state.status = "loading"
          })
          .addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.data = action?.payload
            let check = state.dataList[0]?.name === action?.payload?.results[0]?.name
            check === false &&  (state.dataList = [...state.dataList , ...action?.payload?.results])

           
          })
          .addCase(fetchPokemonList.rejected, (state, action) => {
            state.status = "failed"
            state.error = action?.error?.message;
           

           
          })
      },
  });

  export const {filteredPokemon } = pokemonSlice.actions;

  export const dataSelector = (state:any) => state.pokemon.data;
  export const dataListSelector = (state:any) => state.pokemon.dataList;
  export const statusSelector = (state:any) => state.pokemon.status;
  export const filteredSelector = (state:any) => state.pokemon.filteredData;
  export const errorSelector = (state:any) => state.pokemon.error;
  
  
  export default pokemonSlice.reducer;