import Links from '../Links';
import routes from '../../routes/routes';
import { Box, Button, Typography } from '@material-ui/core';
import { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQueryBreakpoint } from '../../hooks/hooks';

const Navbar: FC = () => {
  const mediumScreenBreakpoint = useMediaQueryBreakpoint('md');

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
            fontSize: mediumScreenBreakpoint ? '1.5em' : '1em',
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
