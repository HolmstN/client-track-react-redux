//  Clients Actions //

// Actions //

export const ADD_CLIENT = 'ADD_CLIENT'
export const EDIT_CLIENT = 'EDIT_CLIENT'
export const TOGGLE_CLIENT_ACTIVE = 'TOGGLE_CLIENT_ACTIVE'
export const MAKE_SELECTED_CLIENT = 'MAKE_SELECTED_CLIENT'

// action creators //

let nextClientId = 0;

export const addClient = (client) => {
    let newClient = {
        type: ADD_CLIENT,
        client: {
            id: nextClientId++,
            ...client,
        }
    }
    return newClient
}

export const editClient = (client) => {
    return {
        type: EDIT_CLIENT,
        ...client
    }
}

export const toggleClientActive = (id) => {
    return {
        type: TOGGLE_CLIENT_ACTIVE,
        id
    }
}

export const makeSelectedClient = (id) => {
    return {
        type: MAKE_SELECTED_CLIENT,
        id
    }
}
