const SEARCH_ANIME = 'search/SEARCH_ANIME';

const searchAnimeAction = (anime) => ({
    type: SEARCH_ANIME,
    payload: anime
})

export const searchAnimeThunk = (search) => async (dispatch) => {
    const res = await fetch(`/api/anime/search/${search}`)

    if (res.ok) {
        const data = await res.json()
        dispatch(searchAnimeAction(data))
    }else {
        return ["Error in searchAnimeThunk"]
    }

}


function searchReducer(state = {}, action) {
    switch (action.type) {
        case SEARCH_ANIME:
            return {...state, search: action.payload}
        default:
            return state;
    }
}
export default searchReducer;
