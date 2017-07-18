export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_INACTIVE: 'SHOW_INACTIVE'
}

export const setVisibilityFilters = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}
