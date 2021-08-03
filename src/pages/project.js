import React from 'react';
import Coinstar from '../img/coinstar.png';
import Work from '../img/work.JPG';
import Password from '../img/passwordGenerator.JPG';
import Hue from '../img/hueareyou.png';
import Tracker from '../img/employee-tracker.JPG';
import {Card, Button} from 'react-bootstrap';
import { auto } from 'async';
import Budget from '../img/budgetTracker.JPG';

const style = {
    maxWidth: "60%",
    maxHeight: auto,
    margin: auto,
}

const Project = () => {
    return (

        <div className="row">
            <Card className="col-5">
                <Card.Img variant="top" src={Coinstar} />
                <Card.Body>
                    <Card.Title>Coin Trackstar</Card.Title>
                    <Card.Text>
                        Application that allows you to watch the changes in CryptoCurrency.
                    </Card.Text>
                    <Button variant="primary" href="https://crypto-trackstar.herokuapp.com/">Go to Deployed</Button>
                </Card.Body>
            </Card>
            <Card className="col-5">
                <Card.Img variant="top" src={Work} />
                <Card.Body>
                    <Card.Title>Work Planner</Card.Title>
                    <Card.Text>
                    A site where you can save your plans and will also show you the current hour.
                    </Card.Text>
                    <a href="https://mknauss97.github.io/Super_Awesome_Daily_Planner/" className="btn btn-primary">Go to Deployed</a>
                </Card.Body>
            </Card>
            <Card className="col-5">
                <Card.Img variant="top" src={Password} />
                <Card.Body>
                    <Card.Title>Password Generator</Card.Title>
                    <Card.Text>
                    A site that helps you make a password based on what answers it asks you.
                    </Card.Text>
                    <a href="https://mknauss97.github.io/passwordGenerator/">Go to Deployed</a>
                </Card.Body>
            </Card>
            <Card className="col-5">
                <Card.Img variant="top" src={Hue} />
                <Card.Body>
                    <Card.Title>Hue Are You</Card.Title>
                    <Card.Text>
                    A personality quiz that gives you a color based on your choices.
                    </Card.Text>
                    <a variant="primary" href="https://tfreed94.github.io/HueAreYou/">Go to Deployed</a>
                </Card.Body>
            </Card>
            <Card className="col-5">
                <Card.Img variant="top" src={Tracker} />
                <Card.Body>
                    <Card.Title>Employee Tracker</Card.Title>
                    <Card.Text>
                    A database where you can check your employees information by using mySQL. You can also add, edit, and delete employees.
                    </Card.Text>
                    <a variant="primary" href="https://github.com/mknauss97/employee-List">Go to Github Code</a>
                </Card.Body>
            </Card>
            <Card className="col-5">
                <Card.Img variant="top" src={Budget} />
                <Card.Body>
                    <Card.Title>Budget Tracker</Card.Title>
                    <Card.Text>
                    A site where you can track your funds online and offline
                    </Card.Text>
                    <a variant="primary" href="https://github.com/mknauss97/employee-List">Go to Github Code</a>
                </Card.Body>
            </Card>
        </div>
        


    )
}
export default Project;