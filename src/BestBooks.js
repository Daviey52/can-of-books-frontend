import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import BooksForm from './BooksForm';

class BestBooks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      books: [],
    }
  }
  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    }
    const serverResponse = await axios.get('http://localhost:3001/books', config);
    console.log('worked', serverResponse)
    this.setState({
      books: serverResponse.data
    })
    console.log(this.state.books)
  }
  handleCreateBook = async (bookInfo) => {
    try {
      let result = await axios.post('http://localhost:3001/books', bookInfo);
      const newBook = result.data;
      this.setState({
        books: [...this.state.books, newBook],
      })

    } catch (err) {
      console.log(err)
    }
  }
  handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      let remainingBooks = this.state.books.filter(book => book._id !== id)
      this.setState({
        books: remainingBooks
      })

    } catch (err) {
      console.log(err)
    }

  }



  // makerServerRequest = async () => {
  //   const { getIdTokenClaims } = this.props.auth0;
  //   let tokenClaims = await getIdTokenClaims();
  //   const jwt = tokenClaims.__raw;

  //   const config = {
  //     headers: { "Authorization": `Bearer ${jwt}` },
  //   }
  //   const serverResponse = await axios.get('http://localhost:3001/books', config);
  //   console.log('worked', serverResponse)
  //   this.setState({
  //     books: serverResponse.data
  //   })
  //   console.log(this.state.books)

  // }
  render() {
    const { user } = this.props.auth0;
    console.log('app', this.props.auth0, user);

    // let booksToRender = this.state.books.map((book, index) => (

    // <Carousel.Item key={index}>
    //   <Carousel.Caption>
    //     <p>{book.title}</p>
    //     <p>{book.author}</p>
    //     <p>{book.status}</p>
    //   </Carousel.Caption>
    // </Carousel.Item>
    // ))
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        <Button className="request" variant="success" onClick={this.makerServerRequest}> Make Request To Server</Button>
        {/* {this.state.books.length > 0 ? booksToRender : " "} */}
        {
          this.state.books.length > 0 &&
          this.state.books.map((book) => (
            <Card key={book._id}>
              <Card.Body>
                <Card.Text>{book.title}</Card.Text>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
                <Card.Text>{book.status}</Card.Text>
                <Card.Text>{book.email}</Card.Text>
                <Button variant="danger" onClick={() => this.handleDeleteBook(book._id)}>
                  Delete Book
                </Button>
              </Card.Body>

            </Card>
          ))
        }
        <BooksForm handleCreateBook={this.handleCreateBook} />
      </Jumbotron >
    )
  }
}

export default withAuth0(BestBooks);
