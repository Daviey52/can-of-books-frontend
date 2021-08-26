import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'


class BooksFormUpdate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      _id: this.props.selectedBook._id,
      title: this.props.selectedBook.title,
      author: this.props.selectedBook.author,
      description: this.props.selectedBook.description,
      status: this.props.selectedBook.status,
      email: this.props.selectedBook.email,
    }
  }
  handleSubmitBook = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.props.handleClose();

  }

  handleTitle = (e) => {
    e.preventDefault()
    this.setState({ title: e.target.value })
  }
  handleAuthor = (e) => {
    e.preventDefault()
    this.setState({ author: e.target.value })
  }
  handleDescription = (e) => {
    e.preventDefault()
    this.setState({ description: e.target.value })
  }
  handleStatus = (e) => {
    e.preventDefault()
    this.setState({ status: e.target.value })
  }
  handleEmail = (e) => {
    e.preventDefault()
    this.setState({ email: e.target.value })
  }
  render() {
    console.log(this.state)

    return (
      <Container>
        <Form onSubmit={this.handleSubmitBook} >
          <Form.Label>
            <h3>Update Book </h3>
          </Form.Label>

          <Form.Group controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" onChange={this.handleTitle} value={this.state.title} />
          </Form.Group>

          <Form.Group controlId="author">
            <Form.Label>Book Author</Form.Label>
            <Form.Control type="text" onChange={this.handleAuthor} value={this.state.author} />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" onChange={this.handleDescription} value={this.state.description} />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label>Book Status</Form.Label>
            <Form.Control type="text" onChange={this.handleStatus} value={this.state.status} />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Book Email Address</Form.Label>
            <Form.Control type="text" onChange={this.handleEmail} value={this.state.email} />
          </Form.Group>

          <Button type="submit">
            Update Book
          </Button>
        </Form >
      </Container >
    )
  }
}

export default BooksFormUpdate;
