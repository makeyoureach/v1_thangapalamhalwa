import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Col, Container, Row } from 'react-bootstrap';
import { JackInTheBox, Slide, Zoom } from 'react-awesome-reveal';

export default function CardBox() {
    const theme = useTheme();

    return (
        <div style={{ background: '#ED203F', color: 'white' }}>
            <Container>
                <Row className='cardboxcontainer'>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <JackInTheBox><DeliveryDiningIcon id='deliveryicon' /></JackInTheBox>
                        
                    </Col>
                    <Col md="1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Zoom><div className='vlbar'></div></Zoom>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Slide><Typography component="div" variant="h5" className='deliverqoutes'>
                        We deliver Halwa all over India.
                        </Typography></Slide>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
