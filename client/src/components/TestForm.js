import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const TestForm = ({userEntryArray}) => {
    // Pass the Formik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // returns to us a goodie bag of form state and helper methods in a variable we call formik

    // click handler to push into an array
    const [URLsArray, setURLsArray] = useState([])

    const instructionsBlob = {
        plainInstructions: "Provide your full name and an email!",
        offerInstructions: "Provide your full name and an email to get 30% off of your first purchase!",
        winChanceInstructions: "Provide your full name and an email for a chance to win free access for a year!",
    }

    console.log(instructionsBlob.winChanceInstructions);

    return (
        <div>
            <h2 id="testInstructionsTopline">{instructionsBlob.winChanceInstructions}</h2>
            <Formik
                initialValues={{
                    fullName: '',
                    emailAddress: ''
                }}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(values)
                    
                    userEntryArray([values.fullName, values.emailAddress])
                }}
            >
                <Form >
                    <div>
                        <label htmlFor="fullnameForm">Provide your <span style={{ fontWeight: "900" }}>full name</span> </label>
                        <Field type="text" id="fullnameForm" name="fullName" placeholder="Your fullName here" />
                    </div>
                    <div>
                        <label htmlFor="emailAddressForm">Enter your <span style={{ fontWeight: "900" }}>email address</span></label>
                        <Field type="text" id="emailAddressForm" name="emailAddress" placeholder="Image URL" />
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default TestForm;
