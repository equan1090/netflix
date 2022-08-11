const ADD_PROFILE = 'profile/ADD_PROFILE';
const GET_PROFILE = 'profile/GET_PROFILE'
const addProfileAction = (profile) => ({
    type: ADD_PROFILE,
    payload: profile
})

const getProfileAction = (profile) => ({
    type: GET_PROFILE,
    payload: profile
})


export const getAllProfileThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/profiles`)

    if(response.ok) {
        const data = await response.json();
        dispatch(getProfileAction(data));
    }
    else{
        return 'Error in getALLProfile store'
    }

}

export const addProfileThunk = (profile, id) => async (dispatch) => {
    console.log('Got to add profile thunk')
    const res = await fetch(`/api/users/${id}/profiles`, {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log('response', res)

    if (res.ok) {
        const new_profile = await res.json();
        console.log('New_profile', new_profile)
        dispatch(addProfileAction(new_profile))
    }
}

const initialState = {};

export default function profileReducer(state = initialState, action) {
    let newState = {...state}
    switch(action.type) {
        case ADD_PROFILE:
            return {
                newState,
                profiles: action.payload
            };

            case GET_PROFILE:
                return {
                    profiles: action.payload
                }
    }
}
