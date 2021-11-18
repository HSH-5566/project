import React from "react";
import { connect } from "react-redux";

const Detail = () => {
    return(
        <h1>Detail</h1>
    )
}

const  mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { toDos: state };
}
export default connect(mapStateToProps)(Detail);