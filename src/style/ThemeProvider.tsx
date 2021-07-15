import { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box, createTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

function theme(darkMode: boolean) {
  return createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
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
        <Box
          width="100%"
          height="100vh"
          color="primary.main"
          bgcolor="background.paper"
        >
          {children}
        </Box>
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
