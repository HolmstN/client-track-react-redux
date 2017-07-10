// eslint-disable-next-line
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class ClientForm extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
    let {handleSubmit} = this.props
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
            <div>
                <label htmlFor="details.notes">Notes</label>
                <Field name="details.notes" component="input" type="text" />
            </div>
            <button type="submit">Save</button>
        </form>
    )}
}

export default connect()(reduxForm({
    form: 'client'
})(ClientForm))