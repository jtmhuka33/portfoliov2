import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from '../theme';
import Home from './layout';

function MyApp() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  );
}

export default MyApp;