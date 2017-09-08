// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../styles/ClientForm.css'

import IssueForm from './IssueForm'
import AddButton from './AddButton'
import { showIssueForm } from '../actions/showIssueForm'

const _AddIssue = ({onSubmit, issueFormOpen, onAddClick}) => {
    if (issueFormOpen) {
        return (
        <div>
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeaveTimeout={300}>
                <div>
                    <IssueForm onSubmit={onSubmit} key="issueForm" />
                    <AddButton onClick={() => onAddClick(issueFormOpen) } 
                                    text="Cancel" 
                                    type="issue"
                                    key="AddClientButton" />
                </div>
        </ReactCSSTransitionGroup>
        </div>
        )
    }
    
    return (
        <AddButton  onClick={() => onAddClick(issueFormOpen) } 
                    text="Add New Client"
                    type="issue" />
    )
}


const mapStateToProps = state => {
    return {
        issueFormOpen: state.issueFormOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddClick: (issueFormOpen) => {
            dispatch(showIssueForm(issueFormOpen))
        }
    }
}

const AddIssue = connect(
    mapStateToProps, 
    mapDispatchToProps
)(_AddIssue)

export default AddIssue