import Switches from './ThemeSwitch';
import { Link as RouterLink } from 'react-router-dom';
import { FC, memo } from 'react';
import { Box, Link } from '@material-ui/core';

//TODO: make LINKS general file to combine in Routes and here
const Links: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      width="20vw"
      color="secondary.main"
    >
      <Link color="textPrimary" component={RouterLink} to="/">
        Home
      </Link>
      <Link color="textPrimary" component={RouterLink} to="/favorites">
        Favorites
      </Link>
      <Switches />
    </Box>
  );
};

export default memo(Links);
