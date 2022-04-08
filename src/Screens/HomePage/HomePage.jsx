import * as React from "react";
import { StyledDiv, StyledH1 } from "../../Utils";

export const HomePage = (props) => {
  const { isDarkMode } = props;
  return (
    <StyledDiv
      className="homepage--wrapper text-center"
      isDarkMode={isDarkMode}
    >
      <StyledH1>Home Page</StyledH1>
    </StyledDiv>
  );
};
