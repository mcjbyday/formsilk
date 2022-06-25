import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
import TestForm from '../components/TestForm';
import TestFormMUI from '../components/TestFormMUI';
import TestFormOutput from '../components/TestFormOutput';
import { Container } from '@mui/material';


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

  const myLateralMaxWithPreferences = {
    x: 0.4,
    alignSelf: "center"
}



  return (
    <Container sx={{display: 'flex', flexDirection: 'column', x: 0.4, justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
      {/* <p>Using Vanilla Formik</p>*/}
      {/* <TestForm buildUserEntryArray={buildUserEntryArray} ></TestForm> */}

      <TestFormMUI buildUserEntryArray={buildUserEntryArray} ></TestFormMUI>


      <TestFormOutput myFormEntry={myFormEntry} ></TestFormOutput>
    </Container>
  );
};

export default TestFormContainer;
