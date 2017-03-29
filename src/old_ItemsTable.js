import React, { Component } from 'react';

import { Column, Table } from 'react-virtualized';

// var pluralize=require('pluralize');


// REQUEST json objects of type 'type'

// if property is enabled, show it on the columns.



class ItemsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {order: []};
    }
    render() {
        var rows = [];
        var properties = [];
        var columns = [];
        
        this.props.contents.forEach((obj) => {
            rows.push(obj);
            Object.keys(obj).forEach((property) => {
                if (properties.includes(property)) {return}
                else {
                    properties.push(property);
                    columns.push(
                        <Column 
                            label={property}
                            dataKey={property}
                            width={200}
                            key={property}
                        />
                )}
            });
        });
        
        return (
            <Table
                width={600}
                height={300}
                headerHeight={20}
                rowHeight={30}
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
             >
                {columns}
            </Table>
        );
    }
}

export default ItemsTable;