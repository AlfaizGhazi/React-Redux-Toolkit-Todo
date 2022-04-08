import * as React from "react";
import { StyledDiv, StyledNav } from "../../Utils";

export const Footer = (props) => {
  const { isDarkMode } = props;
  return (
    <StyledDiv className="footer--wrapper fixed-bottom" isDarkMode={isDarkMode}>
      <StyledDiv className="text-muted">
        Alfaiz Khan Copyright&#169;2022
      </StyledDiv>
    </StyledDiv>
  );
};
