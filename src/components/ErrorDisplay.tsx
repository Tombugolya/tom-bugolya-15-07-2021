import AccuWeatherAPI from '../api/AccuWeatherAPI';
import { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

const ErrorDisplay: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      minHeight="75vh"
      bgcolor="background.default"
    >
      <Typography variant="h3">
        Whoops seems like we have encountered an issue!
      </Typography>
      <Typography variant="h3">Here's the last known error:</Typography>
      <Typography variant="h3" style={{ color: 'red' }}>
        {AccuWeatherAPI.getLatestErrorMessage()}
      </Typography>
    </Box>
  );
};

export default ErrorDisplay;
