import Links from '../Links';
import routes from '../../routes/routes';
import { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const Navbar: FC = () => {
  const theme = useTheme();
  const mediumScreenBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="primary.main"
    >
      <Button
        style={{ marginLeft: mediumScreenBreakpoint ? '2em' : '0.5em' }}
        component={RouterLink}
        to={routes.home.to}
      >
        <Typography
          variant="h5"
          style={{
            fontStyle: 'italic',
          }}
        >
          Weather App
        </Typography>
      </Button>
      <Links />
    </Box>
  );
};

export default memo(Navbar);
