/* Eventually will be an admin-modifiable source for the 'Types' that a Project can be.

For now, just passes along some types for testing 
import React, { Component } from 'react';

class Types extends Component {
    render() {
        return(
            <fieldset>
                <label>Types:</label>
                <Control.radio model="project.type">
                    <option value="development">Development</option>,
                    <option value="implementation">Implementation</option>,
                    <option value="training">Training</option>,
                    <option value="estimate">Estimate</option>,
                    <option value="designConcept">Design Concept</option>,
                    <option value="infrastructure">Infrastructure</option>,
                    <option value="other">Other</option>
                </Control.radio>
            </fieldset>
        );    
    }
}

export default Types;

*/

