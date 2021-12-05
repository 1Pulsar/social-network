import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {MainComponentContainer} from "./components/main/MainComponentsContainer";
import {LoginPageContainer} from "./components/main/LoginPage/LoginPage";
import {appInitializationThunk} from "./Redux/Reducer/AppReducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.appInitializationThunk()
    }

    render() {

        if (!this.props.isInitialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <MainComponentContainer/>
                <Route path='/login' render={() => <LoginPageContainer/>}/>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.appParams.isInitialized
})

export default connect(mapStateToProps, {appInitializationThunk})(App);
