import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyle = createGlobalStyle`
body {
  font-weight: 300;
  overflow-x: hidden;
  white-space: pre-line;
  ${tw`tracking-wide bg-gray-100`}
}



h1,h2,h3,h4,h5 {
  ${tw`tracking-wide`};
}
.nav__menu-item:hover {
  .nav__submenu {
    display: flex;
  }
}

.nav__submenu {
  display: none;
  position: absolute;
  transform: translate(10px, -7px);
}

.nav__submenu--hover {
  display: flex;
}

`;
