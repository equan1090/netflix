const GET_TOP_ANIME = 'anime/GET_TOP_ANIME';
const GET_TRENDING_ANIME = 'anime/GET_TRENDING_ANIME'
const GET_ACTION_GENRE = 'anime/GET_ACTION_GENRE'
const GET_ROMANCE_GENRE = 'anime/GET_ROMANCE_GENRE'
const GET_COMEDY_GENRE = 'anime/GET_COMEDY_GENRE'
const getActionGenreAction = (anime) => ({
    type :GET_ACTION_GENRE,
    payload: anime
})
const getRomanceGenreAction = (anime) => ({
    type: GET_ROMANCE_GENRE,
    payload: anime
})

const getComedyGenreAction = (anime) => ({
    type: GET_COMEDY_GENRE,
    payload: anime
})

const getTopAnimeAction = (anime) => ({
    type: GET_TOP_ANIME,
    payload: anime
})
const getTrendingAnimeAction = (anime) => ({
    type: GET_TRENDING_ANIME,
    payload: anime
})


export const getAnimeGenreThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/anime/${id}/genre`)
    if (res.ok) {
        const data = await res.json()
        if (id === 1) {
            dispatch(getActionGenreAction(data))
        }
        if (id === 4){
            dispatch(getComedyGenreAction(data))
        }
        if (id === 22) {
            dispatch(getRomanceGenreAction(data))
        }
    }else {
        return ["Error in GetAnimeGenre Thunk"]
    }
}

export const getTrendingAnimeThunk = () => async(dispatch) => {
    const res = await fetch(`/api/anime/trending`)
    if (res.ok) {
        const data = await res.json();
        dispatch(getTrendingAnimeAction(data))
    }else {
        return ["Error in get Trending Anime Thunk"]
    }


}

export const getTopAnimeThunk = () => async (dispatch) => {
    const response = await fetch(`/api/anime/top`)

    if(response.ok) {
        
        const data = await response.json();
        dispatch(getTopAnimeAction(data));
    }
    else{
        return ['Error in getTopAnimeThunk']
    }

}

const initialState = {
    rating: null,
    trending: null,
    actionAnime: null,
    romance: null,
    comedy: null,
}

function animeReducer(state = initialState, action) {

    switch(action.type) {
        case GET_TOP_ANIME:
            return {...state, rating: action.payload}

        case GET_TRENDING_ANIME:
            return {...state, trending: action.payload}

        case GET_ACTION_GENRE:
            return {...state, actionAnime: action.payload}

        case GET_ROMANCE_GENRE:

            return {...state, romance: action.payload}

        case GET_COMEDY_GENRE:
            return {...state, comedy: action.payload}
        default:
            return state;
    }

}

export default animeReducer;
