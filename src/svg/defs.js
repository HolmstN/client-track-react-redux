// eslint-disable-next-line
import React, { Component } from 'react';

function UndoSymbol(props) {
    return (
    <svg viewBox={props.viewBox || "0 0 100 100"} className="icon icon-undo">
        <path d="M16 2c-4.418 0-8.418 1.791-11.313 4.687l-4.686-4.687v12h12l-4.485-4.485c2.172-2.172 5.172-3.515 8.485-3.515 6.627 0 12 5.373 12 12 0 3.584-1.572 6.801-4.063 9l2.646 3c3.322-2.932 5.417-7.221 5.417-12 0-8.837-7.163-16-16-16z"></path>
    </svg>
    );
}

function CogSymbol(props) { 
    return (
    <svg viewBox={props.viewBox || "0 0 100 100"} className="icon icon-cog">
        <path d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></path>
    </svg>
    );
}

function PlusSymbol(props) { 
    return (
    <svg viewBox={props.viewBox || "0 0 100 100"} className="icon icon-plus">
        <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
    </svg>
    );
}

function CheckmarkSymbol(props) {
    return (
    <svg viewBox={props.viewBox || "0 0 100 100"}  className="icon icon-checkmark">
        <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
    </svg>
    );
}

function ArrowUpSymbol(props) {
    return (
    <svg viewBox={props.viewBox || "0 0 100 100"} className="icon icon-arrow-up">
        <path d="M16 1l-15 15h9v16h12v-16h9z"></path>
    </svg>
    );
}

export {UndoSymbol, CogSymbol, PlusSymbol, CheckmarkSymbol, ArrowUpSymbol};