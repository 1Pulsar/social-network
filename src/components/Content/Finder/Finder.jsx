import React from "react"
import st from "./Finder.module.css";
import * as axios from "axios";

class Finder extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    componentWillUnmount() {
        this.props.changePage(1)
    }

    render() {
        const totalPages = Math.ceil (this.props.totalCount/this.props.pageSize)
        let pagesArray = []
        for (let i = this.props.currentPage - 2; i<=this.props.currentPage + 1; i++) {
            if (i < 1 || i > totalPages) {
                continue
            } else {
                pagesArray.push(i)
            }
        }
        const changeCurrentPage = (p) => {
            this.props.changePage(p)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
        }

        return <div>

            <div className={st.pagination}>

                {pagesArray[0] > 1?<span onClick={ () => changeCurrentPage(1) }>1..</span>:''}

            {pagesArray.map(p => <span className={p === this.props.currentPage ? st.currentPage:''}
                                       onClick={ () => changeCurrentPage(p) }>{p} </span>)}

            {pagesArray[pagesArray.length-1] < totalPages - 2 ? <span
                onClick={ () => changeCurrentPage(totalPages) }> ..{totalPages}</span>:''}

            </div>

            {this.props.users.map(u => <div className={st.userItem}>
                <img className={st.profileImg}
                     src={u.photos.small != null ? u.photos.small : 'https://cdn-icons-png.flaticon.com/512/219/219983.png'}/>
                <div className={st.itemBlock}>
                    <div className={st.userInfo}>
                        <div>
                            <div>{u.name}</div>
                            <div className={st.location}>u.location.city, u.location.country</div>
                        </div>
                        <div className={st.status}>{u.status}</div>
                    </div>
                    <button onClick={() => {
                        this.props.subscriptionAction(u.id, u.followed)
                    }}
                            className={st.button}>{(u.followed) ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>)}
        </div>
    }
}

export default Finder