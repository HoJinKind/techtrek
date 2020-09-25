import React, {Fragment, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const Forms = (props) => {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState(false);
    const [file, setFile] = useState(false);
    const DBSBranchCode = "081"

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const formCustomerName = form.elements.formCustomerName.value;
        const isValidName = formCustomerName.length < 64;
        const formCustomerAge = parseInt(form.elements.formCustomerAge.value);
        const isValidAge = formCustomerAge >= 18;
        const formServiceOfficerName = form.elements.formServiceOfficerName.value;
        const isValidServiceOfficerName = formServiceOfficerName.length < 64;
        const formNric = form.elements.formNric.value;
        const nricRegex = new RegExp('[A-Z][0-9]{7}[A-Z]');
        const isValidNric = nricRegex.test(formNric);
        const formRegistrationTime = form.elements.formRegistrationTime.value;
        const formBranchCode = form.elements.formBranchCode.value;
        const isValidBranchCode = formBranchCode ==  parseInt(DBSBranchCode);
        const formUploadedFile = form.elements.formUploadedFile.value;
        const isValidFileSize = ValidFileSize(formUploadedFile);
        const formProductType = form.elements.formProductType.value;

        const ValidFileSize = (fi) => { 
            // Check if any file is selected. 
            if (fi.files.length > 0) { 
                for (const i = 0; i <= fi.files.length - 1; i++) { 
                    const fsize = fi.files.item(i).size; 
                    const file = Math.round((fsize / 1024)); 
                    // The size of the file. 
                    if (file > 2048) { 
                        return True
                        // alert("File too small, please select a file greater than 2mb"); 
                    }else{
                        return False
                    }
                } 
            } 

        const isValid = form.checkValidity() && isValidName && isValidAge && isValidServiceOfficerName && isValidNric;
        if (!isValid) {
            const errorsObj = {};
            if (!isValidName) errorsObj.formCustomerName = `Name cannot be more than 64 characters.`;
            if (!isValidAge) errorsObj.formCustomerAge = `Must be at least 18 years old.`;
            if (!isValidServiceOfficerName) errorsObj.formServiceOfficerName = `Service Officer Name must not exceed 64 characters.`;
            if (!isValidNric) errorsObj.formNric = `NRIC must be in uppercase and only have 7 numeric numbers.`;
            if (!isValidRegistrationTime) errorsObj.formRegistrationTime = "Registration time must be provided in { DD/MM/YYYY HH:mm:ss } format.";
            if (!isValidBranchCode) errorsObj.formValidBranchCode = "Branch Code should be a valid DBS branch code.";
            if (!isValidFileSize) errorsObj.formValidFileSize = "File attached should not exceed 2 megabytes"
            console.log(errorsObj)
            setErrors(errorsObj);
            return;
        }
        
        const formObject = { customerName: formCustomerName, customerAge: formCustomerAge, serviceOfficerName: formServiceOfficerName, NRIC: formNric, image: file, productType: [formProductType]}
        console.log(formObject)
    }

    return (
        <Fragment>
            <section className="container">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    
                    <Form.Group controlId="formCustomerName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" placeholder="Customer Name" />
                    </Form.Group>

                    <Form.Group controlId="formCustomerAge">
                        <Form.Label>Customer Age</Form.Label>
                        <Form.Control type="text" placeholder="Customer Age" />
                    </Form.Group>

                    <Form.Group controlId="formServiceOfficerName">
                        <Form.Label>Service Officer Name</Form.Label>
                        <Form.Control type="text" placeholder="Service Officer Name" />
                    </Form.Group>

                    <Form.Group controlId="formNric">
                        <Form.Label>NRIC</Form.Label>
                        <Form.Control type="text" placeholder="NRIC" />
                    </Form.Group>

                    <Form.Group controlId="formRegistrationTime">
                        <Form.Label>Registration Time</Form.Label>
                        <Form.Control type="text" placeholder="Registration Time" />
                    </Form.Group>

                    <Form.Group controlId="formBranchCode">
                        <Form.Label>Branch Code</Form.Label>
                        <Form.Control type="text" placeholder="Branch Code" />
                    </Form.Group>

                    <Form.Group>
                        <Form.File id="formUploadedFile" label="Upload Image" />
                    </Form.Group>

                    <Form.Group controlId="formProductType">
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
