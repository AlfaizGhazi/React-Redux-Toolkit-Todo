import * as React from "react";
// import { UseMemoHook } from "../../Components";
import { StyledDiv } from "../../Utils";

export const Workout = (props) => {
  const { isDarkMode } = props;

  return (
    <StyledDiv
      className="workout--wrapper container text-center my-2"
      isDarkMode={isDarkMode}
    >
      {/* <UseMemoHook /> */}
    </StyledDiv>
  );
};
