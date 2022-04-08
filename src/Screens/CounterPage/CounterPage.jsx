import * as React from "react";
import { StyledDiv, StyledH1 } from "../../Utils";
import { Counter } from "../../Components";

export const CounterPage = (props) => {
  const { isDarkMode } = props;
  return (
    <StyledDiv
      className="counterpage--wrapper text-center"
      isDarkMode={isDarkMode}
    >
      <Counter isDarkMode={isDarkMode} />
    </StyledDiv>
  );
};
