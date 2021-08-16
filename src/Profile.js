import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './Profile.css'

class Profile extends React.Component {
  makerServerRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims._raw;

    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    }
    const serverResponse = await axios.get('http://localhost:3001/test', config);
    console.log('worked', serverResponse)

  }
  render() {
    const { user } = this.props.auth0;
    console.log('app', this.props.auth0, user);

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body >
            <Card.Img src={user.picture} />
            <Card.Text>
              {user.name}
            </Card.Text>
            <Card.Text>
              {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
        <Button className="request" variant="success" onClick={this.makerServerRequest}> make request to server</Button>
      </>
    )
  }
}
export default withAuth0(Profile);
