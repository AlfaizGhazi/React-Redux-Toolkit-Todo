import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    ${({ isDarkMode }) => {
      if (isDarkMode) {
        return `
            background-color: #0A1929;
            `;
      } else {
        return `
            background-color: #fff;
            `;
      }
    }}
}
`;
