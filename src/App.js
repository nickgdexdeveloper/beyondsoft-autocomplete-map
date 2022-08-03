import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'store/reducer';
import thunk from 'redux-thunk';
import { Layout } from 'antd';


import Home from 'Home';


const store = createStore(rootReducer, applyMiddleware(thunk));
const { Header, Footer } = Layout;





const App = () => {


    return (
        <Provider store={store}>
        <Layout>
            <Header>Header</Header>
            <Home/>
            <Footer>Footer</Footer>
        </Layout>
        </Provider>
    );


}





export default App;


//AIzaSyBNUapuqzvxfhPw2lW1EO3M-MK-JjKskxw











