import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const TestForm = ({buildUserEntryArray}) => {
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

    console.log(instructionsBlob.winChanceInstructions);

    return (
        <div>
            <h2 id="testInstructionsTopline">{instructionsBlob.winChanceInstructions}</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    emailAddress: ''
                }}
                onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    // console.log(values)
                    
                    buildUserEntryArray([values.firstName, values.lastName, values.emailAddress])
                }}
            >
                <Form >
                    <div>
                        <label htmlFor="firstnameField">Provide your <span style={{ fontWeight: "900" }}>first name</span></label>
                        <Field type="text" id="firstnameField" name="firstName" placeholder="First Name" />
                    </div>
                    <div>
                        <label htmlFor="lastnameField">Provide your <span style={{ fontWeight: "900" }}>last name</span> </label>
                        <Field type="text" id="lastnameField" name="lastName" placeholder="Last Name" />
                    </div>
                    <div>
                        <label htmlFor="emailAddressField">Enter your <span style={{ fontWeight: "900" }}>email address</span></label>
                        <Field type="text" id="emailAddressField" name="emailAddress" placeholder="sample@company.com" />
                    </div>
                    <div id="myBottomContainer" >
                        <button type="submit" aria-label="Proceed" disabled="" > Submit this data!</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
export default TestForm;
