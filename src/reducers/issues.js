// Issues Reducers //

import {
    ADD_ISSUE, 
    EDIT_ISSUE, 
    TOGGLE_ISSUE_ACTIVE, 
    MAKE_SELECTED_ISSUE
} from '../actions/issues'

const issue = (state = {}, action) => {
    switch (action.type) {
        case ADD_ISSUE:
            return Object.assign({}, state, {
                ...action.issue
            })
            
        case EDIT_ISSUE:
            if (state.id !== action.id) {
                return state
            }
            
            return Object.assign({}, state, action.issue)
            
        case TOGGLE_ISSUE_ACTIVE: {
            if (state.id !== action.id) {
                return state
            }
            
            return Object.assign({}, state, 
                {active: !state.active})
        }
        
        case MAKE_SELECTED_ISSUE: {
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

const issues = (state = [], action) => {
    switch (action.type) {
        case ADD_ISSUE:
            return [
                ...state,
                issue(undefined, action)
            ]
        case EDIT_ISSUE:
        case TOGGLE_ISSUE_ACTIVE:
        case MAKE_SELECTED_ISSUE:
            return state.map(c => issue(c, action))
        
        default:
            return state
    }
}

export default issues