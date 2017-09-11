import React, { Component } from 'react';


function ProjectsView(props) {
    return (
        <div className="projects-view">
            <ProjectsTable />
        </div>
    );
}

function ProjectsTable(props) {
    return (
        <div className="projects-table">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Age</th>
                        <th>Priority</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    { props.rows }
                </tbody>
            </table>
        </div>
    );
}

function ProjectsRow(props) {
    return (
        <tr className="projects-row">
            <td className="row-title projects-row-title">{props.title}</td>
            <td>{props.age}</td>
            <td>{props.priority}</td>
            <td><ProjectsButtons /></td>
        </tr>
    );
}

function ProjectsButtons(props) {
    return (
        <div className="projects-buttons">
            <button className="assign-button">Assign</button>
        </div>
    );
}

export default ProjectsView;