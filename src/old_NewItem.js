import React, { Component } from 'react';

function NewItem(props) {
    return (
        <div className={`new-${props.type}`}>
            <ItemForm 
                fields={props.fields} 
            />
        </div>
    );
}

class ItemForm extends Component {
    constructor(props) {
        super(props);
        var fields = [];
        this.formFieldType = this.formFieldType.bind(this);

        for (let field in this.props.fields) {
            if (this.props.fields.hasOwnProperty(field)) {
                fields.push(
                    <Field 
                        label={field} 
                        field={field} 
                        type={this.formFieldType(typeof this.props.fields[field])} 
                        key={field} 
                    />
                );
        }}

        this.state = {
            fields: fields
        };
    }
    
    formFieldType(fundamentalType) {
        switch (fundamentalType) {
            case "string":
                return "text";
            case "boolean":
                return "checkbox";
            case "number": 
                return "number";
            default:
                return "text";
        }
    }
        
    render() {
        return (
            <div>
                <h3>"New Item Form"</h3>
                {this.state.fields}
            </div>
        );
    }
}

function Field(props) {
    return(
        <label>{props.label}
            <input
                name={props.field}
                type={props.type}
            />
        </label>
    );
}

export default NewItem;