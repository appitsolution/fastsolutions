import React from "react";
const DescTitle = ({width,children}) => {
    return(
        <p className="desc-title" style={{width: `${width}px`}}>{children}</p>
    )
}
export default DescTitle