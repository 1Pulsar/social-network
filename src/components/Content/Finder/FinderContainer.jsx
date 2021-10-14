import {connect} from "react-redux";
import Finder from "./Finder";

const mapStateToProps = state => ({
    finderPage: state.finderPage
})

const mapDispatchToProps = dispatch => ({})

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder)

export default FinderContainer
