// eslint-disable-next-line
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import '../styles/ClientForm.css'

class ClientForm extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
    const upper = (value) => value.toUpperCase()
    
    let {handleSubmit} = this.props
    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className="input-fields">
                    <div className="fieldset">
                        <label htmlFor="clientName">Client Name</label>
                        <Field name="clientName" component="input" type="text" />
                    </div>
                    <div className="fieldset">
                        <label htmlFor="clientCode">Client Code</label>
                        <Field name="clientCode" component="input" type="text" normalize={upper} />
                    </div>
                    <div className="fieldset">
                        <label htmlFor="connectionPrimary">Primary Connection</label>
                        <Field name="connectionPrimary" component="input" type="text" />
                    </div>
                    <div className="fieldset">
                        <label htmlFor="details.notes">Notes</label>
                        <Field name="details.notes" component="textarea" />
                    </div>
                </div>
                <button className="button button-green" type="submit">Save</button>
            </form>
        </div>
    )}
}

export default connect()(reduxForm({
    form: 'client'
})(ClientForm))