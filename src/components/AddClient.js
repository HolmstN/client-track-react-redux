// eslint-disable-next-line
import React, { Component } from 'react';
import generateFormBlock from './HOCAdd'

import ClientForm from './ClientForm'
import AddButton from './AddButton'
import { showClientForm } from '../actions/showClientForm'

const AddClient = generateFormBlock(ClientForm, AddButton, "client", showClientForm);

export default AddClient