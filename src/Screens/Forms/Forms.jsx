import * as React from "react";
import { UseFormikHook } from "../../Components";
import { StyledDiv } from "../../Utils";

export const Forms = (props) => {
  const { isDarkMode } = props;

  return (
    <StyledDiv
      className="workout--wrapper container my-2"
      isDarkMode={isDarkMode}
    >
      <UseFormikHook isDarkMode={isDarkMode} />
    </StyledDiv>
  );
};
