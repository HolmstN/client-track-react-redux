// Show Client Form //

// Actions //

export const SHOW_CLIENT_FORM = 'SHOW_CLIENT_FORM'

// action creators //

export const showClientForm = (clientFormOpen) => {
    return {
        type: SHOW_CLIENT_FORM,
        clientFormOpen
    }
}