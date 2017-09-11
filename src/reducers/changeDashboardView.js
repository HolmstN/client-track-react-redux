import { CHANGE_DASHBOARD_VIEW } from '../actions/changeDashboardView'

export const changeDashboardView = (state='home', action) => {
    switch (action.type) {
        case CHANGE_DASHBOARD_VIEW:
            return action.view
        default:
            return state
    }
}
