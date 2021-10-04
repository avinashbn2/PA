import { createGlobalStyle } from "styled-components";
import { getColor } from "utils/theme";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    box-sizing: border-box;

}
#root {
    height:100%;
    width: 100%;
    background-image: ${(p) => p.theme.colors.bgGradient};
}
.modal {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    background-color: papayawhip;
  }
 .overlay {
    background-color: green;
  }


`;

export default GlobalStyle;
