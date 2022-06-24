import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import  { TextField, Button, FormGroup, spacing } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import * as yup from 'yup';


const TestFormMUI = ({buildUserEntryArray}) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    // click handler to push into an array
    const [URLsArray, setURLsArray] = useState([])

    const instructionsBlob = {
        plainInstructions: "Provide your first name and an email!",
        offerInstructions: "Provide your first name and an email to get 30% off of your first purchase!",
        winChanceInstructions: "Connect with us for a chance to win free and unlimited access for a year!",
    }
    
    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });

    const formik = useFormik({
        initialValues: {
        email: 'foobar@example.com',
        password: 'foobar',
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            buildUserEntryArray([values.email, values.password])
        },
    });

        

    return (
        <div>
            <h2 id="testInstructionsTopline">{instructionsBlob.winChanceInstructions}</h2>
            
            <form onSubmit={formik.handleSubmit} >
                <FormGroup >
                    <TextField
                    sx={{
                        p: 2
                    }}
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                    sx={{
                        p: 2
                    }}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button 
                    sx={{
                        p: 2
                    }} 
                    color="primary" variant="contained"  type="submit" endIcon={<SendIcon/>}>
                    Submit
                    </Button>
                </FormGroup>
            </form>
            
        </div>
    );
}
export default TestFormMUI;
