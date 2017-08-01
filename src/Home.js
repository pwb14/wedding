import React from 'react';
import { Parallax, Background } from 'react-parallax';
import haintblue from './images/haintbluehorizontal.jpg';

let style={
    textAlign: "center",
    paddingTop: "25%",
    color: "white",
    marginTop:"0px",
    fontSize: "55px"
};

const Home = () =>

        <div className="home">
        <h1 className="maintitle" style={style}>Parker Bednar and Madison Edwards</h1>
        <h3 className="date">June 2, 2018</h3>
        </div>;

export default Home;


