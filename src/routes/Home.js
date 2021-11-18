import React, {useState} from "react";
import {connect} from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../component/ToDo";

const Home = ({toDos, addTodo}) => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
    }
    return(
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type="text" value={text}/>
                <button>ADD</button>
            </form>
            <ul>{toDos.map(toDo => <ToDo text={toDo.text} id={toDo.id} key={toDo.id}/>)}</ul>
        </>
    )
}

const  mapStateToProps = (state) => {
    return { toDos: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);