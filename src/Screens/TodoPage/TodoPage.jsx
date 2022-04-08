import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllTodo } from "../../app/slices/todoSlice";
import { TodoData } from "../../Components";
import { StyledDiv, StyledButton, StyledInput } from "../../Utils";

export const TodoPage = (props) => {
  const { isDarkMode } = props;
  const dispatch = useDispatch();
  const [inputData, setInputData] = React.useState("");
  const todoList = useSelector((state) => state.todoListState.list);

  const handleClickAddTodo = () => {
    let payloadData = {
      id: new Date().getTime().toString(),
      data: inputData,
    };
    dispatch(addTodo(payloadData));
    setInputData("");
  };
  return (
    <React.Fragment>
      <StyledDiv
        className="todopage--wrapper text-center"
        isDarkMode={isDarkMode}
      >
        <StyledDiv
          className={
            isDarkMode
              ? "container d-flex justify-content-center text-light text-center my-5"
              : "container d-flex justify-content-center text-center my-5"
          }
          isDarkMode={isDarkMode}
        >
          <StyledInput
            className={
              isDarkMode
                ? "form-control text-light todo--screen--dark"
                : "form-control todo--screen"
            }
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
            isDarkMode={isDarkMode}
          />
          <StyledButton
            className={isDarkMode ? "mx-2 btn btn-danger" : "mx-2 btn btn-dark"}
            isDarkMode={isDarkMode}
            onClick={() => handleClickAddTodo()}
          >
            Add Todo
          </StyledButton>
          <StyledButton
            className={isDarkMode ? "mx-2 btn btn-danger" : "mx-2 btn btn-dark"}
            isDarkMode={isDarkMode}
            disabled={todoList.length >= 1 ? false : true}
            onClick={() => dispatch(removeAllTodo())}
          >
            Remove All Todo
          </StyledButton>
        </StyledDiv>
        <TodoData
          isDarkMode={isDarkMode}
          todoList={todoList}
          dispatch={dispatch}
        />
      </StyledDiv>
    </React.Fragment>
  );
};
