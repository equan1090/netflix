const GET_ANIME = 'anime/GET_ANIME';

const getAnimeAction = (anime) => ({
    type: GET_ANIME,
    payload: anime
})


export const getTopAnimeThunk = () => async (dispatch) => {
    const response = await fetch(`/api/anime/top`)
    console.log('inside getTopAnimeThunk')
    if(response.ok) {
        console.log('Got response from getTopAnimeTHunk')
        const data = await response.json();
        dispatch(getAnimeAction(data));
    }
    else{
        return ['Error in getTopAnimeThunk']
    }

}

const initialState = {anime:null}

function animeReducer(state = initialState, action) {

    switch(action.type) {
        case GET_ANIME:
            return {...state, anime: action.payload}

        default:
            return state;
    }

}

export default animeReducer;
