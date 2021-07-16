import Search from '../components/Search';
import { FC } from 'react';
import { Box } from '@material-ui/core';

const Home: FC = () => {
  return (
    <Box>
      Home Page
      <Search />
    </Box>
  );
};

export default Home;
