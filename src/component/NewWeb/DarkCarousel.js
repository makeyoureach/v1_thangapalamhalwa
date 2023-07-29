import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import {Zoom, Slide} from 'react-awesome-reveal';

function DarkCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Card className="bg-white text-dark carouselcard">
          <Card.Img src="/newhome/v1.jpg" alt="Card image" className="carouselimagess" />
          <Card.ImgOverlay  style={{display:'flex',justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <Card.Text className='cardtext'>
            <Slide><Card.Title>Halwa</Card.Title></Slide>
              <Zoom>This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.</Zoom>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="bg-white text-dark carouselcard">
          <Card.Img src="/newhome/v1.jpg" alt="Card image" className="carouselimagess"  />
          <Card.ImgOverlay style={{display:'flex',justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <Card.Text className='cardtext'>
            <Slide><Card.Title>Halwa</Card.Title></Slide>
              <Zoom>This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.</Zoom>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarousel;