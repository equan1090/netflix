import { combineReducers } from "redux";

//Profiles
const ADD_PROFILE = 'profile/ADD_PROFILE';
const GET_PROFILE = 'profile/GET_PROFILE'
const CHOOSE_PROFILE = 'profile/CHOOSE'
const EDIT_PROFILE = 'profile/EDIT_PROFILE'
const DELETE_PROFILE = 'profile/DELETE_PROFILE'

//Favorites
const ADD_FAVORITE = 'favorite/ADD_FAVORITE'
const DELETE_FAVORITE = 'favorite/DELETE_FAVORITE'
const GET_FAVORITE = 'favorite/GET_FAVORITE'

//Favorite Actions
const addFavoriteAction = (favorite) => ({
    type: ADD_FAVORITE,
    payload: favorite
})

const deleteFavoriteAction = (favorite) => ({
    type: DELETE_FAVORITE,
    payload: favorite
})

const getFavoriteAction = (favorite) => ({
    type: GET_FAVORITE,
    payload: favorite
})

// Favorite Thunks
export const addFavoriteThunk = (id, anime) => async (dispatch) => {

    const res = await fetch(`/api/profile/${id}/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(anime)
    })

    if(res.ok) {
        const data = await res.json();
        dispatch(addFavoriteAction(data))
    }else {
        return ['Error in addFavoriteThunk']
    }
}
export const getFavoriteThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/profile/${id}/favorites`)
    if(res.ok) {
        const data = await res.json();
        dispatch(getFavoriteAction(data))
    }else {
        return ['Error in getFavoriteThunk']
    }
}

export const deleteFavoriteThunk = (pro_id, fav_id) => async (dispatch) => {
    const res = await fetch(`/api/profile/${pro_id}/favorites/${fav_id}`, {
        method: "DELETE"
    })

    if(res.ok) {
        const data = await res.json();
        dispatch(deleteFavoriteAction(data))
        dispatch(getFavoriteThunk(pro_id))
    }else {
        return ['Error in deleteFavoriteThunk']
    }
}
/*
-------------------------------------------------------Profile Actions-------------------------------------------------------
*/

const addProfileAction = (profile) => ({
    type: ADD_PROFILE,
    payload: profile
})

const getProfileAction = (profile) => ({
    type: GET_PROFILE,
    payload: profile
})
const editProfileAction = (profile) => ({
    type: EDIT_PROFILE,
    payload: profile,
})

const chooseProfileAction = (profile) => ({
    type: CHOOSE_PROFILE,
    payload: profile
})
const deleteProfileAction = (profile) => ({
    type: DELETE_PROFILE,
    payload: profile
})
//Profile Thunks
export const chooseProfileThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/profile/${id}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(chooseProfileAction(data))
    }else {
        return ['Error in chooseProfileThunk']
    }
}

// User Id
export const getAllProfileThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/profiles`)
    if(response.ok) {
        const data = await response.json();

        dispatch(getProfileAction(data));
    }
    else{
        return ['Error in getAllProfileThunk']
    }

}

export const addProfileThunk = (profile, id) => async (dispatch) => {

    const res = await fetch(`/api/users/${id}/profiles`, {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (res.ok) {

        const new_profile = await res.json();
        dispatch(addProfileAction(new_profile))
        dispatch(getAllProfileThunk(id))

    }
}

export const editProfileThunk = (profile) => async (dispatch) => {
    const res = await fetch(`/api/profile/${profile.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
    })

    if(res.ok) {
        const updatedProfile = await res.json();
        dispatch(editProfileAction(updatedProfile))
        return updatedProfile
    }
}

export const deleteProfileThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/profile/${id}`, {
        method: "DELETE"
    })

    if(res.ok) {
        const data = await res.json();
        dispatch(deleteProfileAction(data))
    }else {
        return ['Error in deleteProfileThunk']
    }
}
const initialState = {profiles: null};

function profiles(state = initialState, action) {


    switch(action.type) {
            case ADD_PROFILE:
                console.log('state', state)
                return {
                    ...state,
                    profiles: action.payload
                };

            case GET_PROFILE:
                return {
                    ...state,
                    profiles: action.payload
                }

            case EDIT_PROFILE:
                return {
                    ...state,
                    profiles: action.payload
                }
            case CHOOSE_PROFILE:
                return {
                    ...state,
                    profiles: action.payload
                }
            default:
                return state;
    }
}


function favorite(state = { favorites: {favorites: [] }}, action) {
    switch (action.type) {
      case ADD_FAVORITE:
        return {
          ...state,
          favorites: { ...state.favorites, favorites: [...state.favorites.favorites, action.payload] },
        };
      case GET_FAVORITE:
        return {
          ...state,
          favorites: action.payload,
        };
      case DELETE_FAVORITE:
        console.log('delete_favorite', action.payload)
        return {
          ...state,
          favorites: { ...state.favorites, favorites: state.favorites.favorites.filter((favorite) => favorite.id !== action.payload) },
        };
      default:
        return state;
    }
  }
const rootReducer = combineReducers({
    profiles,
    favorite
})


export default rootReducer;
