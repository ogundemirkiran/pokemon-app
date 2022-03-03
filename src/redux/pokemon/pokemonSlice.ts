import {
    createSlice,
    createAsyncThunk
  } from '@reduxjs/toolkit';
import { error } from 'console';
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
      console.log(url)
     

        if(url === undefined){
          let response = await API.POKEMON_LIST()
          return response.data

        }else{
           
            let response = await API.POKEMON_LIST_GENERATION(url)
            return response.data
        }
      
    }
  )
  

  
  export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data:{},
        dataList: <any>[],
        status: "idle",
        error: <any>null

    },
    reducers: {
      getAllPokemon: (state, action) => {
          console.log(action)
        
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
            let check = state.dataList[0]?.name === action?.payload?.results[0]?.name
            check === false &&  (state.dataList = [...state.dataList , ...action.payload.results])

           
          })
          .addCase(fetchPokemonList.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message;
           

           
          })
      },
  });

  export const {getAllPokemon } = pokemonSlice.actions;

  export const dataSelector = (state:any) => state.pokemon.data;
  export const dataListSelector = (state:any) => state.pokemon.dataList;
  export const statusSelector = (state:any) => state.pokemon.status;
  
  
  export default pokemonSlice.reducer;