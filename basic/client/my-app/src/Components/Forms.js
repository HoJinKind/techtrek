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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File label="Upload Logo" custom>
                            <Form.File.Input />
                            <Form.File.Label data-browse="Submit">
                                Upload Logo
                            </Form.File.Label>
                        </Form.File>
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
