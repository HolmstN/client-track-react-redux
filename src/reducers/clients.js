// Clients Reducers //

import {
    ADD_CLIENT, 
    EDIT_CLIENT, 
    TOGGLE_CLIENT_ACTIVE, 
    MAKE_SELECTED_CLIENT 
} from '../actions/clients'

const client = (state = {}, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return Object.assign({}, state, {
                ...action.client
            })
            
        case EDIT_CLIENT:
            if (state.id !== action.id) {
                return state
            }
            
            return Object.assign({}, state, action.client)
            
        case TOGGLE_CLIENT_ACTIVE: {
            if (state.id !== action.id) {
                return state
            }
            
            return Object.assign({}, state, 
                {active: !state.active})
        }
        
        case MAKE_SELECTED_CLIENT: {
            if (state.id !== action.id) {
                return Object.assign({}, state, {
                    detailed: false
                })
            } 
            
            return Object.assign({}, state, {
                detailed: !state.detailed
                //detailed: true
            })
        }
            
        default: 
            return state
        
    }
}

const clients = (state = [], action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return [
                ...state,
                client(undefined, action)
            ]
        case EDIT_CLIENT:
        case TOGGLE_CLIENT_ACTIVE:
        case MAKE_SELECTED_CLIENT:
            return state.map(c => client(c, action))
        
        default:
            return state
    }
}

export default clients