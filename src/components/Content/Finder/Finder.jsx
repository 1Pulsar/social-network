import React from "react"
import st from "./Finder.module.css";

const Finder = (props) => {

    const totalPages = Math.ceil (props.totalCount/props.pageSize)
    let pagesArray = []
    for (let i = props.currentPage - 2; i<=props.currentPage + 1; i++) {
        if (i < 1 || i > totalPages) {
            continue
        } else {
            pagesArray.push(i)
        }
    }
    const changeCurrentPage = (p) => {
        props.changeCurrentPage(p)
    }

    return <div>

        <div className={st.pagination}>

            {pagesArray[0] > 1?<span onClick={ () => changeCurrentPage(1) }>1..</span>:''}

            {pagesArray.map(p => <span className={p === props.currentPage ? st.currentPage:''}
                                       onClick={ () => changeCurrentPage(p) }>{p} </span>)}

            {pagesArray[pagesArray.length-1] < totalPages - 2 ? <span
                onClick={ () => changeCurrentPage(totalPages) }> ..{totalPages}</span>:''}

        </div>

        {props.users.map(u => <div className={st.userItem}>
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
                    props.subscriptionAction(u.id, u.followed)
                }}
                        className={st.button}>{(u.followed) ? 'Unfollow' : 'Follow'}</button>
            </div>
        </div>)}
    </div>
}

export default Finder