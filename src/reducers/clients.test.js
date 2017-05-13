import { clients, client } from './clients'
import * as actions from '../actions/clients'

const CLIENTS = [
    {clientName: "Alphabet Soup", clientCode: "ABCS", connectionPrimary: "10.5.3.12", key: "0", id: "0", active: true},
    {clientName: "Google", clientCode: "GOOG", connectionPrimary: "255.255.255.255", key: "1", id: "1", active: false},
    {clientName: "BATMAN", clientCode: "DUNU", connectionPrimary: "10.93.222.8", key: "2", id: "2", active: true}
];

describe('clients reducer', () => {
    it('should return the initial state', () => {
        expect(
            clients(undefined, {})
        ).toEqual([])
    })
    
    it('should handle ADD_CLIENT', () => {
        const client = CLIENTS[0]
        expect(
            clients([], {
                type: actions.ADD_CLIENT,
                client
            })
        ).toEqual([
            client
        ])
        
        const clientInitialState = [CLIENTS[0], CLIENTS[1]]
        const newClient = CLIENTS[2]
        expect(
            clients(clientInitialState, {
                type: actions.ADD_CLIENT,
                client: newClient
            }
        )).toEqual(
            CLIENTS
        )
    })
    
    it('should handle EDIT_CLIENT', () => {
        const client = CLIENTS[0]
        const editedClient = Object.assign({}, client, {
            clientCode: "ABCD"
        })
        
        expect(
            clients([client], {
                type: actions.EDIT_CLIENT,
                client: editedClient
        })).toEqual(
            [editedClient]
        )
    })
    
    it('should handle TOGGLE_CLIENT_ACTIVE', () => {
      const client = CLIENTS[0]
      const toggledClient = Object.assign({}, client, {
          active: !client.active
      })
      
      expect(
          clients([client], {
              type: actions.TOGGLE_CLIENT_ACTIVE,
              client: toggledClient
          })
      ).toEqual(
          [toggledClient]
      )
    })
})