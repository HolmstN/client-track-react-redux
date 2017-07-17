// Add Client Form Reducer //

import SHOW_CLIENT_FORM from '../actions/showClientForm'

const showClientForm = (state=false, action) => {
    switch (action.type) {
        case "SHOW_CLIENT_FORM":
            return !action.clientFormOpen
        default: 
            return state
    }
}

export default showClientForm