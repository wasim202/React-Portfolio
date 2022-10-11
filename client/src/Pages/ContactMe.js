import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';


export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjf3qb9', 'template_kn9pyhp', form.current, 'CE1ETEn5lJ4is29tv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//export default function ContactMe() {
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
     
  // <Form>
  //    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  //     <Form.Label>Name</Form.Label>
  //     <Form.Control type="input" placeholder="Ex: John Smith" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="name@example.com" />
  //   </Form.Group>
  //   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  //     <Form.Label>Message</Form.Label>
  //     <Form.Control as="textarea" rows={3} />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //       Submit
  //     </Button>
  // </Form>
  )
}
