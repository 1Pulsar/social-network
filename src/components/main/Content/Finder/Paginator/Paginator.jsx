import React from "react";
import st from "./Paginator.module.css"
import Preloader from "../../../../common/Preloader";

const Paginator = (props) => {

    const totalPages = Math.ceil(props.totalCount / props.pageSize)
    let pagesArray = []
    for (let i = props.currentPage - 2; i <= props.currentPage + 1; i++) {
        if (i < 1 || i > totalPages) {
            continue
        } else {
            pagesArray.push(i)
        }
    }
    const changeCurrentPage = (p) => {
        props.changeCurrentPage(p)
    }

    return <div className={st.pagination}>

        {pagesArray[0] > 1 ? <span onClick={() => changeCurrentPage(1)}>1..</span> : ''}

        {pagesArray.map(p => <span key={p} className={p === props.currentPage ? st.currentPage : ''}
            onClick={() => changeCurrentPage(p)}>{p} </span>)}

        {pagesArray[pagesArray.length - 1] < totalPages - 2 ? <span
            onClick={() => changeCurrentPage(totalPages)}> ..{totalPages}</span> : ''}

        {props.isFetching ? <Preloader /> : null}

    </div>
}

export default Paginator