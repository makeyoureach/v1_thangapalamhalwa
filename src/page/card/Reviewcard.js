import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Reviewcard() {
    return (
        <div style={{background:'#aa2c44', color:'white', margin: '15vh 0px'}}>
<Container>
            <Carousel data-bs-theme="dark">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Carousel.Item>
                        <div class="content">
                            <div class="thumbnail">
                                <img src="https://farsighttechnologies.com/wp-content/uploads/2020/09/RR.jpg" />
                            </div>
                            <div class="btnNtxt">
                                
                            <p class="sdCustomSliderHeadig">I would like to place on record my sincere appreciation for helping us to automate the Salary Revision Exercise and also the Leave Management System at Schneider Electric India. We have had huge challenges in the past to manage these 2 complex exercises and it was a nightmare for HR every March/April. However when we engaged you and worked closely to develop a Software Tool customised for Schneider Electric, our lives have become very much easy. What used to be a pain for us became a huge gain for HR Shared Services.</p>

                            </div>
                        </div>
                    </Carousel.Item>
                ))}

            </Carousel>
        </Container>
        </div>
        

    );
}

export default Reviewcard;