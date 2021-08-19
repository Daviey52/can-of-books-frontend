import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import './Profile.css'

class Profile extends React.Component {

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

      </>
    )
  }
}
export default withAuth0(Profile);
