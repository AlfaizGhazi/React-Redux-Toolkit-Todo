import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../app/slices/counterSlice";
import { StyledDiv, StyledButton } from "../../Utils";

export const Counter = (props) => {
  const { isDarkMode } = props;
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterState.value);

  const renderCounterButtons = React.useMemo(() => {
    const handleDecrement = () => {
      dispatch(decrement());
    };

    const handleIncrement = () => {
      dispatch(increment());
    };

    const handleIncrementByFive = () => {
      dispatch(incrementByAmount(5));
    };

    const handleDecrementByFive = () => {
      dispatch(decrementByAmount(5));
    };
    return (
      <React.Fragment>
        <StyledButton
          className={
            isDarkMode
              ? "counter--button--decrement--five btn btn-sm btn-danger mx-2 my-1"
              : "counter--button--decrement--five btn btn-sm btn-dark mx-2 my-1"
          }
          onClick={() => handleDecrementByFive(5)}
        >
          Decrement By 5
        </StyledButton>
        <StyledButton
          className={
            isDarkMode
              ? "counter--button--decrement btn btn-sm btn-danger mx-2 my-1"
              : "counter--button--decrement btn btn-sm btn-dark mx-2 my-1"
          }
          onClick={() => handleDecrement()}
        >
          Decrement
        </StyledButton>
        <StyledButton
          className={
            isDarkMode
              ? "counter--button--increment btn btn-sm btn-danger mx-2 my-1"
              : "counter--button--increment btn btn-sm btn-dark mx-2 my-1"
          }
          onClick={() => handleIncrement()}
        >
          Increment
        </StyledButton>
        <StyledButton
          className={
            isDarkMode
              ? "counter--button--increment--five btn btn-sm btn-danger mx-2 my-1"
              : "counter--button--increment--five btn btn-sm btn-dark mx-2 my-1"
          }
          onClick={() => handleIncrementByFive()}
        >
          Increment By 5
        </StyledButton>
      </React.Fragment>
    );
  }, [dispatch, isDarkMode]);

  return (
    <StyledDiv
      className={"counter--wrapper text-center my-3"}
      isDarkMode={isDarkMode}
    >
      <StyledDiv className={"counter--value"} isDarkMode={isDarkMode}>
        Counter: {count}
      </StyledDiv>
      {renderCounterButtons}
    </StyledDiv>
  );
};
