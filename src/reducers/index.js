import { combineReducers } from 'redux'
import clients from './clients'
import issues from './issues'
import { visibilityFilter } from './visibilityFilter'
import { searchClientsByText } from './searchClientsByText'
import { changeDashboardView } from './changeDashboardView'

import { reducer as formReducer } from 'redux-form'
import showClientForm from './showClientForm'

 
const rootReducer = combineReducers({
    clients,
    issues,
    dashboardView: changeDashboardView,
    searchText: searchClientsByText,
    visibilityFilter,
    clientFormOpen: showClientForm,
    form: formReducer
})

export default rootReducer