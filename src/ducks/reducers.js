export const load = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_DATA':
            return state;
        default:
            return state;
    }
}

export const toStore = (state = {content: {}}, action) => {
    switch(action.type) {
        case 'TO_STORE':
            //console.log(action.data.results);
            return Object.assign({}, state, action.data.results);
        default:
            return state;
    }
}
