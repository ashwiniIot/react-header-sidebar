import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import { functionExpression } from '@babel/types';
import {Provider} from 'react-redux';
import productReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
    products: productReducer,
    user:userReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()

);



const store = createStore(allReducers,{                               /** reducer functionality */
   products:[{name:'iphone'}],
   user:'Michel'
},allStoreEnhancers
);    


window.devToolsExtension && window.devToolsExtension()
console.log(store.getState())   

/** it will print state string */

const updateUserAction = {
    type:'updateUser',
    payload:{
        user:'John'
    }
};
// store.dispatch(updateUserAction)
ReactDOM.render(<Provider store = {store}><App aRandomProps="whatever"/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
