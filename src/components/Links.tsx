import Switches from './ThemeSwitch';
import routes from '../routes/routes';
import { Link as RouterLink } from 'react-router-dom';
import { FC, memo } from 'react';
import { Box, Hidden, Link } from '@material-ui/core';

const Links: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="30vw"
      justifyContent="flex-end"
      color="secondary.main"
    >
      {Object.values(routes).map((route, index) => (
        <Link
          key={index}
          style={{ margin: '1em', minWidth: '4em' }}
          color="textPrimary"
          component={RouterLink}
          to={route.to}
        >
          {route.name}
        </Link>
      ))}
      <Hidden smDown>
        <Switches />
      </Hidden>
    </Box>
  );
};

export default memo(Links);
