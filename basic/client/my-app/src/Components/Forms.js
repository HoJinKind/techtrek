import React, {Fragment, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const Forms = (props) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const emailAddress = form.elements.formBasicEmail.value;
        console.log(emailAddress)
    }

    return (
        <Fragment>
            <section className="container">
                <Form>

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
                        <Form.File id="exampleFormControlFile1" label="Upload Image" />
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
