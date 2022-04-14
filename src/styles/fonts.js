const injectGlobalStyles = () => {

    const NeueHassGroteskDisplay = require('../fonts/Roboto-Medium.ttf');
    const Roboto = new URL(NeueHassGroteskDisplay, import.meta.url);
  
    return `
    
      @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format("ttf");
        font-weight: bold;
        font-style: normal;
      }
  
     
    `;
  };
  
  export default injectGlobalStyles;