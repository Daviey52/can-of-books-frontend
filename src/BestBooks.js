import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

class BestBooks extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      books: []
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
          this.state.books.map((book, index) => (
            <Card key={index}>
              <Card.Body>
                <Card.Text>{book.title}</Card.Text>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
                <Card.Text>{book.status}</Card.Text>
                <Card.Text>{book.email}</Card.Text>
              </Card.Body>

            </Card>
          ))
        }
      </Jumbotron >
    )
  }
}

export default withAuth0(BestBooks);
