import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';

import '../../../sass/superuser/styles.css';

const BaseLayout = ({children, title}) => {
  return (
    <Box className='admin__dashboard'>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}

export default BaseLayout