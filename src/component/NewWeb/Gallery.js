import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SmallImageSlider from './SmallImageSlider'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
function Gallery() {
  return (
    <Container>
        <Row id='gallerycontainerwithsmall'>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='gallery1'>
                <Slide direction='down'><SmallImageSlider/></Slide>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} className='gallery1'>
                <div>
                <Slide direction='up'><h1 style={{padding: '3vh 0'}}>Our Gallery</h1></Slide>
                <Fade><div style={{fontSize:'18px'}}>An art gallery is an institution characterized by the sale of artwork in a formal environment organized by a group of people who run the gallery. An art gallery is a place where artwork is also exhibited and open to the public for viewing.</div></Fade>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Gallery
