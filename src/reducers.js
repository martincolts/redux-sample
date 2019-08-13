const reducers = (state, action) => {
    switch (action.type) {
        case 'ADD_ELEMENT':
            return {
                ...state,
                elements: state.elements.concat(action.element)
            }
        case 'DELETE_ELEMENT':
            return {
                ...state,
                elements: state.elements.filter(element => element !== action.element)
            }
        default:
            return state;
    }
}

export default reducers;