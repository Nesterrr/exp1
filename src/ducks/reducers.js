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
            return action.data.results;
        default:
            return state;
    }
}

export const filter = (state = { name: 'ALL'}, action) => {
    switch(action.type) {
        case 'FILTERSTATE/NAME':
            return action.name;
        default:
            return state;
    }
}