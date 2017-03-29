import React, { Component } from 'react';

import { Types } from './ProjectTypes';

class ProjectForm extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
              title: '',
              workOrder: false,
              patientSafety: false,
              type: 'development',
              timeProgram: '',
              summary: '',
              requestedBy: '',
              clientCode: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        console.log("Event Object: " + target);

        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input 
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange} />
                </label>
                 <label>
                    Work Order?
                    <input 
                        name="workOrder"
                        type="checkbox"
                        value={this.state.workOrder}
                        onChange={this.handleInputChange} />
                </label>
                 <label>
                    Patient Safety?
                    <input 
                        name="patientSafety"
                        type="checkbox"
                        value={this.state.patientSafety}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Type:
                    <select onChange={this.handleInputChange}>
                        <option value="development">Development</option>
                        <option value="implementation">Implementation</option>
                        <option value="training">Training</option>
                        <option value="estimate">Estimate</option>
                        <option value="designConcept">Design Concept</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label>
                    Time Program:
                    <input 
                        name="timeProgram"
                        type="text"
                        value={this.state.timeProgram}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Summary:
                    <textarea 
                        name="summary"
                        value={this.state.summary}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Requested By:
                    <input 
                        name="requestedBy"
                        type="text"
                        value={this.state.requestedBy}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Client Code:
                    <input 
                        name="clientCode"
                        type="text"
                        value={this.state.clientCode}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

export default ProjectForm;