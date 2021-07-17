import Links from '../Links';
import { FC, memo } from 'react';
import { Box, Typography } from '@material-ui/core';

const Navbar: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="secondary.main"
    >
      <Typography
        variant="h5"
        style={{ marginLeft: '2em', fontStyle: 'italic' }}
      >
        Weather App
      </Typography>
      <Links />
    </Box>
  );
};

export default memo(Navbar);
