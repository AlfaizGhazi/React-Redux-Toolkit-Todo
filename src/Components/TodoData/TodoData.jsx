import * as React from "react";
import { deleteTodo } from "../../app/slices/todoSlice";
import { StyledDiv, StyledSpan, StyledButton } from "../../Utils";

export const TodoData = (props) => {
  const { isDarkMode, todoList, dispatch } = props;
  return (
    <StyledDiv
      className={
        isDarkMode
          ? "container text-light text-center my-5 todo--data"
          : "container text-center my-5 todo--data"
      }
    >
      {todoList.map((item) => {
        const payloadData = {
          deleteID: item.id,
        };
        return (
          <StyledDiv className={"border my-2 todo--list"} key={item.id}>
            <StyledSpan>{item.data}</StyledSpan>
            <StyledButton
              className={
                isDarkMode
                  ? "mx-2 btn btn-sm btn-danger delete--button"
                  : "mx-2 btn btn-sm btn-dark delete--button"
              }
              onClick={() => dispatch(deleteTodo(payloadData))}
            >
              Delete
            </StyledButton>
          </StyledDiv>
        );
      })}
    </StyledDiv>
  );
};
