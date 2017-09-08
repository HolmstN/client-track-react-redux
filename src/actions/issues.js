//  Issues Actions //

// Actions //

export const ADD_ISSUE = 'ADD_ISSUE'
export const EDIT_ISSUE = 'EDIT_ISSUE'
export const TOGGLE_ISSUE_ACTIVE = 'TOGGLE_ISSUE_ACTIVE'
export const MAKE_SELECTED_ISSUE = 'MAKE_SELECTED_ISSUE'

// action creators //

let nextIssueId = 1;

export const addIssue = (issue) => {
    let newIssue = {
        type: ADD_ISSUE,
        issue: {
            id: nextIssueId++,
            ...issue,
        }
    }
    return newIssue
}

export const editIssue = (issue) => {
    return {
        type: EDIT_ISSUE,
        ...issue
    }
}

export const toggleIssueActive = (id) => {
    return {
        type: TOGGLE_ISSUE_ACTIVE,
        id
    }
}

export const makeSelectedIssue = (id) => {
    return {
        type: MAKE_SELECTED_ISSUE,
        id
    }
}