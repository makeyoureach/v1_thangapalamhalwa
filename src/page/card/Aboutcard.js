import { Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsArrowRightSquare } from 'react-icons/bs'

function Aboutcard() {
    return (
        <div style={{ background: '#F3F3F3',  margin: '15vh 0px'}} id="aboutus">
            <Container>
                <Row xs={1} md={2} className="g-4" style={{padding:'30px'}}>
                    <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Card style={{background: '#F3F3F3', border:'0px', width: '70%' }}>
                            <Card.Img variant="top" src="/home/aboutus.jpg" />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{background: '#F3F3F3', border:'0px' }}>
                            <Card.Body>
                                <Card.Title><h1 className='heading'>About Us</h1></Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer. This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer. This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                                <Button style={{background:'white', color:'black', border: '1px solid #aa2c44'}}>Learn More <BsArrowRightSquare/></Button>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutcard;