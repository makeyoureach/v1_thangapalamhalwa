import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SmallImageSlider from './SmallImageSlider'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
function Gallery() {
  return (
    <Container>
        <Row className='gallerycontainerwithsmall'>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Slide direction='up'><SmallImageSlider/></Slide>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <div>
                <Slide direction='down'><h1 style={{padding: '3vh 0'}}>Our Gallery</h1></Slide>
                <Fade><div style={{fontSize:'18px'}}>An art gallery is an institution characterized by the sale of artwork in a formal environment organized by a group of people who run the gallery. An art gallery is a place where artwork is also exhibited and open to the public for viewing.</div></Fade>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Gallery
