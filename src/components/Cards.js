import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "LinkedIn",
    image: image2,
    url: "https://linkedin.com/in/enrique-vazquez-ramos-bigdata",
    text: "This is my linkedIn",
    text2: "Welcome to your professional community. Join your colleagues, classmates, and friends on LinkedIn.",
  },
  {
    id: 2,
    title: "Replit",
    image: image1,
    url: "https://replit.com/@kikazoatp",
    text: "This is my Replit",
    text2: "Use our free, collaborative, in-browser IDE to code in 50+ languages — without spending a second on setup.",
  },
  {
    id: 3,
    title: "GitHub",
    image: image3,
    url: "https://github.com/enrique-cloud",
    text: "This is my GitHub",
    text2: "Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.",
  },
  // {
  //   id: 4,
  //   title: "Kaggle",
  //   image: image2,
  //   url: "https://www.kaggle.com/enriqueisidoro",
  //   text: "This is my Kaggle",
  //   text2: "Kaggle offers a no-setup, customizable, Jupyter Notebooks environment. Access GPUs at no cost to you and a huge repository of community published data & code.",
  // },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-200">
      <div className="row">
        {cards.map(({ title, image, url, id, text, text2 }) => (
          <div className="col-md-4 d-flex p-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text} text2={text2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
