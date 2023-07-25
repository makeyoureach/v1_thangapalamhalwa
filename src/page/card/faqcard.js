
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Faqcard() {
  return (
    <>
    <div style={{textAlign:"center",fontWeight:'500',fontSize:'32px',fontFamily:"monospace"}}>
        Frequently Asked Questions
    </div>
    <Row xs={1} md={2} style={{padding:"2%"}} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </>
  );
}

export default Faqcard;