import React from 'react';
import photo from "../img/headshot.jpg"

const About = () => {
    return (
        <div className="container card d-flex">
            <img src={photo} className="img-fluid mx-auto" alt="headshot" />
            <div className="d-flex justify-content-center">
                <h1 className="text-center">About Me</h1>
                <p>Hello! My name is Megan Knauss, I am currently 23 years old. I started learning Web Development in January 2021. I worked as a dog groomer for almost 2 years, 
                    I loved working with animals but saw what the strain does to your body after awhile. I currently work as a Steak Expert at a Omaha Steaks retail store.
                    I am currently a student at Case Western Reserve for Full Stack Web Development.</p>
            </div>
        </div>
    )
}