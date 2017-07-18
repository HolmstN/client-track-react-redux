export const SEARCH_CLIENTS_BY_TEXT = 'SEARCH_CLIENTS_BY_TEXT'

export const searchClientsByText = (searchText) => {
    return {
        type: SEARCH_CLIENTS_BY_TEXT,
        searchText
    }
}