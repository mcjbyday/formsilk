import React, { useState, useEffect } from 'react';
// import downloadFile from '../components/CreateDownload'
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { SAVE_BITESITE } from '../utils/mutations';
import TestForm from '../components/TestForm';


const TestFormContainer = () => {
  // create state for holding returned google api data
  const [selectedSoMes, setSelectedSoMes] = useState([]);
  
  // // create function to handle saving a social to our database
  // const handleSaveSoMe = async () => {
  //   // find the social in `searchedSoMes` state by the matching id
   
  //   // get token
  //   // const token = Auth.loggedIn() ? Auth.getToken() : null;
  //   // if (!token) {
  //   //   return false;
  //   // }

  return (
    <>
        <TestForm/>
    </>
  );
};

export default TestFormContainer;
