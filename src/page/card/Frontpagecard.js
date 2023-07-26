import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {BsCartPlusFill} from 'react-icons/bs'
function Frontpagecard() {
  return (
    <Card className="bg-dark" style={{color:'#43121d',  border:'0px', borderRadius:'0px'}} id='front'>
      <Card.Img src="/home/front3.png" className='frontbackimg' alt="Card image" />
      <Card.ImgOverlay style={{paddingTop: '200px', paddingLeft: '180px', width: '100vh'}}>
        <Card.Title><h2 style={{color:'#aa2c44'}}>From Tirunelveli</h2><h1>Good food choices are good investments.</h1>
        </Card.Title>
        <Card.Text >
            
        </Card.Text>
        <Card.Text style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</Card.Text>
        <Button style={{background:'#aa2c44', color:'white', border: '1px solid white'}}><BsCartPlusFill style={{marginBottom:'5px'}}/> Order Now</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Frontpagecard;