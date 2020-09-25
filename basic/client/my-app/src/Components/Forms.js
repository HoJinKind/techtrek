import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CountdownTimer from "./CountdownTimer";

const CSS_CLASSES = {
    "invalid": { fontSize: "12px", color: "red" }
}

const Forms = (props) => {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState(false);
    const [file, setFile] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        // Validate customer name length is not more than 64 characters
        const formCustomerName = form.elements.formCustomerName.value;
        const isValidName = formCustomerName.length < 64 && formCustomerName.length > 0;
        // Validate customer age is above 18
        const formCustomerAge = parseInt(form.elements.formCustomerAge.value);
        const isValidAge = formCustomerAge >= 18;
        // Validate service officer name length is not more than 64 characters
        const formServiceOfficerName = form.elements.formServiceOfficerName.value;
        const isValidServiceOfficerName = formServiceOfficerName.length < 64 && formCustomerName.length > 0;
        // check NRIC format
        const formNric = form.elements.formNric.value;
        const nricRegex = new RegExp('[A-Z][0-9]{7}[A-Z]');
        const isValidNric = nricRegex.test(formNric);
        // check file format is of type image
        const validFileExtensions = ["jpg", "jpeg", "png", "gif", "svg", "tiff", "ico", "dvu"];
        const isValidFile = (file[0]) ? validFileExtensions.includes(file[0].name.split('.').pop().toLowerCase()) : true;

        const isValid = form.checkValidity() && isValidName && isValidAge && isValidServiceOfficerName && isValidNric && isValidFile;
        if (!isValid) {
            const errorsObj = {};
            if (!isValidName) errorsObj.formCustomerName = `Customer Name must not exceed 64 characters.`;
            if (!isValidAge) errorsObj.formCustomerAge = `Customers must be at least 18 years of age.`;
            if (!isValidServiceOfficerName) errorsObj.formServiceOfficerName = `Service Officer Name must not exceed 64 characters.`;
            if (!isValidNric) errorsObj.formNric = `NRIC must be in uppercase and only have 7 numeric numbers.`;
            if (!isValidFile) errorsObj.exampleFormControlFile1 = `Please enter an image with a valid extension (JPG, PNG, GIF, SVG, TIFF, ICO, DVU).`;
            console.log(errorsObj)
            setErrors(errorsObj);
            return;
        }

        /* TODO */
        const formRegistrationTime = form.elements.formRegistrationTime.value;
        const formBranchCode = form.elements.formBranchCode.value;
        /* TODO */
        
        const formObject = { customerName: formCustomerName, customerAge: formCustomerAge, serviceOfficerName: formServiceOfficerName, NRIC: formNric, image: file[0] }
        console.log(formObject)
    }

    return (
        <Fragment>
            <section className="container">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Form.Group controlId="formCustomerName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Customer Name" required/>
                        <Form.Control.Feedback type="invalid" style={CSS_CLASSES.invalid}>
                            {errors.formCustomerName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formCustomerAge">
                        <Form.Label>Customer Age</Form.Label>
                        <Form.Control type="text" placeholder="Customer Age" />
                        <Form.Control.Feedback type="invalid" style={CSS_CLASSES.invalid}>
                            {errors.formCustomerAge}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formServiceOfficerName">
                        <Form.Label>Service Officer Name</Form.Label>
                        <Form.Control type="text" placeholder="Service Officer Name" />
                        <Form.Control.Feedback type="invalid" style={CSS_CLASSES.invalid}>
                            {errors.formServiceOfficerName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formNric">
                        <Form.Label>NRIC</Form.Label>
                        <Form.Control type="text" placeholder="NRIC" />
                        <Form.Control.Feedback type="invalid" style={CSS_CLASSES.invalid}>
                            {errors.formNric}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formRegistrationTime">
                        <Form.Label>Registration Time</Form.Label>
                        <Form.Control type="text" placeholder="Registration Time" />
                    </Form.Group>

                    <Form.Group controlId="formBranchCode">
                        <Form.Label>Branch Code</Form.Label>
                        <Form.Control type="text" placeholder="Branch Code" />
                    </Form.Group>

                    <Form.Group onChange={(e) => { setFile(e.target.files) }}>
                        <Form.File id="exampleFormControlFile1" label="Upload Image" />
                        <Form.Control.Feedback type="invalid" style={CSS_CLASSES.invalid}>
                            {errors.exampleFormControlFile1}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Product Type</Form.Label>
                        <Form.Control as="select" custom>
                        <option>Select</option>
                        <option>137 : Investor</option>
                        <option>070 : Insurance</option>
                        <option>291 : Loans</option>
                        <option>969 : Savings</option>
                        <option>555 : Credit Cards</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </section>
        </Fragment>
    );
   
  }

  export default Forms;
