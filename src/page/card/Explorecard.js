import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BsCartPlusFill} from 'react-icons/bs'

function Explorecard() {
    const cardtitle = ["10Rs Packet", "20Rs Packet", "70Rs Packet"];

    const cardtext = ["This is a longer card with supporting text below",
    "This is a longer card with supporting text below",
    "This is a longer card with supporting text below"]
    return (
        <Container >
            <h1 className='heading' style={{ textAlign: 'center', padding: '40px' }}>Explore Our Foods</h1><br/>
            <Row xs={1} md={3} className="g-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col key={idx} style={{width: '350px', margin: '0 30px'}}>
                        <Card>
                            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                            <Card.Img variant="top" className='exploreimage' src={"/home/or"+(idx+1)+".png"} />
                            </div>
                            <Card.Body>
                                <Card.Title>{cardtitle[idx]}</Card.Title>
                                <Card.Text>
                                    {cardtext[idx]}
                                </Card.Text>
                            </Card.Body>
                            <Button style={{ background:'white', border:'1px solid #aa2c44', color:'black'}}><BsCartPlusFill style={{marginBottom:'5px'}}/> Order Now</Button>
                        </Card>
                    </Col>
                    
                ))}
            </Row>
        </Container>
    );
}

export default Explorecard;