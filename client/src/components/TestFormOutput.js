import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { SAVE_BITESITE } from '../utils/mutations';

const ShowForm = ({myFormEntry}) => {
  // candidate state function
  // const [selectedSoMes, setSelectedSoMes] = useState([]);

  return (
    <>
    <div className="flex-cols space-y-8 ">
        {/* Previously had download button on top to 'build the form' */}
        <p>Doing so well submitting - here's a rocket 🚀 </p>
        <pre
          style={{
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
