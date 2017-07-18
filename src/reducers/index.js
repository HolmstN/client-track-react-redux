import { combineReducers } from 'redux'
import clients from './clients'
import { visibilityFilter } from './visibilityFilter'
import { searchClientsByText } from './searchClientsByText'
import { reducer as formReducer } from 'redux-form'
import showClientForm from './showClientForm'

 
const rootReducer = combineReducers({
    clients,
    searchText: searchClientsByText,
    visibilityFilter,
    clientFormOpen: showClientForm,
    form: formReducer
})

export default rootReducer