import Switches from './ThemeSwitch';
import routes from '../routes/routes';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQueryBreakpoint } from '../hooks/hooks';
import { FC, memo, useState } from 'react';
import {
  Box,
  Link,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import { List as ListIcon } from 'react-bootstrap-icons';

const Links: FC = () => {
  const mediumScreenBreakpoint = useMediaQueryBreakpoint('md');
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const toggleDrawer = (val: boolean) => () => setDrawerState(val);

  return mediumScreenBreakpoint ? (
    <Box
      display="flex"
      alignItems="center"
      width="30vw"
      justifyContent="flex-end"
      color="primary.main"
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
      <Switches />
    </Box>
  ) : (
    <>
      <Button onClick={toggleDrawer(true)}>
        <ListIcon size={40} />
      </Button>
      <SwipeableDrawer
        anchor="right"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        open={drawerState}
      >
        <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {Object.values(routes).map((route, index) => (
            <List key={index}>
              <ListItem button component={RouterLink} to={route.to}>
                <ListItemText primary={route.name} />
              </ListItem>
            </List>
          ))}
          <Divider />
          <Switches listItems />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default memo(Links);
