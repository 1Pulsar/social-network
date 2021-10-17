import React from "react";
import preloader from '../../../src/images/Preloader.svg'

const Preloader = (props) => {
    return(<div>
        <img style={{width: '100px', height: '100px'}} src={preloader}/>
        </div>
    )
}

export default Preloader