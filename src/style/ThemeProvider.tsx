import { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box, createTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

function theme(darkMode: boolean) {
  return createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        main: '#606CA8',
        contrastText: '#000',
      },
    },
  });
}

const ThemeProvider: FC = ({ children }) => {
  const darkThemeEnabled = useAppSelector((state) => state.theme.dark);
  return (
    <MuiThemeProvider theme={theme(darkThemeEnabled)}>
      <CssBaseline>
        <Box maxWidth="100vw" minHeight="100vh" bgcolor="background.paper">
          {children}
        </Box>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
