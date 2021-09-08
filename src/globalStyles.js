import { createGlobalStyle } from "styled-components";

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
}

`;

export default GlobalStyle;
