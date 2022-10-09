import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactMe() {
  return (
     
  <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="input" placeholder="Ex: John Smith" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
      </Button>
  </Form>
  )
}
