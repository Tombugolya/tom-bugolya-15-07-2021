import Switches from './ThemeSwitch';
import { Link as RouterLink } from 'react-router-dom';
import { FC, memo } from 'react';
import { Box, Link } from '@material-ui/core';

//TODO: make LINKS general file to combine in Routes and here
const Links: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="30vw"
      justifyContent="flex-end"
      color="secondary.main"
    >
      <Link
        style={{ margin: '1em', minWidth: '4em' }}
        color="textPrimary"
        component={RouterLink}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ margin: '1em', minWidth: '4em' }}
        color="textPrimary"
        component={RouterLink}
        to="/favorites"
      >
        Favorites
      </Link>
      <Switches />
    </Box>
  );
};

export default memo(Links);
