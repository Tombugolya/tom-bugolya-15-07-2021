import Links from './Links';
import { FC, memo } from 'react';
import { Box } from '@material-ui/core';

const Navbar: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      height="8vh"
      bgcolor="secondary.main"
    >
      <h1 style={{ marginLeft: '2em' }}>LOGO</h1>
      <Links />
    </Box>
  );
};

export default memo(Navbar);
