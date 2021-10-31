import React from "react";

class Status extends React.Component {

    componentDidMount() {
        this.setState({
            status: this.props.status
        })
            this.props.getMyStatusThunk(this.props.id)
    }

    state = {
        statusEditMode: false,
        status: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let a = this.props
        let b = this.state

    }

    statusIsChanged = (event) => {
        this.setState({status: event.target.value})
    }

    statusEdit = (bool) => {
        if (!bool) this.props.newStatusThunk(this.state.status)
        this.setState({
            statusEditMode: bool
        })
    }

    render() {
        return (
            <div>
                {!this.state.statusEditMode && <p onDoubleClick={() => this.statusEdit(true)}>{this.props.status ? this.props.status : 'No status'}</p>}
                {this.state.statusEditMode &&
                <input onBlur={() => this.statusEdit(false)} onChange={this.statusIsChanged} autoFocus={true}
                       value={this.state.status}/>}
            </div>
        )
    }
}

export default Status
