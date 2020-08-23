const initialState = {
    data: [],
    error: '',
    loading: false,
    details: []
}

const PokemonListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state, loading: true, error: ''
            }

            case "POKEMON_LIST_ERROR":
                return {
                    ...state, loading: false, error: "PokemonList error"
                }

                case "POKEMON_LIST_SUCCESS":
                    return {
                        ...state, loading: false, data: action.payload, error: ''
                    }
                    case "SINGLE_POKEMON_SUCCESS":
                        return {

                            ...state, loading: false, details: [...state.details, action.payload], error: ''
                        }


                        case "RESET_DETAILS":
                            return {
                                ...state, details: []
                            }

                            default:
                                return state
    }
}

export default PokemonListReducer