import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducers'

export default () => {
        let store = createStore(reducer, applyMiddleware(thunk))
        return store
}