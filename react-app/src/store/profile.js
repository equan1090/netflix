const ADD_PROFILE = 'profile/ADD_PROFILE';
const GET_PROFILE = 'profile/GET_PROFILE'
const CHOOSE_PROFILE = 'profile/CHOOSE'

const addProfileAction = (profile) => ({
    type: ADD_PROFILE,
    payload: profile
})

const getProfileAction = (profile) => ({
    type: GET_PROFILE,
    payload: profile
})

const chooseProfileAction = (profile) => ({
    type: CHOOSE_PROFILE,
    payload: profile
})
//Profile ID
// export const chooseProfileThunk = (id) = > async (dispatch) => {
//     const response = await fetch(`/api/`)
// }

// User Id
export const getAllProfileThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/profiles`)

    if(response.ok) {
        const data = await response.json();
        console.log('GetallprofileThunk', data)
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
        console.log('In addprofile thunk, got new profile', new_profile)
        dispatch(addProfileAction(new_profile))
    }
}

const initialState = {};

export default function profileReducer(state = initialState, action) {
    let newState = {...state}
    console.log('new state', newState)
    switch(action.type) {
        case ADD_PROFILE:
            return {
                newState,
                profiles: action.payload
            };

            case GET_PROFILE:
                return {
                    newState,
                    profiles: action.payload
                }
    }
}
