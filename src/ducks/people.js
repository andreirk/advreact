import {appName} from '../config'
import {Record} from 'immutable'
import firebase from 'firebase'
import { createSelector } from 'reselect'

/**
 * Constants 
 */
export const moduleName = 'people'
const prefix = '${appName}/${moduleName}'

export const ADD_PERSON = '${prefix}/ADD_PERSON'


/**
 * Reducer 
 */
export default function reducer(state = [], action) {
  const {type, payload} = action

  switch(type) {
    case ADD_PERSON:
      const user = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email:   payload.email
      }
      return  [ ...state, user ];

    default:
      return state
  }
}

/**
 * Selectors
 */
export const stateSelector = state => state[moduleName]
export const userSelector = createSelector(
  stateSelector,
  state => state
)

 /**
  * Action Creators
  */
  export function parsonAdd(email, firstName, lastName) {
    return {
      type: ADD_PERSON,
      payload: {
        email,
        firstName,
        lastName
      }
    }
  }

