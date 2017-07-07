import { combineReducers } from 'redux'
import clients from './clients'
import visibilityFilter from './visibilityFilter'
import { reducer as formReducer } from 'redux-form'

 
const rootReducer = combineReducers({
    clients,
    visibilityFilter,
    form: formReducer
})

export default rootReducer