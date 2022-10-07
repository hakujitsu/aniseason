import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#1c1b1d"
    },
    primary: {
      main: '#deaf9d',
    },
    text: {
      primary: "#f2efed"
    }
  },
});

export default darkTheme;