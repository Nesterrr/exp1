
export const load = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_DATA':
            return  state;
        default:
            return state;
    }
}

export const toStore = (state = {}, action) => {
    switch(action.type) {
        case 'TO_STORE':
            let prevStateArr = [];

            for(let i in state) {
                prevStateArr.push(state[i]);
            }
            return prevStateArr.concat(action.data.results);
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

export const next = (state = { offset: 0}, action) => {
    switch(action.type) {
        case 'CONTENT/NEXT':
            return action.offset;
        default:
            return state;
    }
}
