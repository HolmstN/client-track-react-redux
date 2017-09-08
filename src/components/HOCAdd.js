// eslint-disable-next-line
import React, { Component } from 'react'
import getDisplayName from 'react-display-name'
import { connect } from 'react-redux'

const generateFormBlock = (FormComponent, ButtonComponent, type, showAction) => {
    
    const _Add = ({onSubmit, stateOpen, onAddClick}) => {
        if (stateOpen) {
            return (
                <div>
                    <FormComponent onSubmit={onSubmit} key={getDisplayName(FormComponent)} />
                    <ButtonComponent onClick={() => onAddClick(stateOpen)}
                                     text="Cancel"
                                     type={type}
                                     key={`Add${type}Button`} />
                </div>
            )
        }
        
        return (
             <ButtonComponent onClick={() => onAddClick(stateOpen)}
                                     text="Cancel"
                                     type={type}
                                     key={`Add${type}Button`} />
        )
    }
    
    const mapStateToProps = (state) => {
        return {
            [stateOpen]: state[stateOpen]
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            onAddClick: (formOpen) => {
                dispatch(showAction(formOpen))
            }
        }
    }
    
    return connect(
        mapStateToProps, 
        mapDispatchToProps
    )(_Add) 
}

export default generateFormBlock