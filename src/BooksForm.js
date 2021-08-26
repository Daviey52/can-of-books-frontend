import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'



class BooksForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      status: '',
      email: '',

    }

  }

  handleSubmitBook = (e) => {
    e.preventDefault();
    let title = e.target.title.value
    let author = e.target.author.value
    let description = e.target.description.value
    let status = e.target.status.value
    let email = e.target.email.value
    console.log(`newconsole`, title, author, status, description, email)
    this.props.handleCreateBook({ title, author, description, status, email })
    this.setState({ title, author, description, status, email })

  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmitBook} >
          <Form.Label>
            <h3>Add Book </h3>
          </Form.Label>

          <Form.Group controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="author">
            <Form.Label>Book Author</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Book Email Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button type="submit">
            Add Book
          </Button>


        </Form >
      </Container >
    )
  }
}

export default BooksForm;
