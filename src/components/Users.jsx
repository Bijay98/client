import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function User({users}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={users.Avatar} />
      <Card.Body>
        <Card.Title>{users.FirstName} {users.LastName}</Card.Title>
        <Card.Text>{users.Email}</Card.Text>
        <Button variant="primary">Connect</Button>
      </Card.Body>
    </Card>
  );
}

export default User;