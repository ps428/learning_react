export const initialState = {
    user: null,
    playlist: {},
    playing: false,
    item: null,
    token: null
    //TODO  post developement
    // token: 'BQCNwpqMQ_CZH4kkcV05rK-0SW5iE7_uzMzDxpJjKoSOBvIciN9Vb2It82Pf5oeB5yn6apG513ErnlXHOMXDV2RpBmsq_MwkzeodMUHy4_0Hd1HaUzLF91NUXW-uta6zB6wU9Wz2CUZWTNjMuQCMB48X0NHbuVxrK2ul2042QTo5fSW8LD3X'
};

const reducer = (state, action) => {
    // for debugging
    console.log(action);

    // action->type, [payload] 
    // [payload] means dynamic

    switch(action.type) {
        case 'SET_USER':
            return{
                //keep whatever was in the current state
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }

}

export default reducer;