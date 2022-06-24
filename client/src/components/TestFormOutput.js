import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { SAVE_BITESITE } from '../utils/mutations';
import  { TextField, Button, FormControl, spacing, Typography } from '@mui/material';

const ShowForm = ({myFormEntry}) => {
  // candidate state function
  // const [selectedSoMes, setSelectedSoMes] = useState([]);

  return (
    <>
    <div className="flex-cols space-y-8 ">
        {/* Previously had download button on top to 'build the form' */}
        <Typography variant="h6">Doing so well submitting - here's a rocket 🚀 </Typography>
        <pre
          sx={{
            fontSize: '.65rem',
            padding: '.25rem .5rem',
            overflowX: 'scroll',
          }}
        >
          {JSON.stringify(myFormEntry, null, 2)}
        </pre>
    </div>
    </>
  );
};

export default ShowForm;
