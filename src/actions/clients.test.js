import * as actions from './clients'

const CLIENTS = [
    {clientName: "Alphabet Soup", clientCode: "ABCS", connectionPrimary: "10.5.3.12", key: "0", id: "0"},
    {clientName: "Google", clientCode: "GOOG", connectionPrimary: "255.255.255.255", key: "1"},
    {clientName: "BATMAN", clientCode: "DUNU", connectionPrimary: "10.93.222.8", key: "2"}
];

describe('actions', () => {
    it('should create an action to add a client', () => {
        const client = CLIENTS[0]
        const expectedAction = {
            type: actions.ADD_CLIENT,
            ...client
        }
        
        expect(actions.addClient(client)).toEqual(expectedAction)
    })
    
    it('should create an action to edit a client', () => {
        const client = CLIENTS[0]
        const expectedAction = {
              type: actions.EDIT_CLIENT,
              ...client
          }
      
        expect(actions.editClient(client)).toEqual(expectedAction)
    })
    
    it('should create an action to toggle active client', () => {
        const clientId = CLIENTS[0]["id"]
        const expectedAction = {
            type: actions.TOGGLE_CLIENT_ACTIVE,
            id: clientId
        }
        
        expect(actions.toggleClientActive(clientId)).toEqual(expectedAction)
    })
})