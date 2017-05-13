import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import addClient from '../actions/clients'

var ClientForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="clientName">Client Name</label>
                <Field name="clientName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="clientCode">Client Code</label>
                <Field name="clientCode" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="connectionPrimary">Primary Connection</label>
                <Field name="connectionPrimary" component="input" type="text" />
            </div>
            <button type="submit">Save</button>
        </form>
    )
}

ClientForm = reduxForm({
    form: 'client',
})(ClientForm)

ClientForm = connect(
    dispatch => ({
        onSubmit: (data) => dispatch(addClient(data))
}))(ClientForm)

export default ClientForm