import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'
import authReducer, {moduleName as authModule} from '../ducks/auth'
import peopleReducer,  {moduleName as peopleModule} from '../ducks/people'
import {ADD_PERSON} from '../ducks/people'

export default combineReducers({
    router,
    form: formReducer.plugin({
        people: (state, action) => { 
        switch(action.type) {
            case ADD_PERSON:
                return undefined;    
            default:
                return state;
        }
        }
     }),
    [authModule]: authReducer,
    [peopleModule]: peopleReducer
})