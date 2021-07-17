import Routes from '../pages/Routes';
import { FC } from 'react';
import { Box } from '@material-ui/core';

const Content: FC = () => {
  return (
    <Box
      minHeight="92vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Routes />
    </Box>
  );
};

export default Content;
