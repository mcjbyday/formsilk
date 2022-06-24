import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
import TestForm from '../components/TestForm';
import TestFormMUI from '../components/TestFormMUI';
import TestFormOutput from '../components/TestFormOutput';
import { Container } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const TestFormContainer = () => {
  // create state for holding returned google api data
  const [userEntryArray, setUserEntryArray] = useState([]);
  
  function buildUserEntryArray(values) {
    setUserEntryArray(values)
    console.log(values)
  }

  let myFormEntry = {
    entries: userEntryArray
  }
  
  const StyledSizedFormBucket = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  }));
  

  return (
    <div >
        <p>Using Vanilla Formik</p>
        <TestForm buildUserEntryArray={buildUserEntryArray} ></TestForm>
        <p>Using MUI</p>
        <StyledSizedFormBucket>
          <TestFormMUI buildUserEntryArray={buildUserEntryArray} ></TestFormMUI>
        </StyledSizedFormBucket>
        <TestFormOutput myFormEntry={myFormEntry} ></TestFormOutput>
    </div>
  );
};

export default TestFormContainer;
