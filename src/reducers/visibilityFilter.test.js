import visibilityFilter from './visibilityFilter'
import * as actions from '../actions/visibilityFilter'

describe('visibilityFilter reducer', () => {
    it('should return the initial state', () => {
        expect(
            visibilityFilter(undefined, {})
        ).toEqual(
            'SHOW_ALL'
        )
    })
    
    it('should set visibility filter to active', () => {
        expect(visibilityFilter('SHOW_ALL', {
            type: actions.SET_VISIBILITY_FILTER,
            filter: 'SHOW_ACTIVE'
            }
        )).toEqual(
            'SHOW_ACTIVE'
        )
    })
})