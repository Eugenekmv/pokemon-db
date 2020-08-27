import axios from 'axios'

export const GetPokemonList = (page) => dispatch => {
    try {
        dispatch({
            type: 'POKEMON_LIST_LOADING'
        })
        const perPage = 12
        const offset = (perPage * page) - perPage
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${perPage}`).then(res => dispatch(GetPokeDetails(res.data)))
    } catch (e) {
        dispatch({
            type: 'POKEMON_LIST_ERROR'
        })
    }
}

const GetPokeDetails = (data) => dispatch => {
    try {
        dispatch({
            type: "RESET_DETAILS"
        })
        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: data
        });
        data.results.map(a => axios.get(a.url).then(data => dispatch({
            type: "SINGLE_POKEMON_SUCCESS",
            payload: data.data
        })).then(dispatch({
            type: "POKEMONS_LOADED"
        })))
    } catch (e) {
        dispatch({
            type: 'SINGLE_POKEMON_ERROR'
        })
    }

}

export const GetPokemonCard = (pokemon) => async dispatch => {

    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING"
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload: res.data,
            pokemonName: pokemon
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL",
        })
    }
}