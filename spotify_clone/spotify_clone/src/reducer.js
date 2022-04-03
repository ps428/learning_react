export const initialState = {
    user: null,
    playlist: {},
    playing: false,
    item: null,
    token: null
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

        default:
            return state;
    }

}

export default reducer;