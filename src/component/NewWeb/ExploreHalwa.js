import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export default function ExploreHalwa() {
    return (
        <Container>
            <Row className='exploreheading'>
                <Col>
                    <Slide direction='up'><h1 style={{ textAlign: 'center' }}>Explore Halwa</h1></Slide>
                </Col>
            </Row>
            <Row className='explorecards'>
                <Col>
                <Slide>
                    <Card sx={{ maxWidth: 345 }} className='explorecardmobile'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/newhome/v2.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Thengapal Halwa
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Coconut Halwa - 10 rupees pack
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" style={{ color: '#ED203F' }}>
                                Order
                            </Button>
                        </CardActions>
                    </Card>
                    </Slide>
                </Col>
                <Col>
                <Zoom>
                    <Card sx={{ maxWidth: 345 }} className='explorecardmobile'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/newhome/v2.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Thengapal Halwa
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Coconut Halwa - 10 rupees pack
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" style={{ color: '#ED203F' }}>
                                Order
                            </Button>
                        </CardActions>
                    </Card>
                    </Zoom>
                </Col>
                <Col>
                <Slide direction='right'>
                    <Card sx={{ maxWidth: 345 }} className='explorecardmobile'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/newhome/v2.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Thengapal Halwa
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Coconut Halwa - 10 rupees pack
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" style={{ color: '#ED203F' }}>
                                Order
                            </Button>
                        </CardActions>
                    </Card>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
}
