import React from "react"
import Paginator from "./Paginator/Paginator";
import UserItem from "./UserItem/UserItem";

const Finder = (props) => {
    return <div>
        {props.users.map(u => <UserItem key={u.id}
            u={u} followingInProcess={props.followingInProcess}
            followingButtonThunk={props.followingButtonThunk} />)}
        <Paginator {...props} />
    </div>
}

export default Finder