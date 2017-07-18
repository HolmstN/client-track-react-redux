// eslint-disable-next-line
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchClientsByText } from '../actions/searchClientsByText'


const SearchInput = ({onSearch}) => {
  return(
    <input 
      className="search"
      placeholder="Search..." 
      onChange={(e) => onSearch(e.target.value)} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchText) => {
      dispatch(searchClientsByText(searchText))
    }
  }
}

let Search = connect(
  null,
  mapDispatchToProps
)(SearchInput)

export default Search