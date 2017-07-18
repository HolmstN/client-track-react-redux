import { SEARCH_CLIENTS_BY_TEXT } from '../actions/searchClientsByText'

export const searchClientsByText = (state = "", action) => {
    switch (action.type) {
        case SEARCH_CLIENTS_BY_TEXT:
            return action.searchText
        default: 
            return state
    }
}