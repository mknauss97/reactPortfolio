import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Coinstar from '../img/coinstar.png';
import Work from '../img/work.JPG';
import Password from '../img/passwordGenerator.JPG';
import Hue from '../img/hueareyou.png';
import Tracker from '../img/employee-tracker.JPG';

const Project = () => {
    return (


        <Carousel fade>
            <Carousel.Item>
                <a href="https://github.com/tfreed94/Crypto-Trackstar" target="blank">
                    <img
                        className="d-block w-100"
                        src={Coinstar}
                        alt="coinstar app"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Cryoto-Coinstar</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://github.com/mknauss97/Super_Awesome_Daily_Planner" target="blank">
                    <img
                        className="d-block w-100"
                        src={Work}
                        alt="work daily scheduler"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Super Awesome Daily Planner</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://github.com/mknauss97/passwordGenerator">
                    <img
                        className="d-block w-100"
                        src={Password}
                        alt="password generator"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Password Generator</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://github.com/tfreed94/HueAreYou">
                    <img
                        className="d-block w-100"
                        src={Hue}
                        alt="hue are you screenshot"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Hue are You Quiz</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://github.com/mknauss97/employee-List">
                    <img
                        className="d-block w-100"
                        src={Tracker}
                        alt="employee list"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Employee List</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Project;