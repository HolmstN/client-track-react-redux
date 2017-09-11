// Dashboard Actions //

// Actions //

export const CHANGE_DASHBOARD_VIEW = 'CHANGE_DASHBOARD_VIEW'

// action creators //

export const changeDashboardView = (view) => {
    return {
        type: CHANGE_DASHBOARD_VIEW,
        view
    }
}

