import React from "react"
import {connect} from "react-redux"
import MainComponents from "./MainComponents";
import {authParamsThunk} from "../../Redux/Reducer/AuthReducer";

class MainComponentsAPI extends React.Component {
    componentDidMount() {
        this.props.authParamsThunk()
    }

    render = () => <MainComponents isAuthorized={this.props.isAuthorized}/>
}

const mapStateToProps = (state) => ({
    isAuthorized: state.authParams.isAuthorized
})

export const MainComponentContainer = connect(mapStateToProps, {authParamsThunk})(MainComponentsAPI)