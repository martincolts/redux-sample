export const addElement = element => {
    return {
        type: 'ADD_ELEMENT',
        element
    }
}

export const deleteElement = element => {
    return {
        type: 'DELETE_ELEMENT',
        element
    }
}