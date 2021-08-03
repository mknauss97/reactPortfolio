import React from 'react';
import photo from "../img/headshot.jpg"

const About = () => {
    return (
        <div className="container card d-flex">
            <img src={photo} className="img-fluid justify-content-center" width= "600" height= "400" alt="headshot" />
            <div className="d-flex justify-content-center">
                <h1 className="text-center">About Me</h1>
                <p>Hello! My name is Megan Knauss, I am currently 23 years old. I started learning Web Development in January 2021. I worked as a dog groomer for almost 2 years, 
                    I loved working with animals but saw what the strain does to your body after awhile. I currently work as a Steak Expert at a Omaha Steaks retail store.
                    I am currently a student at Case Western Reserve for Full Stack Web Development.</p>
            </div>
            <ul>
            <li>
                <a>Email:</a> <a href="mailto: mknauss97@gmail.com">Mknauss97@gmail.com</a>
            </li>
            <li>
                <a>GitHub:</a><a href="https://github.com/mknauss97">Mknauss97</a>
            </li>
            <li>
                <a>LinkedIn:</a><a href="https://www.linkedin.com/in/megan-knauss-a53355204/">Megan Knauss</a>
            </li>
            <li>
                <a href="https://1drv.ms/w/s!AiWrSd_MMYJ0yytbQ5RExHNMDzpA?e=1ehPXi">Resume</a>
            </li>
            </ul>
        </div>
    )
}

export default About;