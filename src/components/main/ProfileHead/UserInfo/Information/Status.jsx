import React from "react";

class Status extends React.Component {
    render() {
        return (
            <div>
                {!this.props.statusEditMode && <p onDoubleClick={() => this.props.statusEdit(true)}>{this.props.status ? this.props.status : 'No status'}</p>}
                {this.props.statusEditMode &&
                <input onBlur={() => this.props.statusEdit(false)} onChange={this.props.statusIsChanged} autoFocus={true}
                       value={this.props.status}/>}
            </div>
        )
    }
}

export default Status
