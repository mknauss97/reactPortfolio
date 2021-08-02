import React from 'react';
import Coinstar from '../img/coinstar.png';
import Work from '../img/work.JPG';
import Password from '../img/passwordGenerator.JPG';
import Hue from '../img/hueareyou.png';
import Tracker from '../img/employee-tracker.JPG';
import {Card, Button} from 'react-bootstrap';
import { auto } from 'async';

const style = {
    maxWidth: "60%",
    maxHeight: auto,
    margin: auto,
}

const Project = () => {
    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Coinstar} />
                <Card.Body>
                    <Card.Title>Coin Trackstar</Card.Title>
                    <Card.Text>
                        Application that allows you to watch the changes in CryptoCurrency.
                    </Card.Text>
                    <Button variant="primary" href="https://crypto-trackstar.herokuapp.com/">Go to Deployed</Button>
                </Card.Body>
            </Card>
        </div>


    )
}
export default Project;